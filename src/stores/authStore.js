// /stores/authStore.js
import { defineStore } from "pinia";
import { auth } from "@/firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { useCartStore } from "@/stores/cartStore";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    _authReady: false,
    _authReadyPromise: null,
    _cartSyncedUid: null,
    _pendingMerge: false,
  }),
  actions: {
    async register(email, password) {
      this._pendingMerge = true;
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      this.user = userCredential.user;
      return userCredential;
    },

    async login(email, password) {
      this._pendingMerge = true;
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      this.user = userCredential.user;
      return userCredential;
    },

    async logout() {
      const cart = useCartStore();
      cart.stopAutoSave();

      try {
        await signOut(auth);
      } catch (err) {
        console.warn("Sign-out failed (clearing client state anyway):", err);
      } finally {
        try {
          cart.clearCart();
        } catch (e) {
          console.warn("Failed to clear cart store:", e);
        }

        try {
          localStorage.removeItem("cart");
        } catch (e) {
          console.warn("Failed to remove cart from localStorage:", e);
        }
        this.user = null;
      }
    },

    initAuth() {
      if (this._authReady) {
        return Promise.resolve();
      }
      if (this._authReadyPromise) {
        return this._authReadyPromise;
      }

      this._authReadyPromise = new Promise((resolve) => {
        onAuthStateChanged(auth, (user) => {
          const cart = useCartStore();
          this.user = user;

          if (user) {
            const uid = user.uid;
            if (this._cartSyncedUid !== uid) {
              this._cartSyncedUid = uid;
              const mergeLocal = this._pendingMerge;
              this._pendingMerge = false;

              cart.stopAutoSave();
              cart
                .loadFromServer(uid, { mergeLocal })
                .then(() => cart.startAutoSave(uid))
                .catch(() => cart.startAutoSave(uid));
            }
          } else {
            this._cartSyncedUid = null;
            this._pendingMerge = false;
            cart.stopAutoSave();
          }

          if (!this._authReady) {
            this._authReady = true;
            resolve();
          }
        });
      });
      return this._authReadyPromise;
    },
  },
});
