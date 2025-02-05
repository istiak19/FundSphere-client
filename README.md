# 💰 FundSphere  

**FundSphere** is a crowdfunding platform that enables users to raise funds for various causes. Users can create and manage campaigns, while others can donate to support them. The platform includes **secure authentication**, **protected routes**, and a **dark/light theme toggle** for an enhanced user experience.  

🔗 **Live Website:** [FundSphere](https://fundsphere-website.web.app/)  

---

## 📌 Features  

✅ **User Authentication** – Secure login and registration via email/password or Google authentication.  
✅ **Campaign Management** – Users can create, modify, and delete their own campaigns.  
✅ **Donation System** – Users can donate to active campaigns to help fund causes.  
✅ **Dark/Light Mode** – Toggle between dark and light themes for better accessibility.  
✅ **Protected Routes** – Campaign management and donation pages are restricted to logged-in users.  

---

## 📜 Table of Contents  

- [Tech Stack](#-tech-stack)  
- [Dependencies](#-dependencies)  
- [Installation](#-installation)  
- [Usage Guide](#-usage-guide)  
- [Configuration](#-configuration)  
- [Development Commands](#-development-commands)  
- [Contributing](#-contributing)  
- [License](#-license)  

---

## 🛠 Tech Stack  

### **Frontend:**  
- **React** – Component-based UI framework  
- **React Router** – Navigation and routing  
- **Tailwind CSS & DaisyUI** – Modern and responsive styling  
- **Firebase** – Authentication and database  

---

## 📦 Dependencies  

- **Authentication:** Firebase  
- **UI Components:** DaisyUI, SweetAlert2, React Icons  
- **SEO Optimization:** React Helmet  
- **Animations:** Lottie React, AOS, React Awesome Reveal  
- **Date Handling:** React Datepicker  
- **Notifications:** React Toastify, React Tooltip  

🔹 Full dependency list available in [`package.json`](package.json).  

---

## 📥 Installation  

1️⃣ Clone the repository:  
```sh
git clone https://github.com/istiak19/FundSphere-client
cd FundSphere-client
```  

2️⃣ Install dependencies:  
```sh
npm install
```  

3️⃣ Start the development server:  
```sh
npm run dev
```  

---

## 🎯 Usage Guide  

- **Campaign Creators** → Create, edit, and manage fundraising campaigns.  
- **Donors** → Browse and donate to active campaigns.  
- **Admins** → Manage users and monitor fundraising activities.  

💡 **Ensure Firebase credentials are configured in the `.env` file before running the project.**  

---

## 🔧 Configuration  

- **Firebase Setup** → Add Firebase credentials in `firebaseConfig.js`.  
- **Theme Customization** → Modify default theme settings in `tailwind.config.js`.  

---

## 🚀 Development Commands  

🔹 **Start Development Server:**  
```sh
npm run dev
```  

🔹 **Build for Production:**  
```sh
npm run build
```  

🔹 **Run Linter:**  
```sh
npm run lint
```  

🔹 **Preview Build:**  
```sh
npm run preview
```