import '../static/css/CardCurso.css'
import React, {Component} from 'react'
import {Card,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class CardCurso extends Component {

    render() {
        return (
            <Card style={{ width: '20rem' }} className="card-curso">
                <Link to={'/curso/'+this.props.dados.id}>
                    <Card.Img variant="top" src={require('../static/img/' + this.props.dados.imagem).default} />
                </Link>
                <Card.Body>
                    <Card.Title className='card-curso-title'>{this.props.dados.titulo}</Card.Title>
                    <Card.Text>
                        {this.props.dados.descricao}
                    </Card.Text>
                    <Button variant="primary">Saiba Mais</Button>
                </Card.Body>
            </Card>
        )
    }

}

export default CardCurso;