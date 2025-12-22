# 🛒 Shop.co

A modern e-commerce application built with Vue 3 and Vite, featuring a responsive design, user authentication, shopping cart functionality, and secure payments via Paystack.

## 🚀 Live Demo

👉 https://shopc0-app.netlify.app/

## ✨ Features

- **User Authentication**: Secure sign-up and sign-in functionality powered by Firebase Auth.
- **Product Browsing**: Browse products by category (Casual, Formal, Gym, Party) and view detailed product information.
- **Shopping Cart**: Add items to cart, adjust quantities, and view real-time price updates.
- **Checkout Process**: Integrated checkout with form validation and shipping calculation.
- **Payment Integration**: Secure payment processing utilizing the Paystack payment gateway.
- **Responsive Design**: Mobile-friendly interface optimized for all devices using Tailwind CSS.
- **Customer Reviews**: view product ratings and reviews.

## 🛠️ Tech Stack

- **Framework**: [Vue 3](https://vuejs.org/) (Composition API)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **State Management**: [Pinia](https://pinia.vuejs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Backend/Auth**: [Firebase](https://firebase.google.com/)
- **Payments**: [Paystack](https://paystack.com/)
- **UI Components**: [Naive UI](https://www.naiveui.com/)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16.0.0 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation

1.  **Clone the repository** (if applicable) or navigate to the project directory.

2.  **Install dependencies**:

    ```bash
    npm install
    ```

3.  **Environment Configuration**:

    Create a `.env` file in the root directory and add your Firebase and Paystack credentials. You can use the following template:

    ```env
    # Firebase Configuration
    VITE_FIREBASE_API_KEY=your_api_key
    VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
    VITE_FIREBASE_PROJECT_ID=your_project_id
    VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
    VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
    VITE_FIREBASE_APP_ID=your_app_id

    # Paystack Configuration
    VITE_PAYSTACK_PUBLIC_KEY=your_paystack_public_key
    ```

### Running the Application

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in your terminal).

### Building for Production

To build the application for production:

```bash
npm run build
```

This will generate a `dist` folder containing the optimized production build.

### Linting

To lint and fix code style issues:

```bash
npm run lint
```

## Project Structure

- **`src/assets`**: Static assets like images and global styles.
- **`src/components`**: Reusable Vue components (NavBar, ProductCard, etc.).
- **`src/data`**: Static data files or mock data.
- **`src/firebase`**: Firebase configuration and initialization.
- **`src/router`**: Vue Router configuration for page navigation.
- **`src/stores`**: Pinia stores for state management (auth, cart).
- **`src/utils`**: Helper functions and utilities.
- **`src/views`**: Main page components (HomePage, CartPage, CheckoutPage, etc.).
