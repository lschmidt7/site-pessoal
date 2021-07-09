
import { Component } from "react";
import axios from 'axios';

class Curso extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            curso: ''
        }
        this.getCurso()
    }

    async getCurso()
    {
        var self = this;
        axios.post('http://localhost:4000/curso',{id: this.props.match.params.id}).then(function (res) {
            self.setState({
                curso: res.data
            })
        })
    }

    render()
    {
        return (
            <h3>
                {this.state.curso.titulo}
            </h3>
        )
    }

}

export default Curso;