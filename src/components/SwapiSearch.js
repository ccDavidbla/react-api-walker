import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, Container, Row, Col, Alert } from 'react-bootstrap';
import PeopleDetail from './PeopleDetail';
import PlanetDetail from './PlanetDetail';
import FilmDetail from './FilmDetail';
function SWAPIsearch() {
    const [resource, setResource] = useState('people');
    const [id, setId] = useState('');
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);

    const fetchData = async () => {
        setError(false);
        try {
            const response = await axios.get(`https://swapi.dev/api/${resource}/${id}`);
            setData(response.data);
        } catch (error) {
            console.error(error);
            setData(null);
            setError(true);
        }
    };

    const renderDetail = () => {
        if (error) {
            return (
                <Alert variant="danger">
                    <div>
                        <h1>Estos no son los droides que estás buscando...</h1>
                    </div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRokidr7jbLxwLBp-jd__6CYt8929Oquchqw&s" alt="Obi-Wan Kenobi" />
                </Alert>
            );
        }

        if (!data) return null;

        switch (resource) {
            case 'people':
                return <PeopleDetail data={data} />;
            case 'planets':
                return <PlanetDetail data={data} />;
            case 'films':
                return <FilmDetail data={data} />;
            default:
                return <Alert variant="warning">Recurso no soportado</Alert>;
        }
    };

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col xs lg="6">
                    <Form>
                        <Form.Group controlId="resourceSelect">
                            <Form.Label>Selecciona el recurso</Form.Label>
                            <Form.Control as="select" value={resource} onChange={(e) => setResource(e.target.value)}>
                                <option value="people">People</option>
                                <option value="planets">Planets</option>
                                <option value="films">Films</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="idInput">
                            <Form.Label>ID</Form.Label>
                            <Form.Control
                                type="text"
                                value={id}
                                onChange={(e) => setId(e.target.value)}
                                placeholder="Introduce un ID"
                            />
                        </Form.Group>
                        <Button variant="primary" onClick={fetchData}>
                            Buscar
                        </Button>
                    </Form>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs lg="6">
                    {renderDetail()}
                </Col>
            </Row>
        </Container>
    );
}

export default SWAPIsearch;
