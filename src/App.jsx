import './App.css'
import PokemonCard from "./components/PokemonCard.jsx";
import {useState} from "react";

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

    const handleClickPrevious = () => {
        setPokemonIndex(pokemonIndex - 1)
    }

    const handleClickNext = () => {
        setPokemonIndex(pokemonIndex + 1)
    }

    console.log(pokemonIndex)
    return (
        <div>
            <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
            <div className="button-div">
                {pokemonList.length > 1 && pokemonIndex !== 0 && (
                    <button onClick={handleClickPrevious} className="pokemon-button-list">
                        Previous
                    </button>
                )}
                {pokemonList.length > 1 && pokemonIndex !== pokemonList.length - 1 && (
                    <button onClick={handleClickNext} className="pokemon-button-list">
                        Next
                    </button>
                )}
            </div>
        </div>
    );
}

export default App
