// BASIC
import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { Link } from 'react-router-dom'
// STYLES
import Global from '../../Styles/Global'
import { Wrapper, Icon } from '../../Styles/Components'
// ICONS
import { faUndoAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faUndoAlt);

class App extends Component {
	render() {
		return (
			<>
				<Global />
				<Wrapper>
					<Link to="/stoper">Stoper</Link>
					<Link to="/delta">Delta</Link>
					<Link to="/kalkulator">Kalkulator</Link>
				</Wrapper>
			</>
		);
	}
}

export default App
