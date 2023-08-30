import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  CharacterName,
  CardText,
  FullText,
  ImageCard,
} from "../styledComponents";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
import { FavButton, DivButton } from "../Favorites/FavouritesButton";
import { CardStyled, CardContent } from "./styledCard";
import { Salir } from "../Buttons/salir";

function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  myFavorites,
  addFav,
  removeFav,
  onClose,
}) {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const isCharacterFav = myFavorites.some((fav) => fav.id === id);
    setIsFav(isCharacterFav);
  }, [myFavorites, id]);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({
        id,
        name,
        status,
        species,
        gender,
        origin,
        image,
      });
    }
  };

  return (
    <>
      <CardStyled>
        <DivButton>
          {isFav ? (
            <FavButton onClick={handleFavorite}>❤️</FavButton>
          ) : (
            <FavButton onClick={handleFavorite}>🤍</FavButton>
          )}
          <Salir onClick={() => onClose(id)}>X</Salir>
        </DivButton>
        <CardContent>
          <ImageCard src={image} alt="" />
          <FullText>
            <Link to={`/detail/${id}`}>
              <CharacterName>{name}</CharacterName>
            </Link>
            <CardText>Current status: {status}</CardText>
            <CardText>Species: {species}</CardText>
            <CardText>Gender: {gender}</CardText>
          </FullText>
        </CardContent>
      </CardStyled>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
