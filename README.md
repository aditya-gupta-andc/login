# AKG Website Login & Dashboard

[![View Demo](https://img.shields.io/badge/🔗%20View%20Demo-%230072ff?style=for-the-badge&logo=google-chrome&logoColor=white)](https://aditya-gupta-andc.github.io/login)  https://aditya-gupta-andc.github.io/login

A simple and responsive **Login + Dashboard** system built with **HTML**, **CSS**, and **Vanilla JavaScript**. Includes a splash intro screen, client-side session handling, slide-in dashboard menu, and auto logout functionality.

---

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/aditya-gupta-andc/login.git
cd login
```

---

## 🚀 Features

- 🔐 Login system using hardcoded user data
- 🎬 Intro animation on page load
- ✅ Mobile number & password validation
- 📱 Fully responsive design
- 🧠 `sessionStorage` based session control
- 🕒 3-minute auto logout with countdown timer
- ⚠️ Timer color change + blinking when near timeout
- 🔄 Slide-in dashboard navigation
- 👋 Personalized welcome message
- 🚪 Logout button with session cleanup

---


## 🧪 How It Works

```

User lands on index.html, sees a 3-second animated splash screen.

After that, the login form fades in.

On login:

sessionStorage saves the user's mobile number.

User is redirected to dashboard.html.

A 3-minute timer starts.

If the timer hits 0, the user is logged out automatically.

Warnings appear at 60s and blinking at 30s.

Dashboard includes:

User’s mobile number

Slide-in/out navigation menu

Logout button

```
