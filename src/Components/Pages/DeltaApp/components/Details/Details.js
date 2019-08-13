// BASIC
import React, { Component } from 'react'
import styled, {css} from 'styled-components'
// COMPONENTS
import Forms from './components/Forms'
import Properties from './components/Properties'

const DetailsElement = styled.div`
	display: none;
	justify-content: space-around;
	align-items: center;
	flex-direction: column;
	position: absolute;
	width: 100vw;
	height: 100vh;
	text-align: center;
	background-color: black;
	${props =>
		props.preview &&
		css`
			display: flex;
		`
	};
`

class Details extends Component {
	render() {
		return (
			<DetailsElement>
				<Forms />
				<Properties />
			</DetailsElement>
		);
	}
}

export default Details