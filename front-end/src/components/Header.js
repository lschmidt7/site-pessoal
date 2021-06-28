import React, {Component} from 'react'
import {Navbar,Image,Nav} from 'react-bootstrap'
import logo from '../static/img/logo.png'
import '../static/css/Header.css'
import {Link} from 'react-router-dom'

class Header extends Component {

    render() {
        return (
            <Navbar bg='dark' variant='dark'>
                <Navbar.Brand>
                    <Link to="/">
                        <Image src={logo} className='logo-img'></Image>
                    </Link>
                </Navbar.Brand>
                <Nav>
                    <Nav.Link href="/">
                        Home
                    </Nav.Link>
                    <Nav.Link href="/cursos">
                        Cursos
                    </Nav.Link>
                    <Nav.Link href="/sobre">
                        Sobre
                    </Nav.Link>
                </Nav>
            </Navbar>
        )
    }

}

export default Header;