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
  }),
  actions: {
    async register(email, password) {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      this.user = userCredential.user;
      return userCredential;
    },

    async login(email, password) {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      this.user = userCredential.user;
      return userCredential;
    },

    async logout() {
      const cart = useCartStore();

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
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          this.user = user;
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
