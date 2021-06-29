import '../static/css/Geral.css'
import { Component } from "react";
import { Container, Form, FormGroup, Button, Row, Col } from "react-bootstrap";
import axios from 'axios'

class CadastroCurso extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            titulo: "",
            descricao: "",
            imagem: "",
            horas: "",
            aulas: "",
            arquivos: "",
            classificacao: 5,
            num_classificacoes: "",
            alunos: ""
        }
        this.values = ["","","","","","","","",""]
        this.cadastrar = this.cadastrar.bind(this);
    }

    handleChangeValues (event,index)
    {
        this.values[index] = event.target.value;
        this.updateStateValues();
    }

    updateStateValues ()
    {
        this.setState({
            titulo: this.values[0],
            descricao: this.values[1],
            imagem: this.values[2],
            horas: this.values[3],
            aulas: this.values[4],
            arquivos: this.values[5],
            classificacao: this.values[6],
            num_classificacoes: this.values[7],
            alunos: this.values[8]
        })
    }

    cadastrar()
    {
        axios.post('http://localhost:4000/insert-curso',this.state).then(function (res) {
            console.log(res);
        })
    }

    render()
    {
        return (
            <Container className="body">
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
                                <Form.Control type="text" value={this.state.titulo} onChange={(e)=>this.handleChangeValues(e,0)}></Form.Control>
                            </FormGroup>
                            <FormGroup>
                                <Form.Label>Descrição</Form.Label>
                                <Form.Control as="textarea" value={this.state.descricao} onChange={(e)=>this.handleChangeValues(e,1)}></Form.Control>
                            </FormGroup>
                            <FormGroup>
                                <Form.Label>Imagem</Form.Label>
                                <Form.Control type="text" value={this.state.imagem} onChange={(e)=>this.handleChangeValues(e,2)}></Form.Control>
                            </FormGroup>
                            <FormGroup>
                                <Form.Label>Horas</Form.Label>
                                <Form.Control type="text" value={this.state.horas} onChange={(e)=>this.handleChangeValues(e,3)}></Form.Control>
                            </FormGroup>
                            <FormGroup>
                                <Form.Label>Aulas</Form.Label>
                                <Form.Control type="text" value={this.state.aulas} onChange={(e)=>this.handleChangeValues(e,4)}></Form.Control>
                            </FormGroup>
                            <FormGroup>
                                <Form.Label>Arquivos</Form.Label>
                                <Form.Control type="text" value={this.state.arquivos} onChange={(e)=>this.handleChangeValues(e,5)}></Form.Control>
                            </FormGroup>
                            <FormGroup>
                                <Form.Label>Classificação</Form.Label>
                                <Form.Control as="select" value={this.state.classificacao} onChange={(e)=>this.handleChangeValues(e,6)}>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Form.Control>
                            </FormGroup>
                            <FormGroup>
                                <Form.Label>Numero de Classificações</Form.Label>
                                <Form.Control type="text" value={this.state.num_classificacoes} onChange={(e)=>this.handleChangeValues(e,7)}></Form.Control>
                            </FormGroup>
                            <FormGroup>
                                <Form.Label>Numero de Alunos</Form.Label>
                                <Form.Control type="text" value={this.state.alunos} onChange={(e)=>this.handleChangeValues(e,8)}></Form.Control>
                            </FormGroup>

                            <Button onClick={()=> this.cadastrar()}>Cadastrar</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }

}

export default CadastroCurso;