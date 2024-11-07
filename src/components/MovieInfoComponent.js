import React, { useEffect, useState } from "react";
import Axios from "axios";
import { API_KEY } from "../App";
import styled from "styled-components";
import CloseButton from "./CloseButton";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 30px;
  justify-content: flex-start; /* Align items to the start */
  align-items: flex-start; /* Align items to the start */
  border-bottom: 1px solid lightgray;
  position: relative;
  font-family: 'Rubik', sans-serif; /* Add this line */
`;

const CoverImage = styled.img`
  object-fit: cover;
  height: 350px;
  margin-right: 20px; /* Add some space between the image and the info column */
`;

const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0; /* Adjust margin to align with the poster */
`;

const MovieName = styled.span`
  font-size: 22px;
  font-weight: 600;
  color: black;
  margin: 15px 0;
  white-space: nowrap;
  overflow: hidden;
  text-transform: capitalize;
  text-overflow: ellipsis;
  font-family: 'Rubik', sans-serif; /* Add this line */
  & span {
    opacity: 0.8;
  }
`;

const MovieInfo = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: black;
  overflow: hidden;
  margin: 4px 0;
  text-transform: capitalize;
  text-overflow: ellipsis;
  font-family: 'Rubik', sans-serif; /* Add this line */
  & span {
    opacity: 0.5;
  }
`;

const CloseButtonContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const MovieInfoComponent = ({ selectedMovie, onClose }) => {
  const [movieInfo, setMovieInfo] = useState();

  useEffect(() => {
    Axios.get(
      `https://www.omdbapi.com/?i=${selectedMovie}&apikey=${API_KEY}`,
    ).then((response) => setMovieInfo(response.data));
  }, [selectedMovie]);

  return (
    <Container>
      <CloseButtonContainer>
        <CloseButton onClick={onClose} />
      </CloseButtonContainer>
      {movieInfo ? (
        <>
          <CoverImage src={movieInfo?.Poster} alt={movieInfo?.Title} />
          <InfoColumn>
            <MovieName>
              {movieInfo?.Type}: <span>{movieInfo?.Title}</span>
            </MovieName>
            <MovieInfo>
              IMDB Rating: <span>{movieInfo?.imdbRating}</span>
            </MovieInfo>
            <MovieInfo>
              Year: <span>{movieInfo?.Year}</span>
            </MovieInfo>
            <MovieInfo>
              Language: <span>{movieInfo?.Language}</span>
            </MovieInfo>
            <MovieInfo>
              Rated: <span>{movieInfo?.Rated}</span>
            </MovieInfo>
            <MovieInfo>
              Released: <span>{movieInfo?.Released}</span>
            </MovieInfo>
            <MovieInfo>
              Runtime: <span>{movieInfo?.Runtime}</span>
            </MovieInfo>
            <MovieInfo>
              Genre: <span>{movieInfo?.Genre}</span>
            </MovieInfo>
            <MovieInfo>
              Director: <span>{movieInfo?.Director}</span>
            </MovieInfo>
            <MovieInfo>
              Actors: <span>{movieInfo?.Actors}</span>
            </MovieInfo>
            <MovieInfo>
              Plot: <span>{movieInfo?.Plot}</span>
            </MovieInfo>
          </InfoColumn>
        </>
      ) : (
        "Loading..."
      )}
    </Container>
  );
};

export default MovieInfoComponent;