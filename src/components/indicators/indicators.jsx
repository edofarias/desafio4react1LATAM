import React, { useEffect, useState } from 'react';
import Indicator from "../indicator/indicator";

const Indicators = ({ filteredCodigo, handleGoBack }) => {
    const [indicatorsData, setIndicatorsData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getIndicators = async () => {
        try {
            const res = await fetch("https://www.mindicador.cl/api");
            const data = await res.json();
            const indicatorsArray = Object.values(data);

            const filteredIndicators = indicatorsArray.filter((indicator) => (
                typeof indicator.codigo === 'string' &&
                typeof indicator.nombre === 'string' &&
                typeof indicator.unidad_medida === 'string' &&
                typeof indicator.fecha === 'string' &&
                typeof indicator.valor === 'number' &&
                (filteredCodigo === "" || indicator.codigo.toLowerCase().includes(filteredCodigo))
            ));

            // Sort indicators alphabetically by name
            const sortedIndicators = filteredIndicators.sort((a, b) => a.codigo.localeCompare(b.codigo));
            setIndicatorsData(sortedIndicators);
        } catch (error) {
            console.error("Error fetching indicators:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getIndicators();
    }, [filteredCodigo]);

    if (loading) return <h2>Cargando...</h2>;

    return (
        <div>
            <button onClick={handleGoBack}>Vuelve al inicio</button>
            {indicatorsData.length > 0 &&
                indicatorsData.map((indicator) => (
                    <Indicator indicator={indicator} key={indicator.codigo} />
                ))}
        </div>
    );
};

export default Indicators;

