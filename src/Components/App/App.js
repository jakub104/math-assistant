// BASIC
import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
// STYLES
import Global from '../Styles/Global'
import { Wrapper, Icon } from '../Styles/Components'
// FILES
import rate from '../images/rate.svg'
// ICONS
import { faUndoAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faUndoAlt);

const Rate = styled.img`
	position: absolute;
	width: 75vmin;
	max-width: 500px;
	height: 75vmin;
	max-height: 500px;
	transform: translateY(-45px);
	/* animation: loop 10s linear infinite; */
	z-index: -1;
	animation: loop 10s linear infinite;
	animation-play-state: paused;
	opacity: 0.5;
	transition: opacity 0.1s ease;
	${props =>
		props.run &&
		css`
			animation-play-state: running;
			opacity: 1;
		`
	};
	${props =>
		props.again &&
		css`
			/* transform: rotate(0); */
			animation: back;
		`
	};
`

const Border = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	/* width: calc(80vmin - 90px); */
	width: 75vmin;
	max-width: 500px;
	/* height: calc(80vmin - 90px); */
	height: 75vmin;
	max-height: 500px;
	border-radius: 100%;
	border: 5px solid lightblue;
`

const Time = styled.div`
	font-weight: bold;
	font-size: 70px;
	letter-spacing: 1px;
	@media (max-width: 500px) {
		font-size: 15vmin;
	}

	@media (max-height: 500px) {
		font-size: 15vmin;
	}
`

const Clear = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 50px;
	height: 50px;
	margin: 20px 0;
	font-size: 25px;
	border-radius: 100%;
	background-color: lightblue;
	color: var(--color-background);
`
class App extends Component {
	state = {
		running: false,
		centisecondsElapsed: 0,
		responseTimeFont: false,
		again: false
	}

	increment = () => {
		this.setState({centisecondsElapsed: this.state.centisecondsElapsed + 1})
	}

	start = () => {
		this.setState({running: true, again: false})
		this.incrementer = setInterval(this.increment, 10)
	}

	stop = () => {
		this.setState({running: false})
		clearInterval(this.incrementer)
	}

	handleCheckClick = () => {
		if (this.state.running === false) {
			this.start()
		}
		else {
			this.stop()
		}
	}

	handleCheckPress = (e) => {
		if (e.key === 'Enter' && e.shiftKey) {
			this.handleClearClick();
		}
		else {
			this.handleCheckClick();
		}
	}

	getMinutes = () => {
		if (Math.floor(this.state.centisecondsElapsed / 6000) < 10) {
			return (`0${Math.floor(this.state.centisecondsElapsed / 6000)}`)
		}
		else {
			return Math.floor(this.state.centisecondsElapsed / 6000)
		}
	}

	getSeconds = () => {
		return (`0${Math.floor((this.state.centisecondsElapsed / 100)) % 60}`).slice(-2)
	}

	getCentiseconds = () => {
		return (`0${this.state.centisecondsElapsed % 100}`).slice(-2)
	}

	handleClearClick = () => {
		if (this.state.running === true) {
			this.stop();
		}
		this.setState({again: true, centisecondsElapsed: 0});
	}

	render() {
		document.addEventListener("keypress", this.handleCheckPress)
		return (
			<>
				<Global />
				<Wrapper app>
					<Rate run={this.state.running} again={this.state.again} src={rate} alt="rate" />
					<Border onClick={this.handleCheckClick}>
						<Time>{this.getMinutes()}:{this.getSeconds()}.{this.getCentiseconds()}</Time>
					</Border>
					<Clear onClick={this.handleClearClick} title="Wyczyść">
						<Icon icon={['fas', 'undo-alt']} />
					</Clear>
				</Wrapper>
			</>
		);
	}
}

export default App
