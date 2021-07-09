import '../static/css/Home.css'
import React, { Component } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import CardCurso from '../components/CardCurso'
import CardProjeto from '../components/CardProjeto'
import axios from 'axios'


class Home extends Component {

	constructor(props){
		super(props);
		this.state = {
			cursos: []
		};
		this.getCursos();
	}

	async getCursos(){
		let cursos = [];
		await axios.get('http://localhost:4000/cursos').then(function (res) {
			cursos = res['data']
		});
		let ec = []
		for (let i = 0; i < cursos.length; i++) {
			ec.push(
				<Col key={"curso_"+i}>
					<CardCurso dados={cursos[i]}></CardCurso>
				</Col>
			)
		}
		this.setState({
			cursos: ec
		})
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
						{this.state.cursos}
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
						<Col lg={4} md={4}>
							<CardProjeto nome="projeto_1" extension="png"></CardProjeto>
						</Col>
						<Col lg={4} md={4}>
							<CardProjeto nome="projeto_2" extension="png"></CardProjeto>
						</Col>
						<Col lg={4} md={4}>
							<CardProjeto nome="projeto_3" extension="png"></CardProjeto>
						</Col>
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
							<li>2012 - Técnico em Informática</li>
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