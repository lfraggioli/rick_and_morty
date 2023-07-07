import styled from "styled-components";

export const AgregarBoton = styled.button`
  background-color: #44ff33;
  border: none;
  border-top-right-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
  color: white;
  font-size: 1em;
  font-weight: bold;
  margin: 0;
  padding: 0.5em 1.5em;
  &:hover {
    box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.4);
    cursor: pointer;
  }
`;

export const AgregarDiv = styled.div`
  display: flex;
  justify-content: center;
  &:hover {
    transition: 0.6s all;
  }
`;

export const CardStyle = styled.div`
  align-items: flex-end;
  background: #0f2027;
  background: -webkit-linear-gradient(
    to right,
    #2c5364,
    #203a43,
    #0f2027
  ); /* Chrome 10-25, Safari 5.1-6 */
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.4);
  
  display: flex;
  font-family: 'Prompt';
  justify-content: center;
  margin: 5em;
  padding: 2rem 1rem;
  position: relative;
  transition: 0.5s ease-in-out;
  width: 280px;
  height: 360px;
  //?ESTILOS :HOVER
  &:hover {
    transform: translateY(20px);
    cursor: pointer;
    box-shadow: 3px 6px 10px rgba(31, 179, 18, 0.5);
    
    border-radius: 3%;
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    z-index: 2;
    transition: 0.5 all;
    
    border-radius: 3%;
    opacity: 1;
  }

  &:hover:before {
    border-radius: 3%;
    opacity: 1;
    background: linear-gradient(
      to bottom,
      rgba(44, 83, 100, 0.05),
      rgba(15, 32, 39, 0.5)
    );
  }
`;
export const CardText = styled.p`
  color: white;
  font-size: .9em;
`;

export const CharacterName = styled.h2`
  color: white;
  font-weight: bold;
  font-size: 1.9em;
  padding-bottom: 0.3em;
`;

export const Contenedor = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0px;
`;
export const FullText = styled.div`
  position: relative;
  color: #fff;
  opacity: 0;
  transform: translateY(30px);
  transition: 0.5 all;
  z-index: 3;

  &:hover {
    opacity: 1;
    transform: translateY(0px);
    transition: 0.3s all;
  }
`;

export const ImageCard = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  
  border-radius: 3%;
  object-fit: cover;
`;
export const Input = styled.input`
  border-top-left-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
  padding: 0.75em 1.75em;
  border: none;
  max-width: 100%;
`;

export const NavStyle = styled.div`
  background-color: #0f2027;
  background-size: cover;
  width: 100%;
  padding: 1.3em;
`;
export const Salir = styled.button`
  color: red;
  border-radius: 5px;
  position: absolute;
  z-index: 2;
  opacity: 0;
  top: 0;
  right: 0;
  margin: none;
  padding: 0.75rem;
  &:hover {
    opacity: 1;
    transition: 0.5s all;
    cursor: pointer;
  }
`;
