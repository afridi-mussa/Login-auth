# 🔐 Login Authentication Dashboard

👉 **[Live Demo]([https://your-demo-link-here.com](https://login-auth-dashboard.netlify.app/)**

---

## 📌 Project Description

This project is a **modern login authentication system** built with React and a fake API from [ReqRes](https://reqres.in/). It demonstrates a complete authentication flow, including login with JWT tokens, protected routes, and a responsive dashboard with interactive UI components..

The project is styled with **glassmorphism effects, gradients, and hover animations** to give a professional e-commerce dashboard feel. It is fully responsive across desktop, tablet, and mobile devices.

---

## ✨ Features

* **Modern Login UI** with gradient background & glowing glass card.
* **Test Credentials Box** to easily copy and paste login details.
* **JWT Authentication** using fake API (ReqRes).
* **Token Management** – store, retrieve, and remove token from local storage.
* **Protected Routes** – restrict access to dashboard if not logged in.
* **Dashboard Overview**

  * Total Sales
  * Orders
  * Products
  * JWT Token display section
* **User Interaction Buttons**

  * Show/Hide User Details (avatar, name, email)
  * Show/Hide Login Credentials (email & password used)
  * Logout (redirects back to login page)
* **Responsive Design** with smooth animations and hover effects.

---

## 🛠️ Technologies Used

* **React.js** – frontend framework
* **React Router DOM** – routing and protected routes
* **Axios** – API requests
* **ReqRes API** – fake API for authentication
* **CSS3 (Glassmorphism + Animations)** – styling
* **Local Storage** – token & credential storage

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/afridi-mussa/Login-auth.git
cd Login-auth
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

### 4. Test Login Credentials

```text
Email: eve.holt@reqres.in
Password: cityslicka
```

---

## 📂 Folder Structure

```
src/
│── api.js              # API configuration (ReqRes)
│── auth.js             # Token helpers (set/get/remove)
│── App.jsx             # Routes and app structure
│
└── components/
    ├── LoginForm/
    │   ├── LoginForm.jsx
    │   └── LoginForm.css
    │
    └── Dashboard/
        ├── Dashboard.jsx
        └── Dashboard.css
```

---

## 📸 Screenshots

*Add screenshots of login page and dashboard here.*

---

## 🙌 Acknowledgements

* [ReqRes API](https://reqres.in/) for fake authentication.
* Inspiration from modern **e-commerce dashboards** and **glassmorphism UI**.
