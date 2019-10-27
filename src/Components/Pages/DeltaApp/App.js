// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
// STYLES
import Global from '../../Styles/Global'
import { Wrapper } from '../../Styles/Components'
// COMPONENTS
import QuadraticFunctionInputs from './components/QuadraticFunctionInputs'
// import LinearFunctionInputs from './components/LinearFunctionInputs'
import Details from './components/Details'
// ICONS
import { faUndoAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faUndoAlt);

const QuadraticFunction = styled.div`
	
`

const LinearFunction = styled.div`
	display: none;
`

const Answer = styled.div`
	text-align: center;
	font-size: 20px;
	margin-bottom: 10px;
	@media (min-width: 500px) {
		padding: 10px;
		font-size: 23px;
	}
	@media (min-width: 1000px) {
		font-size: 25px;
	}
`

const DetailsButton = styled.button`
	width: 110px;
	font-weight: bold;
	background: var(--color-secondary);
	padding: 7px;
	margin: 0 5px;
	margin-bottom: 5px;
	border-radius: 20px;
	outline: none;
	/* background-color: #1569C7; */
	color: lightgray;
	transition: opacity 0.1s ease-in;
	font-family: 'Ubuntu', sans-serif;
	text-transform: uppercase;
	:hover {
		cursor: pointer;
	}
`

class App extends Component {
	state = {
		a: undefined,
		b: undefined,
		c: undefined,
		p: undefined,
		q: undefined,
		x1: undefined,
		x2: undefined,
		answer: undefined,
		details: false
	}
	check = (A, B, C) => {
		if (A !== 0) {
			let delta = (B * B) - (4 * A * C)
			if (delta > 0) {
				let x1 = (-B + Math.sqrt(delta)) / (2 * A);
				let rounded_x1 = Math.round(x1 * 100) / 100
				let x2 = (-B - Math.sqrt(delta)) / (2 * A);
				let rounded_x2 = Math.round(x2 * 100) / 100
				this.setState({
					answer:
						<Answer>
							x<sub>1</sub> {rounded_x1 % x1 === 0 ? ('=') : ('≈')} {rounded_x1} i x<sub>2</sub> {rounded_x2 % x2 === 0 ? ('=') : ('≈')} {rounded_x2}
							<br />
							Δ = {delta}
						</Answer>
				})
			}
			else if (delta === 0) {
				let x0 = -B  / (2 * A)
				let rounded_x0 = Math.round(x0 * 100) / 100
				this.setState({
					answer:
						<Answer>
							x<sub>0</sub> {rounded_x0 % x0 === 0 ? ('=') : ('≈')} {rounded_x0}
							<br />
							Δ = {delta}
						</Answer>
				});
			}
			else {
				this.setState({
					answer:
						<Answer>
							Równanie nie ma rozwiązań rzeczywistych!
							<br />
							Δ = {delta}
						</Answer>
				});
			}
		}

		else {
			this.setState({
				answer:
					<Answer>
						To nie jest równanie kwadratowe!
					</Answer>
			})
		}
	}
	setData = (e) => {
		e.persist();
		this.setState(
			() => {
				return {
					[e.target.placeholder]: Number(e.target.value)
				};
			},
			() => {
				console.log(e.target.placeholder);
				console.log(this.state.a);
				console.log(this.state.b);
				console.log(this.state.c);
				if(this.state.a !== undefined && this.state.b !== undefined && this.state.c !== undefined) {
					console.log('Mogę liczyć!');
					this.check(this.state.a, this.state.b, this.state.c);
				}
			}
		);
	}

	setValues = () => {

	}

	focus = (e) => {
		let number = Number(e.target.id);
		
		if (e.key === 'Enter' && e.shiftKey) {
			if (number > 1) {
				document.getElementById((number - 1).toString()).focus();
			}
			else {
				document.getElementById('3').focus();
			}
		}
		else if (e.key === 'Enter') {
			if (number < 3) {
				document.getElementById((number + 1).toString()).focus();
			}
			else {
				document.getElementById('1').focus();
			}
		}
	}

	activateDetails = () => {
		this.state.details === false ? (
			this.setState({details: true})
		) : (
			this.setState({details: false})
		)
	}

	render() {
		let a = this.state.a;
		let b = this.state.b;
		let c = this.state.c;

		let p = this.state.p;
		let q = this.state.q;

		let x1 = this.state.x1;
		let x2 = this.state.x2;
		return (
			<>
				<Global />
				<Wrapper app>
					<h1>Policz Deltę!</h1>
					{/* <LinearFunction>
						<LinearFunctionInputs onChange={this.setData} onKeyPress={this.focus} />
						{
							(a !== undefined && b !== undefined && c !== undefined) ||
							(a !== undefined && p !== undefined && q !== undefined) ||
							(a !== undefined && x1 !== undefined && x2 !== undefined)
						? (
							this.state.answer
							) : (
							''
						)}
					</LinearFunction> */}
					<QuadraticFunction>
						<QuadraticFunctionInputs onChange={this.setData} onKeyPress={this.focus} />
						{
							(a !== undefined && b !== undefined && c !== undefined) ||
							(a !== undefined && p !== undefined && q !== undefined) ||
							(a !== undefined && x1 !== undefined && x2 !== undefined)
						? (
							this.state.answer
							) : (
							''
						)}
					</QuadraticFunction>
					<DetailsButton onClick={this.activateDetails}>Szczegóły</DetailsButton>
					<Details onBackClick={this.activateDetails} active={this.state.details} a={this.state.a} b={this.state.b} c={this.state.c} />
				</Wrapper>
			</>
		);
	}
}

export default App
