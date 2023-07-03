import './App.css';
//*React HOOK 👇🏻
import { useState } from 'react';
//?-------------------------------------------------------------
import Cards from './components/Cards.jsx';
import Nav from './components/Nav/Nav';
import characters from './data.js';

function App() {

   const [characters, setCharacters] = useState([]);
   const searchCharacter =(id)=>{
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res)=>res.json())
      .then((data)=> setCharacters([...characters, data]))
   }


   return (
      <div className='App'>
         
         <Nav onSearch={searchCharacter} />
        
         <Cards characters={characters} />
        
      </div>
   );
}

export default App;
