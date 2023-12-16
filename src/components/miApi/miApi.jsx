import React, { useEffect, useState } from 'react';

const MiApi = ({ setIndicatorsData, setLoading }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
//consume
        const res = await fetch("https://www.mindicador.cl/api");
        const data = await res.json();
        const indicatorsArray = Object.values(data);
//clean
        const filteredIndicators = indicatorsArray.filter((indicator) => (
          typeof indicator.codigo === 'string' &&
          typeof indicator.nombre === 'string' &&
          typeof indicator.unidad_medida === 'string' &&
          typeof indicator.fecha === 'string' &&
          typeof indicator.valor === 'number'
        ));

        setIndicatorsData(filteredIndicators);
      } catch (error) {
        console.error("Error fetching indicators:", error);
      } finally {
//stop loading
        setLoading(false);
      }
    };

    fetchData();
  }, [setIndicatorsData, setLoading]);

  return null;
};

export default MiApi;

