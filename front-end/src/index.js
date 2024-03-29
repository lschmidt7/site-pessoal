import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './paginas/Home'
import Sobre from './paginas/Sobre';
import Cursos from './paginas/Cursos';
import Curso from './paginas/Curso';
import CadastroCurso from './paginas/CadastroCurso';
import Login from './paginas/Login'
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './static/css/index.css'



import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
	<BrowserRouter>
		<Header />
		<Switch>
			<Route path="/" exact={true} component={Home} />
			<Route path="/cursos" component={Cursos} />
			<Route path="/curso/:id" component={Curso} />
			<Route path="/sobre" component={Sobre} />
			<Route path="/cadastro-curso" component={CadastroCurso} />
			<Route path="/login" component={Login} />
		</Switch>
		<Footer />
	</BrowserRouter>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
