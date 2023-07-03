import React from "react";
import { NavStyle, AgregarBoton, AgregarDiv, Input } from "../styledComponents";
import { useState } from "react";

export default function Nav(props) {
   const [id, setId] = useState([])
   const [hovered, setHovered] = useState(false);
   const handleChange = (event) => {
      setId(event.target.value)
   }
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
      <NavStyle >
         <AgregarDiv style={divStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
         <Input type='text' onChange={handleChange} />
         <AgregarBoton onClick={()=> props.onSearch(id)}>Agregar</AgregarBoton>
         </AgregarDiv>
      </NavStyle>
   );
}


//* En este código, hemos agregado dos nuevos estados: hovered y setHovered, que se utilizan para controlar si el mouse está sobre el componente AgregarDiv. Cuando el mouse entra en el componente, se activa el estado hovered y aumentamos el tamaño del componente utilizando la propiedad transform en la variable divStyle. Cuando el mouse sale del componente, el estado hovered se desactiva y el tamaño vuelve a la normalidad.