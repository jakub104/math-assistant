// BASIC
import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
// STYLES
import Global from '../../Styles/Global'
import { Wrapper, Icon } from '../../Styles/Components'
// COMPONENTS
import Inputs from './components/Inputs'
// ICONS
import { faUndoAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faUndoAlt);

const Answer = styled.div`
	text-align: center;
`

class App extends Component {
	state = {
		value_A: '',
		value_B: '',
		value_C: '',
		answer: undefined
	}
	check = (A, B, C) => {
		if (A !== 0) {
			console.log('aaa:', A);
			let delta = (B * B) - (4 * A * C)
			if (delta > 0) {
				let x1 = (-B + Math.sqrt(delta)) / (2 * A);
				x1 = Math.round(x1 * 100) / 100
				let x2 = (-B - Math.sqrt(delta)) / (2 * A);
				x2 = Math.round(x2 * 100) / 100
				this.setState({
					answer:
						<Answer>
							x<sub>1</sub> {Number.isInteger(x1) ? ('=') : ('≈')} {x1} i x<sub>2</sub> {Number.isInteger(x2) ? ('=') : ('≈')} {x2}
							<br />
							Δ = {delta}
						</Answer>
				})
			}
			else if (delta === 0) {
				let x0 = -B  / (2 * A)
				this.setState({
					answer:
						<Answer>
							x<sub>0</sub> = {x0}
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
	setValue = (e) => {
		e.persist();
		this.setState(
			() => {
				return {
					[e.target.id]: Number(e.target.value)
				};
			},
			() => {
				console.log(this.state.value_A);
				console.log(this.state.value_B);
				console.log(this.state.value_C);
				if(this.state.value_A !== '' && this.state.value_B !== '' && this.state.value_C !== '') {
					console.log('Mogę liczyć!');
					this.check(this.state.value_A, this.state.value_B, this.state.value_C);
				}
			}
		);
	}
	render() {
		let A = this.state.value_A
		let B = this.state.value_B
		let C = this.state.value_C
		return (
			<>
				<Global />
				<Wrapper app>
					<h1>Policz Deltę!</h1>
					<Inputs onChange={this.setValue} />
					{ A !== '' && B !== '' && C !== '' ? (
						this.state.answer
						) : (
						''
					)}
					{/* <p>Ten wyraz jest w <sup>indeksie górnym</sup></p>
					<p>Ten wyraz jest w <sub>indeksie dolnym</sub></p> */}
				</Wrapper>
			</>
		);
	}
}

export default App
