import '../static/css/CardProjeto.css'
import React, {Component} from 'react'
import {Jumbotron} from 'react-bootstrap'

class CardProjeto extends Component {

    render() {
        return (
            <Jumbotron className="card-projeto">
                <h3>{this.props.nome}</h3>
                <p>
                    Olá,Seja bem vindo ao curso de Algoritmos e Programação em Portugol e Python. Esse curso é destinado a todos que desejam iniciar seu aprendizado em desenvolvimento de software e conhecer os principais recursos em linguagens de programação.
                </p>
            </Jumbotron>
        )
    }

}

export default CardProjeto;