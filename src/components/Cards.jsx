import Card from "./Card";
import { Contenedor } from "./styledComponents";
export default function Cards({characters, onClose}) {
  return (
    <Contenedor>
      {characters.map((character) => {
        //*Instancio una clase <Card/> y le paso los datos

        return (
          
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            image={character.image}
            onClose={onClose}
          />
        );
      })}
    </Contenedor>
  );
}

//! props.lista => array
//? Por cada elemento del array, creo un PersonaItem

// {props.lista.map((persona) => {
//    return <PersonaItem name={persona.name} age={persona.age} />;
//  })}

/*
name: nombre.
status: status.
species: especie.
gender: género.
origin: origen (ten en cuenta que el nombre del origen viene dentro de otra propiedad llamada name).
image: imagen.
 */