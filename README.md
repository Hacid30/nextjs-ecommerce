# MyStore - E-Commerce App

A modern e-commerce web application built with **Next.js (App Router)**, **Zustand** for global state management, and **Auth.js (NextAuth)** for GitHub OAuth authentication.

---

## Key Features

* **Dynamic Catalog:** Product navigation and dynamic rendering.
* **Persistent Shopping Cart:** 
  * Lightweight global state management powered by **Zustand**.
  * Local storage data persistence via middleware (items persist upon page refresh).
  * Controls to add, increase, decrease, and remove items.
* **GitHub Authentication:**
  * Secure login and logout using **Auth.js (NextAuth v5)** and OAuth 2.0.
  * Integration with `<SessionProvider>` to read session state across client components.
  * User avatar and profile details integrated directly into the sticky Navigation Bar.
* **Protected Routes:**
  * **Checkout / Payment Simulator** (`/checkout`) restricted exclusively to authenticated users.

---

## Tech Stack

* **Framework:** [Next.js](https://nextjs.org/) (App Router)
* **UI Library:** [React](https://react.dev/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Global State:** [Zustand](https://zustand-demo.pmnd.rs/)
* **Authentication:** [Auth.js / NextAuth.js](https://authjs.dev/)
* **Version Control:** Git & GitHub

---

## Local Setup & Installation

Follow these steps to clone and run the project locally:

### 1. Clone the repository
```bash
git clone https://github.com/Hacid30/nextjs-ecommerce.git
cd nextjs-ecommerce
```

#### Install dependencies
```
npm install
```

#### Environment Variables
Create a .env.local file in the root directory:
```bash
AUTH_SECRET="your_secret_encryption_key"
AUTH_GITHUB_ID="your_github_client_id"
AUTH_GITHUB_SECRET="your_github_client_secret"
```

#### Run the development server
```bash
npm run dev
```

## Author

**Héctor Hacid Julio Meza**  
Junior Frontend Web Developer

## License

This project is for educational and personal use.
