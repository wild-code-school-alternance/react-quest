import './App.css'
import PokemonCard from "./components/PokemonCard.jsx";
import {useState} from "react";
import NavBar from "./components/NavBar.jsx";

const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
        name: "charmander",
        imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
        name: "squirtle",
        imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
        name: "pikachu",
        imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
        name: "mew",
    },
];

function App() {
    let [pokemonIndex, setPokemonIndex] = useState(0)
    const total = pokemonList.length;

    return (
        <div>
            <NavBar index={pokemonIndex} setIndex={setPokemonIndex} total={total} />
            <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
        </div>
    );
}

export default App
