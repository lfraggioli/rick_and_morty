// import Card from './Card'
// import { Contenedor } from "../styledComponents";

// export default function Cards({characters, onClose}) {

//   return (
//     <Contenedor>
//       {characters.map((character) => {
//         return (
          
//           <Card
//             key={character.id}
//             id={character.id}
//             name={character.name}
//             status={character.status}
//             species={character.species}
//             gender={character.gender}
//             origin={character.origin}
//             image={character.image}
//             onClose={onClose}

//           />
//         );
//       })}
//     </Contenedor>
//   );
// }

import React, { Component } from "react";
import Card from "./Card";
import { Contenedor } from "../styledComponents";

class Cards extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    const { characters, onClose } = this.props;

    return (
      <Contenedor>
        {this.props.characters.map((character) => {
          return (
            <Card
              key={character.id}
              id={character.id}
              name={character.name}
              status={character.status}
              species={character.species}
              gender={character.gender}
              origin={character.origin}
              image={character.image}
              onClose={onClose}
            />
          );
        })}
      </Contenedor>
    );
  }
}

export default Cards;




