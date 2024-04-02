import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Alert, Spinner } from 'react-bootstrap';

const ForIdSearch = () => {
    const { id } = useParams();
    const [person, setPerson] = useState(null);
    const [homeworld, setHomeworld] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(false);
            try {
                const response = await axios.get(`https://swapi.dev/api/people/${id}`);
                setPerson(response.data);
                const homeworldResponse = await axios.get(response.data.homeworld);
                setHomeworld(homeworldResponse.data.name);
                setLoading(false);
            } catch (error) {
                setError(true);
                setLoading(false);
            }
        };
        fetchData();
    }, [id]);

    if (loading) {
        return (
            <Container className="text-center mt-5">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </Spinner>
            </Container>
        );
    }

    if (error) {
        return (
            <Container className="mt-5">
                <Alert variant="danger">Error cargando la información</Alert>
            </Container>
        );
    }

    return (
        <Container className="mt-5">
            {person ? (
                <div>
                    <h1>{person.name}</h1>
                    <p>Mundo Natal: {homeworld}</p>
                </div>
            ) : (
                <Alert variant="warning">No se encontraron detalles para esta persona.</Alert>
            )}
        </Container>
    );
};

export default ForIdSearch;

