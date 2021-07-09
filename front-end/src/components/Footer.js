import '../static/css/Footer.css'
import { Component } from "react";
import {Navbar,Container,Row,Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class Footer extends Component {

    render() {
        return (
            <Navbar bg="dark" variant="dark" id="footer">
                <Container className="justify-content-center">
                    <Row>
                        <Col>
                            leonardoschmabreu@gmail.com
                        </Col>
                        <Col>
                            <Link to="/login">Login</Link>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        )
    }

}

export default Footer;