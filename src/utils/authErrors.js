export function mapAuthError(code) {
  if (!code) return "An unknown error occurred.";

  switch (code) {
    case "auth/email-already-in-use":
      return "That email is already registered. Try logging in or use another email.";
    case "auth/invalid-email":
      return "The email address is not valid. Please correct it.";
    case "auth/weak-password":
      return "The password is too weak. Please use at least 8 characters with numbers and symbols.";
    case "auth/wrong-password":
      return "Incorrect password. Please check and try again.";
    case "auth/user-not-found":
      return "No account found with that email. Please sign up first.";
    case "auth/too-many-requests":
      return "Too many attempts. Please wait a bit and try again later.";
    case "auth/network-request-failed":
      return "Network error. Check your connection and try again.";
    case "auth/operation-not-allowed":
      return "This operation is currently not allowed. Contact support.";
    default:
      // For unknown codes, return the code minus the prefix (if present)
      return code.replace(/^auth\//, "").replace(/-/g, " ");
  }
}
