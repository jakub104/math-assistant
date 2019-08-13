// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'

const InputsWrapper = styled.div`
	display: flex;
	justify-content: center;
	width: 90vw;
	margin: 10px 0;
	@media(min-width: 700px) {
		flex-direction: row;
		width: 600px;
		margin: 0;
	}
	/* @media(min-width: 550px) {
		flex-direction: row;
		width: 600px;
	} */
`

const Input = styled.input`
	width: 50px;
	padding: 5px;
	margin: 5px;
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
	color: lightblue;
	line-height: 55px;
`

const Symbol = styled.div `
	font-size: 30px;
	/* font-weight: bold; */
	color: lightblue;
	line-height: 55px;
`

class Inputs extends Component {
	render() {
		return (
			<InputsWrapper>
				<InputElement>
					<Input id="value_A" onChange={this.props.onChange} onKeyPress={this.props.press} placeholder="a" type="number" autoComplete="off" />
					<Unit>x<sup>2</sup></Unit>
				</InputElement>
				{/* <Symbol>+</Symbol> */}
				<InputElement>
					<Input id="value_B" onChange={this.props.onChange} onKeyPress={this.props.press} placeholder="b" type="number" autoComplete="off" />
					<Unit>x<sup></sup></Unit>
				</InputElement>
				<InputElement>
					<Input id="value_C" onChange={this.props.onChange} onKeyPress={this.props.press} placeholder="c" type="number" autoComplete="off" />
				</InputElement>
			</InputsWrapper>
		);
	}
}

export default Inputs