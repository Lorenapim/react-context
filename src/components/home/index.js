import './home.css'
import { Button, Container, Row, Col } from 'react-bootstrap';
import Logo from '../img/logo.png'

export default () => {
    return ( 
        <>
            <div className="home-class">
                <Container>
                    <Row className='align-item-center'>
                        <Col><h2>Centro de investigación orientado a impulsar acciones climáticas que contribuyan a la resiliencia climática a nivel nacional, regional y local</h2></Col>
                        <Col><img src={Logo} /></Col>
                    </Row>
                </Container>    
            </div> 
        </>
    )
}