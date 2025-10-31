

This is a simple **E-Commerce web application** built using **Next.js 14 (App Router)**, **TypeScript**, and **MongoDB**.  
It includes authentication, product management (Admin), and product browsing for users.

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/akshay321-x/nextjs-ecommerce-assignment.git
cd nextjs-ecommerce-assignment
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env.local` file in the project root and add:
```bash
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

> ⚠️ In Vercel, add these under **Project → Settings → Environment Variables** instead of committing the `.env.local` file.

### 4️⃣ Run the Development Server
```bash
npm run dev
```

Then open **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## 🧩 Features
- ✅ User Signup & Login with JWT Authentication  
- 🧑‍💻 Admin Dashboard for adding and viewing products  
- 🛒 Product Listing Page with search functionality  
- 💾 MongoDB for data persistence  
- 🎨 Modern UI using Tailwind CSS  

---

## ⚙️ Rendering Strategy

| Page | Rendering Type | Reason |
|------|----------------|--------|
| `/` (Home) | **Client-Side Rendering (CSR)** | Fetches latest products dynamically for real-time updates. |
| `/products` | **Client-Side Rendering (CSR)** | Displays all products fetched from the API. |
| `/dashboard` | **Client-Side Rendering (CSR)** | Used by Admin for interactive product management. |
| `/login` & `/signup` | **Client-Side Rendering (CSR)** | Handles user authentication interactively. |

---

## 🗄️ Database Setup

1. Create a **MongoDB Atlas** account at [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster and database named `ecommerce`
3. Copy your connection string:
   ```
   mongodb+srv://<username>:<password>@cluster0.mongodb.net/ecommerce
   ```
4. Paste it into `.env.local` under `MONGODB_URI`

---

## 🚀 Deployment on Vercel

1. Push your code to GitHub.
2. Import the repository in [Vercel Dashboard](https://vercel.com/).
3. Add the same environment variables:
   ```
   MONGODB_URI
   JWT_SECRET
   ```
4. Click **Deploy** — Vercel will automatically build and host your app.

---

## 👨‍💻 Tech Stack
- **Frontend:** Next.js, TypeScript, Tailwind CSS  
- **Backend:** Next.js API Routes (Node.js)  
- **Database:** MongoDB (Mongoose ORM)  
- **Auth:** JSON Web Token (JWT)  

---

## 🖼️ Screenshots

### 🏠 Homepage
![Homepage](https://via.placeholder.com/800x400?text=Homepage)

### 🔑 Login Page
![Login Page](https://via.placeholder.com/800x400?text=Login+Page)

### 🧾 Signup Page
![Signup Page](https://via.placeholder.com/800x400?text=Signup+Page)

### ⚙️ Admin Dashboard
![Dashboard](https://via.placeholder.com/800x400?text=Admin+Dashboard)

> *(Replace these placeholder images with actual screenshots from your local app later if you wish.)*

---

