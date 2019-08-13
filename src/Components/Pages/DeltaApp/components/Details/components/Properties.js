// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'

const PropertiesElement = styled.div`
	
`

class Properties extends Component {
	render() {
		return (
			<PropertiesElement>
				<div>
					Nazwa:
					<br/>
					Parabola (ramiona skierowane w 'zmienna')
				</div>
				<div>
					Dziedzina:
					<br/>
					D = ('zmienna')
				</div>
				<div>
					Zbiór Wartości:
					<br/>
					y = ('zmienna')
				</div>
				<div>
					Miejsce zerowe:
					<br/>
					x = 'zmienna'
				</div>
				<div>
					Monotoniczność: <br/>
					y↓ w ('zmienna') <br/>
					y↑ w ('zmienna')
				</div>
				<div>
					Wartości dodatnie i ujemne: <br/>
					y - 0 dla x ∈ ('zmienna')
				</div>
				<div>
					Wartość największa i najmniejsza: <br/>
					Wartość największa: xyz <br/>
					Wartość najmniejsza: xyz
				</div>
				<div>
					coś
				</div>
			</PropertiesElement>
		);
	}
}

export default Properties