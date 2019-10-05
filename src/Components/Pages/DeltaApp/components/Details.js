// BASIC
import React, { Component } from 'react'
import styled, {css} from 'styled-components'
// STYLES
import { Back } from '../../../Styles/Components'

const DetailsElement = styled.div`
	display: none;
	position: absolute;
	width: 100vw;
	min-width: 300px;
	height: 100vh;
	align-items: center;
	flex-direction: column;
	background-color: black;
	padding: 5vw;
	text-align: center;
	animation: scaleIn 0.2s ease;
	${props =>
		props.preview &&
		css`
			display: flex;
		`
	};
`

const DetailsTitle = styled.header`
	width: 90vw;
	max-width: 1200px;
	font-size: calc(20px + 3vmin);
	font-weight: bold;
	padding: 10px 0;
	margin-bottom: calc(20px + 3vmin);
	color: var(--color-decorative-light);
	border-bottom: 1px solid var(--color-decorative-light);
`

const DetailsItems = styled.div`
	width: 90vw;
	max-width: 1200px;
	display: flex;
	align-items: center;
	flex-direction: column;
	padding: 10px;
	color: lightgray;
	overflow-y: scroll;
	::-webkit-scrollbar {
		width: 3px;
	}
	::-webkit-scrollbar-track {
		background: var(--color-dark); 
		border-radius: 3px;
	}
	::-webkit-scrollbar-thumb {
		background: var(--color-secondary);
	}
`

const DetailsItem = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	margin: 10px 0;
`

const ItemTitle = styled.div`
	/* font-size: 25px; */
	font-size: 23px;
	font-weight: bold;
	color: var(--color-decorative-light);
`

const ItemDescription = styled.div`
	/* font-size: 23px; */
	font-size: 20px;
`

const Sub = styled.span`
	height: 23px;
`

const BackElement = styled.div`
	position: fixed;
	bottom: 30px;
	right: 30px;
	width: 50px;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 25px;
	background-color: var(--color-decorative-dark);
	border-radius: 100%;
	transition: all 0.3s ease;
	@media (min-width: 500px) {
		bottom: 40px;
		right: 50px;
	}
	@media (min-width: 1300px) {
		bottom: 60px;
		right: 70px;
	}
	:hover {
		opacity: 0.5;
		cursor: pointer;
		transform: translateX(-3px);
	}
`

class Details extends Component {

	state = {
		backActive: false
	}

	name = (a) => {
		if (a > 0) {
			return 'Parabola (ramiona skierowane w górę)'
		}
		else if (a === 0) {
			return 'Prosta (nie jest to równanie kwadratowe)'
		}
		else {
			return 'Parabola (ramiona skierowane w dół)'
		}
	}

	domain = (a) => {
		if (a === 0) {
			return 'D = (-∞ ; ∞) (to nie jest to równanie kwadratowe!)'
		}
		else {
			return 'D = (-∞ ; ∞)'
		}
	}

	values = (a, p) => {
		if (a > 0) {
			return `y = <${p} ; ∞)`
		}
		else if (a === 0) {
			return `y = ${p} (to nie jest to równanie kwadratowe!)`
		}
		else {
			return `y = (-∞ ; ${p})`
		}
	}

	zeroPlaces = (delta) => {
		if (delta > 0) {
			return 'x1, x2'
		}
		else if (delta === 0) {
			return 'x0 = '
		}
		else {
			return 'Brak miejsc zerowych'
		}
	}

	onHover = () => {
		if (this.state.backActive === false) {
			this.setState({backActive: true})
			console.log("true");
		}

		else {
			this.setState({backActive: false})
			console.log("false");
		}
	}

	render() {
		let a = this.props.a;
		let b = this.props.b;
		let c = this.props.c;
		let delta = (b * b) - (4 * a * c);

		let p = -b / (2 * a);
		let q = -delta / 4 * a;
		return (
			<DetailsElement preview={this.props.active}>
				<DetailsTitle>Własności funkcji</DetailsTitle>
				{ a !== undefined && b !== undefined && c !== undefined ? (
					<>
						<DetailsItems>
							<DetailsItem>
								<ItemTitle>Nazwa:</ItemTitle>
								<ItemDescription>{this.name(a)}</ItemDescription>
							</DetailsItem>
							<DetailsItem>
								<ItemTitle>Dziedzina:</ItemTitle>
								<ItemDescription>{this.domain(a)}</ItemDescription>
							</DetailsItem>
							<DetailsItem>
								<ItemTitle>Zbiór Wartości:</ItemTitle>
								<ItemDescription>y = ('zmienna')</ItemDescription>
							</DetailsItem>
							<DetailsItem>
								<ItemTitle>Miejsa zerowe:</ItemTitle>
								<ItemDescription><Sub>x<sub>1</sub></Sub> = 'zmienna'</ItemDescription>
							</DetailsItem>
							<DetailsItem>
								<ItemTitle>Monotoniczność:</ItemTitle>
								<ItemDescription>y↓ w ('zmienna')</ItemDescription>
								<ItemDescription>y↑ w ('zmienna')</ItemDescription>
							</DetailsItem>
							<DetailsItem>
								<ItemTitle>Wartości dodatnie i ujemne:</ItemTitle>
								<ItemDescription>y - 0 dla x ∈ ('zmienna')</ItemDescription>
							</DetailsItem>
							<DetailsItem>
								<ItemTitle>Wartość największa i najmniejsza:</ItemTitle>
								<ItemDescription>Wartość największa: xyz</ItemDescription>
								<ItemDescription>Wartość najmniejsza: xyz</ItemDescription>
							</DetailsItem>
							<DetailsItem>
								p = {p}
								q = {q}
							</DetailsItem>
						</DetailsItems>
					</>
					) : (
					<DetailsItems center>
						<ItemTitle>
							Najpierw uzupełnij wszystkie dane!
						</ItemTitle>
					</DetailsItems>
				)}
				<BackElement onMouseOut={this.onHover} onMouseOver={this.onHover} onClick={this.props.onBackClick}>
					<Back />
				</BackElement>
			</DetailsElement>
		);
	}
}

export default Details