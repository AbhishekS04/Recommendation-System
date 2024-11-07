# 🎬 Movie Recommendation System

Welcome to the **Movie Recommendation System**! This web application provides personalized movie recommendations based on user input, such as category and rating preferences. Developed using **React.js** with **Next.js**, it offers a dynamic and responsive user experience for exploring a vast selection of movies.

## 🌟 Key Features

- **Instant Movie Search**: Quickly search for movies by title, with real-time results powered by the OMDb API.
- **Category Filters**: Filter movies by categories, including Bollywood, Hollywood, Animation, and Documentary.
- **Rating-Based Filtering**: Set a minimum IMDb rating to discover movies that meet your quality criteria.
- **In-Depth Movie Information**: Click on any movie to view details, such as genre, IMDb rating, and country.
- **Recommended Movies**: Enjoy tailored movie recommendations based on your activity within the app.
- **Responsive Design**: Seamlessly optimized for desktop, tablet, and mobile devices.

## 🛠️ Tech Stack

- **Framework**: Next.js (React.js)
- **UI Styling**: Styled-components
- **API**: OMDb API for accessing movie data

## 📋 Prerequisites

Before setting up the project, ensure you have:

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **OMDb API Key**: Register on [OMDb API](http://www.omdbapi.com/) to obtain an API key.

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

npm start
```

Navigate to [http://localhost:3000](http://localhost:3000) to view the app.

## 📝 Usage Guide

1. **Search Movies**: Enter a movie title in the search bar for relevant results.
2. **Apply Filters**: Filter movies by category or set a minimum IMDb rating.
3. **View Movie Details**: Click on any movie card to see more information.
4. **Explore Recommendations**: Discover additional movie recommendations curated for you.

## 📁 Project Structure

Here’s an overview of the project structure to help with navigation:

```plaintext
.
├── public/                      # Static assets like images and icons
├── src/
│   ├── app/
│   │   ├── layout.js            # Main layout component
│   │   ├── components/          # Components for movie cards, filters, etc.
│   ├── styles/                  # Global styles
│   └── ...                      # Additional configurations and utilities
├── .env.local                   # Environment variables for the OMDb API key
└── README.md                    # Project documentation
```

## 📦 API Reference

The Movie Recommendation System fetches movie data from the **OMDb API**, providing access to extensive information on movies, series, and more. Learn more about the API in the [OMDb API documentation](http://www.omdbapi.com/).

## 🤝 Contributing

We welcome contributions to improve the project! Here’s how you can contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Commit your changes: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Open a Pull Request.

Your contributions, whether for bug fixes or feature enhancements, are highly appreciated!

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.

## 🙏 Acknowledgments

- **OMDb API**: For providing a comprehensive database of movies and series.
- **Next.js & React**: For enabling a powerful and scalable frontend architecture.
- **Styled-components**: For efficient and dynamic UI styling.

## 📞 Contact

For any inquiries, please reach out to the repository owner, Abhishek Singh, via GitHub at [@AbhishekS04](https://github.com/AbhishekS04).

---

Thank you for exploring the **Movie Recommendation System**! We look forward to your feedback and contributions. 🎥✨
