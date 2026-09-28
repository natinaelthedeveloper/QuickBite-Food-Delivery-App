# 🍔 QuickBite — Food Delivery App

A modern full-stack food delivery mobile application built with **React Native (Expo)** and a backend powered by **Sanity CMS**.

QuickBite allows users to discover restaurants, browse food categories, add dishes to their cart, manage orders, and follow the delivery process through a clean and intuitive mobile interface.

> 🚧 **Note:** This project is a portfolio/demo application and is not currently published on the Google Play Store or Apple App Store.

---

## ✨ Features

### 🏠 Home & Restaurant Discovery
* Browse featured restaurants and food categories
* View popular and recommended dishes

### 🍔 Restaurant & Menu Browsing
* Explore full restaurant menus
* View dish details, prices, images, and descriptions

### 🛒 Shopping Cart
* Add and remove food items
* Increase or decrease item quantities
* Automatically calculate subtotal and delivery fees

### 📦 Order Management
* Review order details
* View order status
* Display delivery information

### 🚴 Delivery Tracking UI
* Show delivery progress in real time
* Display rider information
* Show estimated delivery time

### 🌙 Theme Support
* Global theme state management using **React Context**

### 🌍 Localization-ready UI
* Prices displayed natively in **ETB (Ethiopian Birr)**
* Designed with mobile-first layouts and reusable components

### ⚡ Dynamic Content
* Restaurant and food data managed dynamically through **Sanity CMS**
* High-performance image delivery powered by **Sanity Image API**

---

## 🛠️ Tech Stack

### **Mobile App**
* **Framework:** React Native (Expo)
* **Language:** JavaScript
* **Styling:** NativeWind / Tailwind CSS
* **Navigation:** React Navigation
* **State Management:** Redux Toolkit & React Context API
* **Icons:** React Native Feather Icons

### **Backend & Content Management**
* **CMS:** Sanity CMS
* **Assets:** Sanity Image URL API

---

## 🔄 App User Flow

Home  ──>  Restaurant  ──>  Food Selection  ──>  Cart  ──>  Checkout  ──>  Order  ──>  Delivery Tracking

## 📂 Project Structure
QuickBite-Food-Delivery-App/
├── Food_Delivery/              # React Native (Expo) Mobile Client
│   ├── assets/                 # App icons, splash screens, and local images
│   ├── components/             # Reusable UI elements (DishRow, BasketIcon, Categories)
│   ├── context/                # Theme and global UI state context providers
│   ├── navigation/             # React Navigation stack & tab configurations
│   ├── screens/                # Screen views (HomeScreen, RestaurantScreen, CartScreen, OrderPreparingScreen)
│   ├── slices/                 # Redux Toolkit state slices (basketSlice, restaurantSlice)
│   ├── sanity/                 # Sanity client config & GROQ query utilities
│   ├── store.js                # Centralized Redux store setup
│   ├── App.js                  # Main application entry point & context providers
│   └── package.json            # Mobile dependencies & Expo run scripts
│
├── sanity/                     # Backend / Sanity CMS Studio
│   └── delivery-app/           # Sanity project directory
│       ├── schemaTypes/        # Sanity schemas (restaurant, category, dish, featured)
│       ├── static/             # Studio assets & branding icons
│       ├── sanity.config.js    # Sanity Studio core setup & plugin configuration
│       └── package.json        # Studio dependencies & deployment scripts
│
├── .gitignore                  # Git tracking rules
└── README.md                   # Repository documentation


## 🔐 Environment Variables

The application may require environment variables for services such as Sanity.


## 🧠 What I Learned
### Building this project provided hands-on experience in full-stack mobile development:

### Mobile Development: Building cross-platform interfaces with React Native and Expo.

### State Management: Efficiently handling complex UI states using Redux Toolkit and Context API.

### Headless CMS Integration: Connecting React Native with Sanity CMS for real-time dynamic content delivery.

### Cart Logic: Designing stateful cart calculations for price totals, item counts, and delivery fees.

### Repository Architecture: Managing a full-stack project within a clean repository structure.

## 🔮 Future Improvements
[ ] User Authentication: Sign up/login with Email or Firebase.

[ ] Online Payments: Integration with localized payment gateways (Chapa, Telebirr).

[ ] Real-Time GPS Tracking: Live map location tracking for delivery drivers.

[ ] Push Notifications: Instant order status updates.

[ ] Reviews & Ratings: User feedback system for food and restaurants.

[ ] Driver Application: Dedicated mobile interface for delivery drivers.

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the issues page or submit a pull request.

## 👨‍💻 Author
Natinael Asfaw

### Full-Stack Developer

## 🌐 Portfolio: natnaelasfawportfolio.netlify.app

🐙 GitHub: @natinaelthedeveloper

💼 LinkedIn: Natinael Asfaw

⭐️ If you find this project helpful or interesting, please give it a star on GitHub!
