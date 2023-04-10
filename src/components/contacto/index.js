import './contacto.css'
import { Form, Card } from 'react-bootstrap'
import Button from '../Button'

export default () => {
    return (
        <div className="form-class">
            <Card className='form-card'>
                <Card.Body>
                <Card.Title><h1>En qué te podemos ayudar</h1></Card.Title>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Correo</Form.Label>
                        <Form.Control type="email" placeholder="nombre@ejemplo.com" />
                    </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Mensaje</Form.Label>
                        <Form.Control as="textarea" rows={6} />
                    </Form.Group>
                    <Button 
                        variant="info"
                        message="enviar"
                        type="submit"
                        />
                </Form>
                </Card.Body>
            </Card>
        </div> 
    )
}