import React, { Component } from "react";
import { Link } from "react-router-dom";
import {CharacterName,  CardText,  FullText,  ImageCard} from "../styledComponents";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
import {FavButton, DivButton} from "../Favorites/FavouritesButton";
import { CardStyled, CardContent } from "./styledCard"; 
import { Salir } from "../Buttons/salir";



export class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFav: false,
    };
  }

  componentDidMount() {
    this.checkIfFavorite();
  }

  checkIfFavorite = () => {
    const { myFavorites, id } = this.props;
    const isFavorite = myFavorites.some((fav) => fav.id === id);
    this.setState({ isFav: isFavorite });
  };

  handleFavorite = () => {
    const { isFav } = this.state;
    const { id, addFav, removeFav } = this.props;

    if (isFav) {
      this.setState({ isFav: false });
      removeFav(id);
    } else {
      this.setState({ isFav: true });
      const { name, status, species, gender, origin, image } = this.props;
      addFav({ name, status, species, gender, origin, image, id });
    }
  };

  render() {
    const { name, status, species, gender, origin, image, id, onClose } =
      this.props;
    const { isFav } = this.state;

    return (
      // <CardStyle>
      <>
          <CardStyled>
        <DivButton>
          {isFav ? (
            <FavButton onClick={this.handleFavorite}>❤️</FavButton>
          ) : (
            <FavButton  onClick={this.handleFavorite}>🤍</FavButton>
          )}
          ;
        
          <Salir onClick={() => onClose(id)} >X</Salir>
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
          <CardText>Origin: {origin.name}</CardText>
        </FullText>
        </CardContent>
        </CardStyled>
        </>
      /* </CardStyle> */
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
