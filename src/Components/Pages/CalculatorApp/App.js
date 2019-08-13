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

const Color1 = styled.h2`
	color: #1569C7;
`;
const Color2 = styled.h2`
	color: #2B60DE;
`;
const Color3 = styled.h2`
	color: #357EC7;
`;
const Color4 = styled.h2`
	color: #368BC1;
`;
const Color5 = styled.h2`
	color: #488AC7;
`;
const Color6 = styled.h2`
	color: #3090C7;
`;
const Color7 = styled.h2`
	color: #659EC7;
`;
const Color8 = styled.h2`
	color: #157DEC;
`;
const Color9 = styled.h2`
	color: #1589FF;
`;
const Color10 = styled.h2`
	color: #5CB3FF;
`;
const Color11 = styled.h2`
	color: #56A5EC;
`;
const Color12 = styled.h2`
	color: #38ACEC;
`;
const Color13 = styled.h2`
	color: #3BB9FF;
`;
const Color14 = styled.h2`
	color: #79BAEC;
`;
const Color15 = styled.h2`
	color: #82CAFA;
`;
const Color16 = styled.h2`
	color: #A0CFEC;
`;
const Color17 = styled.h2`
	color: #ADDFFF;
`;
const Color18 = styled.h2`
	color: #BDEDFF;
`;
const Color19 = styled.h2`
	color: #4EE2EC;
`;
const Color20 = styled.h2`
	color: #77BFC7;
`;
const Color21 = styled.h2`
	color: #43C6DB;
`;
const Color22 = styled.h2`
	color: #43BFC7;
`;
const Div = styled.div`
	min-height: 900px;
	text-align: center;
`
class App extends Component {
	render() {
		document.addEventListener("keypress", this.handleCheckPress)
		return (
			<>
				<Global />
				<Wrapper app scroll >
					<Div>
						<Color1>1. MathAssistant</Color1>
						<Color2>2. MathAssistant</Color2>
						<Color3>3. MathAssistant</Color3>
						<Color4>4. MathAssistant</Color4>
						<Color5>5. MathAssistant</Color5>
						<Color6>6. MathAssistant</Color6>
						<Color7>7. MathAssistant</Color7>
						<Color8>8. MathAssistant</Color8>
						<Color9>9. MathAssistant</Color9>
						<Color10>10. MathAssistant</Color10>
						<Color11>11. MathAssistant</Color11>
						<Color12>12. MathAssistant</Color12>
						<Color13>13. MathAssistant</Color13>
						<Color14>14. MathAssistant</Color14>
						<Color15>15. MathAssistant</Color15>
						<Color16>16. MathAssistant</Color16>
						<Color17>17. MathAssistant</Color17>
						<Color18>18. MathAssistant</Color18>
						<Color19>19. MathAssistant</Color19>
						<Color20>20. MathAssistant</Color20>
						<Color21>21. MathAssistant</Color21>
						<Color22>22. MathAssistant</Color22>
					</Div>
				</Wrapper>
			</>
		);
	}
}

export default App
