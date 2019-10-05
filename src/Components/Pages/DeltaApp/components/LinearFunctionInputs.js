// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'

const InputsWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 90vw;
	margin: 10px 0;
`

const Input = styled.input`
	width: 50px;
	padding: 5px;
	margin: 20px 5px;
	border: 0;
	border-radius: 20px;
	font-size: 30px;
	text-align: center;
	outline: none;
	font-family: 'Ubuntu', sans-serif;

	::placeholder {
		transition: all 0.2s ease-in-out;
		color: var(--color-secondary);
	}

	:focus::placeholder {
		opacity: 0;
		transform: scale(0);
	}
	/* @media(min-width: 700px) {
		flex-direction: row;
		width: 200px;
		margin: 15px 2px;

	} */
`

const InputElement = styled.div`
	display: flex;
	align-items: center;
	margin: 0 5px;
`

const Unit = styled.span`
	font-size: 30px;
	font-weight: bold;
	color: var(--color-decorative-light);
	line-height: 55px;
`

const Symbol = styled.div `
	font-size: 30px;
	font-weight: bold;
	color: var(--color-primary);
	line-height: 55px;
	@media (min-width: 350px) {
		margin: 0 5px;
	}
`

class LinearFunctionInputs extends Component {
	render() {
		return (
			<InputsWrapper>
				<InputElement>
					<Input id="1" onChange={this.props.onChange} onKeyPress={this.props.onKeyPress} placeholder="a" type="number" autoComplete="off" />
					<Unit>x</Unit>
				</InputElement>
				<Symbol>+</Symbol>
				<InputElement>
					<Input id="2" onChange={this.props.onChange} onKeyPress={this.props.onKeyPress} placeholder="b" type="number" autoComplete="off" />
				</InputElement>
			</InputsWrapper>
		);
	}
}

export default LinearFunctionInputs