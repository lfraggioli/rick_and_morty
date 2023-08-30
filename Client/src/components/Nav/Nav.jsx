import React from "react";
import { NavStyle, AgregarBoton, AgregarDiv, Input } from "../styledComponents";
import { Lista, ItemLi } from "./styledNav";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav(props) {
  const [id, setId] = useState([]);
  const [hovered, setHovered] = useState(false);
  const handleChange = (event) => {
    setId(event.target.value);
  };
  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const divStyle = {
    transform: hovered ? "scale(1.2)" : "scale(1)", // Aumenta el tamaño en un 20% durante el hover
  };

  return (
    <NavStyle>
      <Lista>
        <Link to="/home">
          <ItemLi>home</ItemLi>
        </Link>
        <Link to="/about">
          {" "}
          <ItemLi>about</ItemLi>
        </Link>
        <Link to="/fav">
          <ItemLi>favorites</ItemLi>
        </Link>
      </Lista>

      <AgregarDiv
        style={divStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Input type="text" onChange={handleChange} />
        <AgregarBoton onClick={() => props.onSearch(id)}>Agregar</AgregarBoton>
      </AgregarDiv>
    </NavStyle>
  );
}
