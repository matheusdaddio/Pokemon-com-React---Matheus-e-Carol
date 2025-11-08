import { useState } from "react";
import PokemonForm from "./components/PokemonForm";
import "./App.css";

function App() {
  const [pokemons, setPokemons] = useState([]);

  const addPokemon = (pokemon) => {
    setPokemons([...pokemons, pokemon]);
  };

  // 🎨 Função que retorna uma cor de fundo com base no tipo (com emoji incluso)
  function getBackgroundByType(tipo) {
    if (tipo.includes("Fogo")) return "#f08030";
    if (tipo.includes("Água")) return "#6890f0";
    if (tipo.includes("Grama")) return "#78c850";
    if (tipo.includes("Elétrico")) return "#f8d030";
    if (tipo.includes("Psíquico")) return "#f85888";
    if (tipo.includes("Pedra")) return "#b8a038";
    return "rgb(155, 151, 151)"; // padrão
  }

  return (
    <div className="app-container">
      <h1>Cadastro de Pokémons</h1>
      <PokemonForm onAddPokemon={addPokemon} />

      {pokemons.length > 0 && (
        <div className="pokemon-list">
          <h2>📋Pokémons Cadastrados:</h2>
          <ul>
            {pokemons.map((p, index) => (
              <li
                key={index}
                className="pokemon-card"
                style={{
                  background: getBackgroundByType(p.tipo),
                  color: "#fff",
                  borderRadius: "10px",
                  padding: "15px",
                  marginBottom: "10px",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
                  listStyle: "none",
                }}
              >
                <h3>{p.nome}</h3>
                <p>
                  <strong>Tipo:</strong> {p.tipo}
                </p>
                <p>
                  <strong>Poder:</strong> {p.poder}
                </p>
                <p>
                  <strong>Descrição:</strong> {p.descricao}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
