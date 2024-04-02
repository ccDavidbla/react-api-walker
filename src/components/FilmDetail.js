import React from "react";

const FilmsComponent = ({ data }) => (
    <div>
        <p>Título: {data.title}</p>
        <p>Episodio: {data.episode_id}</p>
        <p>Director: {data.director}</p>
        <p>Fecha de Lanzamiento: {data.release_date}</p>
    </div>
);

export default FilmsComponent;
