import '../static/css/Geral.css'
import '../static/css/Sobre.css'
import React, {Component} from 'react'
import { Container, Row, Col } from 'react-bootstrap';

class Sobre extends Component {
    render() {
        return (
            <Container id="sobre" className="body">
                <Row>
                    <Col>
                        <h1>Sobre</h1>
                    </Col>
                </Row>
                <Row className="justify-content-center justify">
                    <Col xs={8}>
                    <p className="recuo">
                        Meu nome é Leonardo de Abreu Schmidt, sou mestre em Ciência da Computação pela Universidade Federal de Santa Maria, e atualmente sou professor substituto de informática no Instituto Federal Farroupilha no campus de Panambi/RS e também como analista de sistemas na empresa NBRtec.
                    </p>
                    <p className="recuo">
                        Minha formação acadêmica de mestrado é voltada para a área de Machine Learning usando Redes Neurais Artificiais aplicadas ao reconhecimento de padrões em imagens.
                    </p>
                    <p className="recuo">
                        Como docente do eixo de informática, atuo principalmente em disciplinas de desenvolvimento e programação, entre as quais já ministrei Programação para Dispositivos Móveis com React Native, Estrutura de Dados em linguagem C, Programação Web com PHP, Lógica e Algoritmos, Sistemas Operacionais e Programação Orientada a Objetos em Java.
                    </p>
                    <p className="recuo">
                        Trabalho também como analista de sistemas na empresa NBRtec, empresa do ramo de automação de equipamentos voltada ao setor agrícola, principalmente em soluções de automação e controle de grãos na etapa de pós-colheita. A empresa desenvolve soluções completas desde tecnologias para controle e monitoramento de equipamentos de armazenamento e secagem até a geração de interfaces web para compilação dos dados gerados no processo. Dessa forma, atuo na última etapa que é o desenvolvimento desses sistemas. O sistema que desenvolvo é construído com um back-end em Ruby on Rails, front-end em VueJS, além de banco de dados MySQL, trabalho também com versionamento de código com git e gitlab e gerenciamento de aplicações em containers com docker. Minha tarefa no sistema é desenvolver páginas de relatórios completos de termometria a partir dos dados gerados, desde a parte de back-end e banco de dados até a exibição desses dados no front. No momento estou trabalhando com a linguagem Python, buscando desenvolver uma solução de machine learning em uma tarefa específica do sistema.
                    </p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Sobre;