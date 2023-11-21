import "./App.css";
import axios from "axios";
//*React HOOK 👇🏻
import { useEffect, useState } from "react";
//?-------------------------------------------------------------
import Cards from "./components/Card/Cards.jsx";
import Nav from "./components/Nav/Nav";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";
import { useDispatch, useSelector } from "react-redux";
import { loginState } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  const access = useSelector((state) => state.access);
  const login = async (userData) => {
    try {
      const { email, password } = userData;

      //*Envío datos por QUERY
      dispatch(loginState(email, password));
      access ? navigate("/home") : alert("¡Datos incorrectos!");
    } catch (error) {
      console.log(error.message);
    }
  };

  const [characters, setCharacters] = useState([]);
  //!Async Await
  const onSearch = async (id) => {
    try {
      const { data } = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );

      if (!characters.find((char) => char.id === data.id)) {
        if (data?.name) {
          setCharacters((oldCharacters) => [...oldCharacters, data]);
        }
      } else {
        window.alert(`Ya existe un personaje con el id ${id}`);
      }
    } catch (error) {
      alert(error.response.data);
    }
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  const { pathname } = useLocation();

  //!React-router-dom👇🏻
  const navigate = useNavigate();
  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  return (
    <>
      {/* <Nav onSearch={searchCharacter} /> */}
      {pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login} />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        ></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/fav" element={<Favorites />}></Route>
      </Routes>
      {/* {pathname !== "/" && <Footer />} */}
    </>
  );
}

export default App;
