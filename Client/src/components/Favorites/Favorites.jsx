import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { orderCards, filterCards, getFav } from "../../redux/actions.js"; // Importa las actions que hayas creado
import { StyledSelect } from "./FavouritesButton.js";
import Card from "../Card/Card.jsx";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Footer from "../Footer/Footer.jsx";

function Favorites() {
  const myFavorites = useSelector((state) => state.myFavorites);
  console.log("prueba: ", myFavorites);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFav());
  }, []);

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
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slideToSlide: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
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

      <Carousel responsive={responsive}>
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
      </Carousel>
      <Footer />
    </>
  );
}

export default Favorites;
