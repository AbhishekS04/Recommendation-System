import React, { useEffect, useState } from "react";
import Axios from "axios";
import styled from "styled-components";
import { API_KEY } from "../App";

const RecommendedMoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
`;

const MovieCard = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  text-align: center;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 120px;
  }

  @media (max-width: 480px) {
    width: 100px;
  }
`;

const CoverImage = styled.img`
  object-fit: cover;
  height: 225px;
  width: 150px;
  border-radius: 8px;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    height: 180px;
    width: 120px;
  }

  @media (max-width: 480px) {
    height: 150px;
    width: 100px;
  }
`;

const MovieTitle = styled.span`
  font-size: 14px;
  color: black;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const keywords = ["batman", "superman", "spiderman", "avengers", "matrix", "inception", "star wars", "harry potter", "lord of the rings", "jurassic park"];

const getRandomKeywords = (count) => {
    const shuffledKeywords = shuffleArray([...keywords]);
    return shuffledKeywords.slice(0, count);
};

const RecommendedMovies = ({ onMovieSelect }) => {
    const [recommendedMovies, setRecommendedMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const selectedKeywords = getRandomKeywords(3); // Fetch movies for 3 different keywords
            const moviePromises = selectedKeywords.map((keyword) =>
                Axios.get(`https://www.omdbapi.com/?s=${keyword}&apikey=${API_KEY}`)
            );

            try {
                const responses = await Promise.all(moviePromises);
                let allMovies = [];
                responses.forEach((response) => {
                    if (response.data && response.data.Search) {
                        allMovies = [...allMovies, ...response.data.Search];
                    }
                });

                const shuffledMovies = shuffleArray(allMovies).slice(0, 12); // Ensure at least 12 movies
                setRecommendedMovies(shuffledMovies);
            } catch (error) {
                console.log(error);
            }
        };

        fetchMovies();
    }, []);

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Recommended Movies</h2>
            <RecommendedMoviesContainer>
                {recommendedMovies.map((movie) => (
                    <MovieCard key={movie.imdbID} onClick={() => onMovieSelect(movie.imdbID)}>
                        <CoverImage src={movie.Poster} alt={movie.Title} />
                        <MovieTitle>{movie.Title}</MovieTitle>
                    </MovieCard>
                ))}
            </RecommendedMoviesContainer>
        </div>
    );
};

export default RecommendedMovies;