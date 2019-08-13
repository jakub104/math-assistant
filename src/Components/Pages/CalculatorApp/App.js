// BASIC
import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
// STYLES
import Global from '../../Styles/Global'
import { Wrapper, Icon } from '../../Styles/Components'
// FILES
import rate from '../../images/rate.svg'
// ICONS
import { faUndoAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faUndoAlt);

const Color1 = styled.h1`
	color: #1569C7;
`
const Color2 = styled.h1`
	color: #2B60DE;
`
const Color3 = styled.h1`
	color: #357EC7;
`
const Color4 = styled.h1`
	color: #368BC1;
`
const Color5 = styled.h1`
	color: #488AC7;
`
const Color6 = styled.h1`
	color: #3090C7;
`
const Color7 = styled.h1`
	color: #659EC7;
`
const Color8 = styled.h1`
	color: #157DEC;
`
const Color9 = styled.h1`
	color: #1589FF;
`
const Color10 = styled.h1`
	color: #5CB3FF;
`

const Color11 = styled.h1`
	color: #56A5EC;
`
const Color12 = styled.h1`
	color: #38ACEC;
`
const Color13 = styled.h1`
	color: #3BB9FF;
`
const Color14 = styled.h1`
	color: #79BAEC;
`
const Color15 = styled.h1`
	color: #82CAFA;
`
const Color16 = styled.h1`
	color: #A0CFEC;
`
const Color17 = styled.h1`
	color: #ADDFFF;
`
const Color18 = styled.h1`
	color: #BDEDFF;
`
const Color19 = styled.h1`
	color: #4EE2EC;
`
const Color20 = styled.h1`
	color: #77BFC7;
`
const Color21 = styled.h1`
	color: #43C6DB;
`
const Color22 = styled.h1`
	color: #43BFC7;
`
class App extends Component {
	render() {
		document.addEventListener("keypress", this.handleCheckPress)
		return (
			<>
				<Global />
				<Wrapper app >
					<Color1>MathAssistant</Color1>
					<Color2>MathAssistant</Color2>
					<Color3>MathAssistant</Color3>
					<Color4>MathAssistant</Color4>
					<Color5>MathAssistant</Color5>
					<Color6>MathAssistant</Color6>
					<Color7>MathAssistant</Color7>
					<Color8>MathAssistant</Color8>
					<Color9>MathAssistant</Color9>
					<Color10>MathAssistant</Color10>
					<Color11>MathAssistant</Color11>
					<Color12>MathAssistant</Color12>
					<Color13>MathAssistant</Color13>
					<Color14>MathAssistant</Color14>
					<Color15>MathAssistant</Color15>
					<Color16>MathAssistant</Color16>
					<Color17>MathAssistant</Color17>
					<Color18>MathAssistant</Color18>
					<Color19>MathAssistant</Color19>
					<Color20>MathAssistant</Color20>
					<Color21>MathAssistant</Color21>
					<Color22>MathAssistant</Color22>
				</Wrapper>
			</>
		);
	}
}

export default App
