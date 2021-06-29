
import { Component } from "react";
import { Container, Form, FormGroup, Button, Row, Col } from "react-bootstrap";

class CadastroCurso extends Component {

    render()
    {
        return (
            <Container>
                <Row className="justify-content-center">
                    <h1>
                        Cadastro de Curso
                    </h1>
                </Row>
                <Row className="justify-content-center">
                    <Col xs={7}>
                        <Form>
                            <FormGroup>
                                <Form.Label>Titulo</Form.Label>
                                <Form.Control type="text"></Form.Control>
                            </FormGroup>
                            <FormGroup>
                                <Form.Label>Descrição</Form.Label>
                                <Form.Control as="textarea"></Form.Control>
                            </FormGroup>
                            <FormGroup>
                                <Form.Label>Imagem</Form.Label>
                                <Form.Control type="passoword"></Form.Control>
                            </FormGroup>
                            <FormGroup>
                                <Form.Label>Horas</Form.Label>
                                <Form.Control type="passoword"></Form.Control>
                            </FormGroup>
                            <FormGroup>
                                <Form.Label>Aulas</Form.Label>
                                <Form.Control type="passoword"></Form.Control>
                            </FormGroup>
                            <FormGroup>
                                <Form.Label>Arquivos</Form.Label>
                                <Form.Control type="passoword"></Form.Control>
                            </FormGroup>
                            <FormGroup>
                                <Form.Label>Classificação</Form.Label>
                                <Form.Control as="select">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Form.Control>
                            </FormGroup>
                            <FormGroup>
                                <Form.Label>Numero de Classificações</Form.Label>
                                <Form.Control type="passoword"></Form.Control>
                            </FormGroup>
                            <FormGroup>
                                <Form.Label>Numero de Alunos</Form.Label>
                                <Form.Control type="passoword"></Form.Control>
                            </FormGroup>

                            <Button>Cadastrar</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }

}

export default CadastroCurso;