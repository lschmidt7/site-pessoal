import '../static/css/CardProjeto.css'
import React, {Component} from 'react'
import {Image} from 'react-bootstrap'

class CardProjeto extends Component {

    render() {
        return (
            <Image src={require('../static/img/projetos/'+this.props.nome+'/img1.'+this.props.extension).default} rounded width={'100%'} height={'100%'} />
        )
    }

}

export default CardProjeto;