import React, { useState } from 'react';

function ListaDeDisciplinas() {
  const [lista, setLista] = useState(['PW4', 'TC2', 'PDM']);
  const [novaDisciplina, setNovaDisciplina] = useState('');

  const handleChange = (event) => {
    setNovaDisciplina(event.target.value);
  };

  const adicionarDisciplina = () => {
    if (novaDisciplina.trim() !== '') {
      setLista([...lista, novaDisciplina]);
      setNovaDisciplina('');
    }
  };

  return (
    <div>
      <h2>Lista de Disciplinas</h2>
      <ul>
        {lista.map((disciplina, index) => (
          <li key={index}>{disciplina}</li>
        ))}
      </ul>
      <input
        type="text"
        value={novaDisciplina}
        onChange={handleChange}
        placeholder="Nova Disciplina"
      />
      <button onClick={adicionarDisciplina}>Adicionar Disciplina</button>
    </div>
  );
}

export default ListaDeDisciplinas;
