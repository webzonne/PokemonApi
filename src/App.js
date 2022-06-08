import './App.css';
import { Routes, Route} from "react-router-dom";
import GaleryPokemon from './componentes/GaleryPokemon';
import MainPokemon from './componentes/MainPokemon';

function App() {
  
  return (
    <div>
    <header>
    <main>
    <Routes>
        <Route path="/PokemonApi/pokemones" element={<GaleryPokemon/>} />
        
          <Route path="/PokemonApi" element={<MainPokemon/>} />
        
    </Routes>
     </main>
    </header>
    </div>
  )
}

export default App;
