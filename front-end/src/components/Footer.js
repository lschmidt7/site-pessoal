import '../static/css/Footer.css'
import { Component } from "react";
import {Navbar,Container,Row,Col} from 'react-bootstrap'

class Footer extends Component {

    render() {
        return (
            <Navbar bg="dark" variant="dark" id="footer">
                <Container className="justify-content-center">
                    <Row>
                        <Col>
                            leonardoschmabreu@gmail.com
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        )
    }

}

export default Footer;