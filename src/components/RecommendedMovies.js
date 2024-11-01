import React, { useEffect, useState } from "react";
import Axios from "axios";
import styled from "styled-components";
import MovieInfoComponent from "./MovieInfoComponent";

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
`;

const CoverImage = styled.img`
  object-fit: cover;
  height: 225px;
  width: 150px;
  border-radius: 8px;
  margin-bottom: 8px;
`;

const MovieTitle = styled.span`
  font-size: 14px;
  color: black;
  font-weight: 500;
`;

const RecommendedMovies = () => {
    const [recommendedMovies, setRecommendedMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null); // Track selected movie

    useEffect(() => {
        Axios.get(`https://www.omdbapi.com/?s=batman&apikey=ec6ae674`)
            .then((response) => {
                if (response.data && response.data.Search) {
                    setRecommendedMovies(response.data.Search);
                } else {
                    console.error("Invalid response structure:", response.data);
                }
            })
            .catch((error) => console.log(error));
    }, []);

    // Handler to select a movie and show details
    const handleMovieClick = (movie) => {
        setSelectedMovie(movie);
    };

    return (
        <div>
            <h2>Recommended Movies</h2>
            {selectedMovie ? (
                <MovieInfoComponent movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
            ) : (
                <RecommendedMoviesContainer>
                    {recommendedMovies.map((movie) => (
                        <MovieCard key={movie.imdbID} onClick={() => handleMovieClick(movie)}>
                            <CoverImage src={movie.Poster} alt={movie.Title} />
                            <MovieTitle>{movie.Title}</MovieTitle>
                        </MovieCard>
                    ))}
                </RecommendedMoviesContainer>
            )}
        </div>
    );
};

export default RecommendedMovies;