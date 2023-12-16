// components/buscador/buscador.jsx
import React, { useState } from 'react';
import bitcoinImage from '../../assets/img/bitcoin.webp';

const Buscador = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleClick = () => {
    handleSearch(searchTerm);
  };

  return (
    <div>
      <p>Bienvenido a indicadores económicos del día</p>
      <img src={bitcoinImage} alt="Bitcoin" style={{ maxWidth: '100%' }} />
      <input
        type="text"
        placeholder="Ingresa indicador"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleClick}>Obtener Indicador</button>
    </div>
  );
};

export default Buscador;
