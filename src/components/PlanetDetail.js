import React from "react";

const PlanetsComponent = ({ data }) => (
    <div>
        <p>Nombre: {data.name}</p>
        <p>Clima: {data.climate}</p>
        <p>Terreno: {data.terrain}</p>
        <p>Población: {data.population}</p>
    </div>
);

export default PlanetsComponent;
