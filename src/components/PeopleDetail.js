import React from "react";

const PeopleComponent = ({ data }) => (
    <div>
        <p>Nombre: {data.name}</p>
        <p>Color de Ojos: {data.eye_color}</p>
        <p>Color de Pelo: {data.hair_color}</p>
        <p>Altura: {data.height}</p>
    </div>
);

export default PeopleComponent;
