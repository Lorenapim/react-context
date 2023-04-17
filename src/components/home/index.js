import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useContext } from 'react';
import Context from '../../context';

export default () => {

    const {characters,setCharacters} = useContext(Context)

    const handleClick = (id) => {
        const character = characters.map(val => {
            if (val.id === id){
                return {...val,favorito:true}
            }
            return val
        })
        setCharacters(character)
    }

    return ( 
        <div className="home-class">
                <Container>
                    <Row className='align-item-center'>
                        {characters ? characters.map(character =>
                        <Col lg={4} md={12} className='my-4'>
                            <Card>
                                <Card.Img variant="top" src={character.image} />
                                <Card.Body>
                                    <Card.Title>{character.name}</Card.Title>
                                    <Card.Text>
                                        <p>Especie: {character.species}</p>
                                        <p>Status: {character.status}</p>
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => handleClick(character.id)}>Favorito</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        ) : <p>loading...</p>}
                    </Row>
                </Container>    
        </div>
    )
}