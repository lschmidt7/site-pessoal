import '../static/css/CardCurso.css'
import React, {Component} from 'react'
import {Jumbotron} from 'react-bootstrap'

class CardCurso extends Component {

    render() {
        return (
            <Jumbotron className="card-curso">
                <h3>{this.props.nome}</h3>
                <p>
                    {this.props.descricao}
                </p>
            </Jumbotron>
        )
    }

}

export default CardCurso;