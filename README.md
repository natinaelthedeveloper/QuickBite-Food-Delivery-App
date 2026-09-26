🍔 QuickBite — Food Delivery App

A modern full-stack food delivery mobile application built with React Native (Expo) and a backend powered by Sanity CMS.

QuickBite allows users to discover restaurants, browse food categories, add dishes to their cart, manage orders, and follow the delivery process through a clean and intuitive mobile interface.

🚧 This project is a portfolio/demo application and is not currently published on the Google Play Store or Apple App Store.

✨ Features

🏠 Home & Restaurant Discovery

Browse featured restaurants and food categories

View popular and recommended dishes

🍔 Restaurant & Menu Browsing

Explore restaurant menus

View dish details, prices, images, and descriptions

🛒 Shopping Cart

Add and remove food items

Increase or decrease item quantities

Automatically calculate subtotal and delivery fees

📦 Order Management

Review order details

View order status

Display delivery information

🚴 Delivery Tracking UI

Show delivery progress

Display rider information

Show estimated delivery time

🌙 Theme Support

Theme state is managed globally using React Context

🌍 Localization-ready UI

Prices displayed using ETB (Ethiopian Birr)

Designed with mobile-first layouts and reusable components

⚡ Dynamic Content

Restaurant and food data are managed through Sanity CMS

Images are delivered through Sanity's image API

🛠️ Tech Stack
Mobile App

React Native

Expo

JavaScript

NativeWind / Tailwind CSS

React Navigation

Redux Toolkit

React Context API

React Native Feather Icons

Backend / Content

Sanity CMS

Sanity Image URL


The demo shows the main user flow:

Home
  ↓
Restaurant
  ↓
Food Selection
  ↓
Cart
  ↓
Checkout
  ↓
Order
  ↓
Delivery Tracking

📂 Project Structure
food-delivery-app/
│
├── Food_Delivery/                    # React Native mobile application
│   │
│   ├── assets/                # Images and static assets
│   ├── components/            # Reusable UI components
│   ├── context/               # React Context providers
│   ├── navigation/            # Navigation configuration
│   ├── screens/               # Application screens
│   ├── slices/                # Redux Toolkit slices
│   ├── sanity/                # Sanity configuration
│   ├── store.js               # Redux store
│   ├── App.js                 # Application entry point
│   └── package.json
│
├── sanity/delivery-app                    # Backend / Sanity project
│   ├── schemaTypes/           # Sanity schemas
│   ├── static/                # Static files
│   └── package.json
│
├── .gitignore
└── README.md

🔐 Environment Variables

The application may require environment variables for services such as Sanity.


🧠 What I Learned

This project helped me practice and demonstrate:

Building mobile applications with React Native

Managing application state with Redux Toolkit

Creating reusable React Native components

Implementing navigation between multiple screens

Managing global application state with React Context

Working with a headless CMS

Fetching and displaying dynamic data

Handling shopping cart logic

Designing responsive mobile interfaces

Structuring a full-stack project

Managing environment variables and Git repositories

🔮 Future Improvements

Possible future improvements include:

User authentication

Online payment integration

Real-time GPS delivery tracking

Push notifications

Restaurant and food reviews

Favorite restaurants and dishes

Order history

User profile management

Dedicated delivery driver application

Production Android/iOS builds

Contributing

This project was created primarily as a portfolio project, but suggestions and improvements are welcome.

If you find an issue or have an idea, feel free to open an issue or submit a pull request.


👨‍💻 Author

NATINAEL ASFAW

Full-stack Developer

GitHub: https://github.com/natinaelthedeveloper

Portfolio: [https://natnaelasfawportfolio.netlify.app]

LinkedIn: [https://www.linkedin.com/in/natinael-asfaw-aa6116414]

⭐ If you find this project interesting, consider giving the repository a star!