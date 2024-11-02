# 🎬 Movie Recommendation System

Welcome to the **Movie Recommendation System**! This web application is designed to provide personalized movie recommendations. Built with **Next.js**, **React**, and **TypeScript**, it delivers an interactive and responsive user experience, allowing users to explore a variety of movies and customize their searches by category and rating.

![Movie Recommendation System](https://user-images.githubusercontent.com/your-image-link.png)

## 🌟 Key Features

- **Quick Movie Search**: Instantly search for movies by title, with real-time results from the OMDb API.
- **Filter Options**: Filter movies by categories such as Bollywood, Hollywood, Animation, and Documentary.
- **Rating Filter**: Set a minimum IMDb rating to tailor recommendations to your taste.
- **Detailed Information**: View in-depth details on selected movies, including genre, IMDb rating, and country.
- **Recommended Movies**: See personalized movie recommendations to explore beyond your search.
- **Mobile-Responsive**: Optimized for desktops, tablets, and mobile devices.

## 🛠️ Tech Stack

- **Framework**: Next.js
- **UI Library**: React, TypeScript
- **Styling**: Styled-components
- **API**: OMDb API for movie data

## 📋 Prerequisites

Before setting up the project, make sure you have:

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **OMDb API Key**: Get your API key from [OMDb API](http://www.omdbapi.com/).

## 🚀 Getting Started

### 1. Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/AbhishekS04/Recommendation-System.git
cd Recommendation-System
```

### 2. Install Dependencies

Install the required dependencies using npm or yarn:

```bash
npm install
# or
yarn install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory and add your OMDb API key:

```plaintext
NEXT_PUBLIC_OMDB_API_KEY=your_api_key_here
```

### 4. Run the Development Server

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Navigate to [http://localhost:3000](http://localhost:3000) to see the app in action.

## 📝 Usage Guide

1. **Search Movies**: Use the search bar to find movies by title.
2. **Apply Filters**: Select a category or set a minimum IMDb rating to refine your search results.
3. **View Movie Details**: Click on any movie card to view more information in a modal window.
4. **Discover Recommendations**: Check out personalized recommendations based on your search history.

## 📁 Project Structure

Here’s an overview of the project structure for better navigation and understanding of the components:

```plaintext
.
├── public/                      # Static assets such as images and icons
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Main layout component
│   │   ├── components/          # Component folder for movie cards, info, etc.
│   ├── styles/                  # Global styles and theme configurations
│   └── ...                      # Additional configurations and utilities
├── .env.local                   # Environment variables for the OMDb API key
└── README.md                    # Project documentation
```

## 📦 API Reference

The Movie Recommendation System uses the **OMDb API** to fetch movie data. This API provides detailed information on movies, series, and more. Learn more in the [OMDb API documentation](http://www.omdbapi.com/).

## 🤝 Contributing

Contributions are welcome! If you’d like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Open a Pull Request.

We appreciate all improvements, from bug fixes to documentation updates.

## 📜 License

This project is licensed under the MIT License. For details, see the [LICENSE](./LICENSE) file.

## 🙏 Acknowledgments

- **OMDb API**: For providing an extensive database of movies.
- **Next.js & React**: For making the frontend development smooth and robust.
- **Styled-components**: For the dynamic styling in the app.

## 📞 Contact

For any inquiries or suggestions, feel free to reach out to the repository owner, Abhishek S., through their GitHub profile [@AbhishekS04](https://github.com/AbhishekS04).

---

Thank you for visiting the Movie Recommendation System repository! Your feedback and contributions are valuable to us. 🎥✨

---
