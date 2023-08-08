import styled from "styled-components";

export const CardStyled = styled.div`
  align-items: flex-end;
  background: #0f2027;
  background: -webkit-linear-gradient(
    to right,
    #2c5364,
    #203a43,
    #0f2027
  ); /* Chrome 10-25, Safari 5.1-6 */
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.9);
  
  display: flex;
  font-family: 'Poppins', sans-serif;
  justify-content: center;
  margin: 5em;
  /*  */
  position: relative;
  transition: 0.5s ease-in-out;
  width: 20em;
  height: 27.5em;
  //?ESTILOS :HOVER
  &:hover {
    transform: translateY(20px);
    cursor: pointer;
    box-shadow: 15px 15px 30px rgb(20, 20, 20, 0.9);
    border-radius: 10%;
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
`
export const CardContent = styled.div `
background: rgba(0,0,0,0.2);
`