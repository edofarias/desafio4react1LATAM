// App.jsx
import React, { useState, useEffect } from 'react';
import './App.css';
import Indicators from './components/indicators/indicators';
import Buscador from './components/buscador/Buscador';
import MiApi from './components/miApi/miApi';

function App() {
  const [codigo, setCodigo] = useState('');
  const [filteredCodigo, setFilteredCodigo] = useState('');
  const [showLandingPage, setShowLandingPage] = useState(true);
  const [indicatorsData, setIndicatorsData] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleChange = (e) => {
    setCodigo(e.target.value);
  };

  const handleButtonClick = () => {
    setFilteredCodigo(codigo.toLowerCase());
    setShowLandingPage(false);
  };

  const handleGoBack = () => {
    setShowLandingPage(true);
  };

  const handleSearch = (searchTerm) => {
    setFilteredCodigo(searchTerm.toLowerCase());
    setShowLandingPage(false);
  };

  useEffect(() => {
    setFilteredCodigo(codigo.toLowerCase());
  }, [codigo]);

  return (
    <>
      <h1>Mis Indicadores</h1>
      <MiApi setIndicatorsData={setIndicatorsData} setLoading={setLoading} />
      {showLandingPage ? (
        <Buscador
          codigo={codigo}
          handleChange={handleChange}
          handleButtonClick={handleButtonClick}
          handleSearch={handleSearch}
        />
      ) : (
        <Indicators
          filteredCodigo={filteredCodigo}
          handleGoBack={handleGoBack}
          indicatorsData={indicatorsData}
          loading={loading}
        />
      )}
    </>
  );
}

export default App;
