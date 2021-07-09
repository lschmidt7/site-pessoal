import '../static/css/Login.css'
import { Component } from "react";
import { Container, Row, Col, Form, FormGroup, FormControl, Button } from "react-bootstrap";

class Login extends Component {

    render()
    {
        return (
            <div id="login">
            <Container>
                <Row className="justify-content-center justify">
                    <Col xs={10} sm={8} md={6} lg={4} xl={4}>
                        <Form>
                            <FormGroup>
                                <Form.Label>Email</Form.Label>
                                <FormControl type="email"></FormControl>
                            </FormGroup>
                            <FormGroup>
                                <Form.Label>Senha</Form.Label>
                                <FormControl type="password"></FormControl>
                            </FormGroup>
                        </Form>
                        <Button>Login</Button>
                    </Col>
                </Row>
            </Container>
            </div>
        )
    }

}

export default Login;