# Frontend Angular Coding Test – User Dashboard

## 📌 Project Overview

This project is a **mini dashboard** built using **Angular**.
It fetches a list of users from a public API and displays them in a table with **search, sorting, loading, and error handling**.

## 🛠 Tech Stack

- Angular
- TypeScript
- HTML / CSS
- HttpClientModule

---

## 📂 Project Structure (Recommended)

Understood 👍
You want the **README “Project Structure” written exactly based on your screenshot (current structure)** — not the refactored one.

Below is the **correct Project Structure section according to your screenshot**.
👉 You can **copy-paste this directly into README.md**.

---

## 📁 Project Structure (As Per Current Implementation)

```
frontend-angular-test/
│
├── src/
│   ├── app/
│   │   ├── layouts/
│   │   │   └── admin-layout/
│   │   │       ├── admin-layout.component.ts
│   │   │       ├── admin-layout.component.html
│   │   │       ├── admin-layout.component.scss
│   │   │       ├── admin-layout.component.spec.ts
│   │   │       └── admin-layout.routes.ts
│   │   │
│   │   ├── shared-ui/
│   │   │   ├── alert/
│   │   │   ├── directives/
│   │   │   ├── filters-pipes/
│   │   │   ├── guard/
│   │   │   ├── json/
│   │   │   ├── loading/
│   │   │   ├── models/
│   │   │   ├── services/
│   │   │   ├── index.ts
│   │   │   ├── shared-ui.module.ts
│   │   │   └── WindowRef.ts
│   │   │
│   │   ├── views/
│   │   │   └── admin-pages/
│   │   │       └── dashboard/
│   │   │           ├── dashboard.component.ts
│   │   │           ├── dashboard.component.html
│   │   │           ├── dashboard.component.scss
│   │   │           └── dashboard.component.spec.ts
│   │   │
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.spec.ts
│   │   ├── app.config.ts
│   │   └── app.config.server.ts
│   │
│   ├── environments/
│   └── styles.scss
│
├── angular.json
├── package.json
└── README.md
```

---

## 🧠 Structure Explanation (Simple)

- **layouts/admin-layout**
  Contains the main layout structure used across admin pages.

- **views/admin-pages/dashboard**
  Dashboard feature that displays user data in table format.

- **shared-ui**
  Holds reusable components, services, pipes, guards, and utilities used across the app.

- **app.component**
  Root component that loads layout and feature modules.

---

## 🎯 Interview-Friendly Explanation (Based on Screenshot)

> “The project follows a layout-based structure where admin layout wraps dashboard pages, shared-ui contains reusable components and services, and feature pages are placed under views for better separation.”

---

If you want next:

- ✔ Convert this README to **best-practice structure**
- ✔ Add **why this structure was chosen**
- ✔ Prepare **interview justification**
- ✔ Gradually refactor without breaking code

Just tell me 👍

## 🚀 Installation & Run Project

### 1️⃣ Navigate to project folder

```bash
cd frontend-angular-test
```

### 2️⃣ Install dependencies

```bash
npm install -f
```

### 3️⃣ Run application

```bash
ng serve
# OR
npm run start
```

Application will run at:

```
http://localhost:4200
```

---

## 🏗 Build Project

```bash
ng build
# OR
npm run build
```

---

## 📡 API Used

Public API:

```
https://jsonplaceholder.typicode.com/users
```

---

## 📋 Features Implemented

### ✅ Data Fetching

- API is called **inside a service file** using `HttpClient`
- API call is triggered in `ngOnInit()` of component

### ✅ Data Display

Table shows:

- Name
- Email
- Phone
- Company Name

---

### 🔍 Search Functionality

- Search bar filters users by:
  - **Name**
  - **Email**

- Case-insensitive search

---

### 🔃 Sorting

- Clickable column headers
- Sorting applied on:
  - **Name**
  - **Company Name**

- Supports ascending & descending order

---

### ⏳ Loading Indicator

- Shows **"Loading..."** while API data is fetching

---

### ❌ Error Handling

- If API fails:

```
Failed to load users
```

---

## 🧠 Code Design Guidelines Followed

- API logic separated into **service**
- Component handles only UI logic
- Clean and readable structure
- Reusable and maintainable code

---

## 📘 Preparation / Explanation Document

### 🔹 Why Service is Used?

- Keeps component clean
- Follows Angular best practices
- Easy to reuse and test

### 🔹 Why ngOnInit?

- Angular lifecycle hook
- Best place to load initial data

### 🔹 Search Logic

- Uses `filter()` on user list
- Converts search text and fields to lowercase

### 🔹 Sorting Logic

- Maintains:
  - `sortColumn`
  - `sortDirection`

- Toggles direction on each click
