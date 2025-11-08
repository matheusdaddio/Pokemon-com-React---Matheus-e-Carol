import { useState } from "react";

function PokemonForm({ onAddPokemon }) {
  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [poder, setPoder] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nome || !tipo || !descricao || !poder) {
      setErro("🚨 Preencha todos os campos!");
      setMensagem("");
      return;
    }

    const novoPokemon = { nome, tipo, descricao, poder };
    onAddPokemon(novoPokemon);    
    setMensagem("✅ Pokémon cadastrado com sucesso!");
    setErro("");
    setNome("");
    setTipo("");
    setDescricao("");
    setPoder("");
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label>Nome do Pokémon:</label>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Ex: Pikachu"
      />

      <label>Tipo:</label>
      <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
        <option value="">Selecione...</option>
        <option value="🔥 Fogo">🔥 Fogo</option>
        <option value="💧 Água">💧 Água</option>
        <option value="🌱 Grama">🌱 Grama</option>
        <option value="⚡ Elétrico">⚡ Elétrico</option>
        <option value="🧠 Psíquico">🧠 Psíquico</option>
        <option value="🪨 Pedra">🪨 Pedra</option>
      </select>

      <label>Descrição:</label>
      <textarea
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        placeholder="Conte um pouco sobre o Pokémon..."
      />

      <label>Poder (0 a 100):</label>
      <input
        type="number"
        min="0"
        max="100"
        value={poder}
        onChange={(e) => setPoder(e.target.value)}
      />

      <button type="submit">Cadastrar</button>

      {mensagem && <p className="sucesso">{mensagem}</p>}
      {erro && <p className="erro">{erro}</p>}
    </form>
  );
}

export default PokemonForm;
