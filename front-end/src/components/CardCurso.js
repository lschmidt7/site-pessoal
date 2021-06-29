import '../static/css/CardCurso.css'
import React, {Component} from 'react'
import {Jumbotron,Card,Button} from 'react-bootstrap'
import img_algoritmos from '../static/img/curso_algoritmos.jpg'

class CardCurso extends Component {

    render() {
        return (
            <Card style={{ width: '18rem' }} className="card-curso">
                <Card.Img variant="top" src={img_algoritmos} />
                <Card.Body>
                    <Card.Title>{this.props.nome}</Card.Title>
                    <Card.Text>
                    {this.props.descricao}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            // <Jumbotron className="card-curso">
            //     <h3>{this.props.nome}</h3>
            //     <p>
            //         {this.props.descricao}
            //     </p>
            // </Jumbotron>
        )
    }

}

export default CardCurso;