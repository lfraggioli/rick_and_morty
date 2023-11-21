import styled from "styled-components";

export const AgregarBoton = styled.button`
  background-color: #6ee649;
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
    background-color: #46db54;
    cursor: pointer;
  }
`;
export const AgregarDiv = styled.div`
  display: flex;
  justify-content: center;
  &:hover {
    transition: 0.6s all;
  }
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  justify-content: space-between;
`;

export const CardText = styled.p`
  color: white;
  font-size: 0.9em;
`;

export const CharacterName = styled.h2`
  color: #dbe649;
  font-weight: bold;
  font-size: 1.6em;
  padding-bottom: 0em;
`;

export const Contenedor = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0px;
`;

export const FullText = styled.div`
  position: relative;
  width: max-content;
  padding: 1em;
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

export const NavStyle = styled.nav`
  background-color: #303a49;
  display: flex;
  max-width: 100%;
  width: 1440px;
  padding-top: 13px;
  padding-right: 20px;
  padding-bottom: 13px;
  padding-left: 20px;
  flex-direction: column;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const Div2 = styled.div`
  display: flex;
  max-width: 100%;
  width: 1384px;
  margin-top: -1px;
  margin-left: 3px;
  flex-direction: row;
  align-items: flex-start;
  align-self: center;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 991px) {
    flex-wrap: wrap;
    justify-content: center;
    max-width: 100%;
  }
`;
