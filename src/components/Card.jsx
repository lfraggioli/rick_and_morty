import React from "react";
import { CardStyle, CharacterName, CardText, Salir, FullText, ImageCard } from "./styledComponents";

export default function Card ({name, status, species, gender, origin, image, onClose, id}) {
  
  
  return (
      
          <CardStyle>
            <Salir onClick={() => onClose(id)}>X</Salir>
           <ImageCard src={image} alt="" />
            <FullText>
            <CharacterName>{name}</CharacterName>
            
            <CardText>Current status: {status}</CardText>
            <CardText>Species: {species}</CardText>
            <CardText>Gender: {gender}</CardText>
            <CardText>Origin: {origin}</CardText>
            </FullText>
          
          </CardStyle>
        );

}


//*FORMATO CLASE:
// class Card extends React.Component {
//   constructor(props) {
    
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <button onClick={this.props.onClose}>X</button>
//         <h2>{this.props.name}</h2>
//         <h2>{this.props.status}</h2>
//         <h2>{this.props.species}</h2>
//         <h2>{this.props.gender}</h2>
//         <h2>{this.props.origin.name}</h2>
//        <img src={this.props.image} alt="" />
//       </div>
//     );
//   }
// }


/*
name: nombre.
status: status.
species: especie.
gender: género.
origin: origen (ten en cuenta que el nombre del origen viene dentro de otra propiedad llamada name).
image: imagen.
 */
