import '../static/css/Home.css'
import React, { Component } from 'react'
import { Row, Col, Container, Tabs, Tab } from 'react-bootstrap'
import CardCurso from '../components/CardCurso'
import CardProjeto from '../components/CardProjeto'
import axios from 'axios'


class Home extends Component {

	constructor(props){
		super(props);
		this.state = {
			titulo: '',
			descricao: ''
		};
		this.getCursos = this.getCursos.bind(this);
		this.getCursos();
	}

	getCursos(){
		var self = this;
		axios.get('http://localhost:4000/cursos').then(function (res) {
			self.setState({
				titulo: res['data'][0].titulo,
				descricao: res['data'][0].descricao
			})
		});
	}

	render() {
		return (
			<div id="home">
				<Container fluid>
				<Row id="part-1">
					<Col >
						<h1>
							Welcome!
						</h1>
						<p>
							Welcome to my website
						</p>
					</Col>
				</Row>
				</Container>

				{/* SEÇÃO DE CURSOS */}
				<Container>
					<Row id="section-title">
						<Col>
							<h1>Cursos</h1>
						</Col>
					</Row>
					<Row id="part-2">
						<Col>
							<CardCurso nome={this.state.titulo} descricao={this.state.descricao}></CardCurso>
						</Col>
						<Col>
							<CardCurso nome="Estrutura de dados em Linguagem C"></CardCurso>
						</Col>
						<Col>
							<CardCurso nome="Desenvolva seus prórpios Shaders na Unity"></CardCurso>
						</Col>
					</Row>
				</Container>


				{/* SEÇÃO DE PROJETOS */}
				<Container>
					<Row id="section-title">
						<Col>
							<h1>Projetos</h1>
						</Col>
					</Row>
					<Row id="part-3">
						<CardProjeto nome="Terrain LOD"></CardProjeto>
						<CardProjeto nome="Machine Learning Drivind"></CardProjeto>
						<CardProjeto nome="Terrain LOD"></CardProjeto>
					</Row>
				</Container>


				{/* SEÇÃO DE FORMAÇÃO */}
				<Container>
					<Row id="section-title">
						<Col>
							<h1>Formação</h1>
						</Col>
					</Row>
					<Row>
						<ul>
							<li>2012 - Tecnico em Informática</li>
							<ul>
								<li>Instituto Federal de Ciência e Tecnologia Farroupilha (IFFar) - Campus Santo Augusto/RS</li>
							</ul>
							<li>2017 - Bacharelado em Ciência da Computação</li>
							<ul>
								<li>Universidade Federal de Santa Maria (UFSM)</li>
							</ul>
							<li>2020 - Mestrado em Ciência da Computação</li>
							<ul>
								<li>Universidade Federal de Santa Maria (UFSM)</li>
							</ul>
						</ul>
					</Row>
				</Container>



				{/* SEÇÃO DE EXPERIÊNCIAS */}
				<Container>
					<Row id="section-title">
						<Col>
							<h1>Experiências</h1>
						</Col>
					</Row>
					<Row>
						<ul>
							<li>2017 - Estágio</li>
							<ul>
								<li>SIS-ASTROS 2020</li>
							</ul>
							<li>2019/2021 - Docente</li>
							<ul>
								<li>Instituto Federal Farroupilha - Campus Panambi</li>
							</ul>
							<li>2021 - Analista de Sistemas</li>
							<ul>
								<li>NBRtec - Indústria de Equipamentos Elétricos Ltda</li>
							</ul>
						</ul>
					</Row>
				</Container>
			</div>
		)
	}
}

export default Home;