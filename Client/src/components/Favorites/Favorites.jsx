import React, { useState } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { orderCards, filterCards } from "../../redux/actions.js"; // Importa las actions que hayas creado
import { StyledSelect, ContenedorFav } from "./FavouritesButton.js";
import Card from "../Card/Card.jsx";

function Favorites() {
  const myFavorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);
  const optionsGender = ["All", "Male", "Female", "Genderless", "unknown"];
  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
    setAux(!aux); // Cambiar el valor de 'aux' al valor opuesto
  };

  const handleFilter = (e) => {
    const value = e.target.value;
    dispatch(filterCards(value));

    // Si se selecciona la opción "all", mostramos todos los personajes
    if (value === "all") {
      setAux(false);
    } else {
      setAux(true);
    }
  };

  return (
    <>
      <StyledSelect onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </StyledSelect>

      <StyledSelect onChange={handleFilter}>
        {optionsGender.map((option) => (
          <option key={option} value={option}>
            {" "}
            {option}{" "}
          </option>
        ))}
      </StyledSelect>

      <ContenedorFav>
        {myFavorites.map((favorite) => (
          <Card
            key={favorite.id}
            id={favorite.id}
            name={favorite.name}
            status={favorite.status}
            species={favorite.species}
            image={favorite.image}
            gender={favorite.gender}
          />
        ))}
      </ContenedorFav>
    </>
  );
}
export const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps)(Favorites);
