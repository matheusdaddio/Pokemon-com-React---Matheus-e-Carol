import { useState } from "react";
import PokemonForm from "./components/PokemonForm";
import "./App.css";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [editIndex, setEditIndex] = useState(null); 
  const [editData, setEditData] = useState({ nome: "", tipo: "", descricao: "", poder: "" });

  const addPokemon = (pokemon) => {
    setPokemons([...pokemons, pokemon]);
  };

  const deletePokemon = (indexToDelete) => {
    const novaLista = pokemons.filter((_, index) => index !== indexToDelete);
    setPokemons(novaLista);
  };

  const startEdit = (index) => {
    setEditIndex(index);
    setEditData(pokemons[index]);
  };

  const saveEdit = () => {
    const novaLista = [...pokemons];
    novaLista[editIndex] = editData;
    setPokemons(novaLista);
    setEditIndex(null);
  };

  const cancelEdit = () => {
    setEditIndex(null);
    setEditData({ nome: "", tipo: "", descricao: "", poder: "" });
  };

  function getBackgroundByType(tipo) {
    if (tipo.includes("Fogo")) return "#f08030";
    if (tipo.includes("Água")) return "#6890f0";
    if (tipo.includes("Grama")) return "#78c850";
    if (tipo.includes("Elétrico")) return "#f8d030";
    if (tipo.includes("Psíquico")) return "#f85888";
    if (tipo.includes("Pedra")) return "#b8a038";
    return "rgb(155, 151, 151)";
  }

  return (
    <div className="app-container">
      <h1>Cadastro de Pokémons</h1>
      <PokemonForm onAddPokemon={addPokemon} />

      {pokemons.length > 0 && (
        <div className="pokemon-list">
          <h2>📋 Pokémons Cadastrados:</h2>
          <ul>
            {pokemons.map((p, index) => (
              <li
                key={index}
                className="pokemon-card"
                style={{
                  background: getBackgroundByType(p.tipo),
                  color: "#fff",
                }}
              >
                {editIndex === index ? (
                  <div className="edit-container">
                    <input
                      type="text"
                      value={editData.nome}
                      onChange={(e) => setEditData({ ...editData, nome: e.target.value })}
                      placeholder="Nome"
                    />

                    <label style={{ fontWeight: "600" }}>Tipo:</label>
                    <select
                      value={editData.tipo}
                      onChange={(e) => setEditData({ ...editData, tipo: e.target.value })}
                    >
                      <option value="">Selecione...</option>
                      <option value="🔥 Fogo">🔥 Fogo</option>
                      <option value="💧 Água">💧 Água</option>
                      <option value="🌱 Grama">🌱 Grama</option>
                      <option value="⚡ Elétrico">⚡ Elétrico</option>
                      <option value="🧠 Psíquico">🧠 Psíquico</option>
                      <option value="🪨 Pedra">🪨 Pedra</option>
                    </select>

                    <textarea
                      value={editData.descricao}
                      onChange={(e) => setEditData({ ...editData, descricao: e.target.value })}
                      placeholder="Descrição"
                    />
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={editData.poder}
                      onChange={(e) => setEditData({ ...editData, poder: e.target.value })}
                      placeholder="Poder"
                    />

                    <div className="edit-buttons">
                      <button className="save-btn" onClick={saveEdit}>💾 Salvar</button>
                      <button className="cancel-btn" onClick={cancelEdit}>❌ Cancelar</button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="pokemon-card-header">
                      <h3>{p.nome}</h3>
                      <div className="card-buttons">
                        <button
                          className="edit-btn"
                          onClick={() => startEdit(index)}
                          title="Editar Pokémon"
                        >
                          ✏️
                        </button>
                        <button
                          className="delete-btn"
                          onClick={() => deletePokemon(index)}
                          title="Excluir Pokémon"
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                    <p>
                      <strong>Tipo:</strong> {p.tipo}
                    </p>
                    <p>
                      <strong>Poder:</strong> {p.poder}
                    </p>
                    <p>
                      <strong>Descrição:</strong> {p.descricao}
                    </p>
                  </>
                )}

              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
