import "./App.css";
import axios from 'axios';
//*React HOOK 👇🏻
import { useEffect, useState } from "react";
//?-------------------------------------------------------------
import Cards from "./components/Card/Cards.jsx";
import Nav from "./components/Nav/Nav";
import characters from "./data.js";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";



function App() {
  const [characters, setCharacters] = useState([]);
  const onSearch = (id) => {
  axios(`http://localhost:3001/rickandmorty/character/${id}`)
    .then(({ data }) => {
      if (!characters.find((char) => char.id === data.id)) {
        if (data?.name) {
          setCharacters((oldCharacters) => [...oldCharacters, data]);
        }
      } else {
        window.alert(`Ya existe un personaje con el id ${id}`);
      }
    })
    .catch((err) => alert(err.response.data));
};

  const onClose = (id) => {     
    setCharacters(characters.filter(char => char.id !== id));
    }

    const {pathname} = useLocation();

    const [access, setAccess] = useState(false);
    //React-router-dom👇🏻
    const navigate = useNavigate();
    const EMAIL = 'lucas@mail.com';
    const PASSWORD = 'asd12345';

    const login = (form)=>{
      if (form.password === PASSWORD && form.email === EMAIL){
        setAccess(true);
        navigate('/home');
      }else{
        alert('Usuario y/o contraseña incorrectos');
      }
    };

    useEffect(()=>{
      !access && navigate('/');
    }, [access]);


    return (
    <>
    {/* <Nav onSearch={searchCharacter} /> */}
    {pathname !== '/' && <Nav onSearch={onSearch} /> }
    <Routes>
      <Route path="/" element={<Form login={login} />}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/home" element={<Cards characters={characters} onClose = {onClose} />}></Route>
      <Route path="/detail/:id" element={<Detail/>}></Route>
      <Route path="/favorites" element={<Favorites/>}></Route>
    </Routes>
    
    
    </>

    
  );
}

export default App;
