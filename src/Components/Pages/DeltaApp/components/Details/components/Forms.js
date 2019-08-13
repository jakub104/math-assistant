// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'

const FormsElement = styled.div`
	
`

class Forms extends Component {
	render() {
		return (
			<FormsElement>
				<div>Postać ogólna: </div>
				<div>Postać iloczynowa: </div>
				<div>Postać kanoniczna: </div>
			</FormsElement>
		);
	}
}

export default Forms