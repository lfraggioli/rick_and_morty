import React from "react";

export default function Card (props) {
  const {id, name, status, species, gender, origin, image, onClose} = props

  return (
          <div>
            <button onClick={onClose}>X</button>
            <h2>{name}</h2>
            <h2>{status}</h2>
            <h2>{species}</h2>
            <h2>{gender}</h2>
            <h2>{origin.name}</h2>
           <img src={image} alt="" />
          </div>
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
