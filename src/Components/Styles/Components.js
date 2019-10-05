// BASIC
import React from 'react'
import styled, { css } from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// ICONS
import { faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faUserTie, faReply, faCog } from '@fortawesome/free-solid-svg-icons'

library.add(faFacebookF, faGithub, faLinkedinIn, faUserTie, faReply, faCog);

const Wrapper = styled.main`
	width: 100vw;
	min-width: 300px;
	height: 100vh;
	min-height: 300px;
	display: flex;
	justify-content: center;
	padding: 5vw;
	${props =>
		props.app &&
		css`
			align-items: center;
			flex-direction: column;
			-webkit-tap-highlight-color: transparent;
		`
	}
	${props =>
		props.scroll &&
		css`
			overflow: scroll;
			::-webkit-scrollbar {
				width: 0;
			}
			::-webkit-scrollbar-track {
				background: var(--color-dark); 
				border-radius: 3px;
			}
			::-webkit-scrollbar-thumb {
				background: var(--color-secondary);
			}
		`
	}
`

const BrowserLink = styled.a`
	transition: all .15s ease;
	text-decoration: none;
	color: var(--color-light);
	
	${props =>
		props.socialMedia &&
		css`
			:hover {
				opacity: 0.5;
			}
		`
	};
	
	${props =>
		props.workMedia &&
		css`
		display: block;
		margin: 0 auto;
		width: 30px;
		color: var(--color-decorative);
		font-size: 30px;
			:hover {
				opacity: 0.5;
			}
		`
	};
	`;

const WebLink = props => (
	<BrowserLink workMedia={props.workMedia} href={props.to} target="_blank">
		{props.content}
	</BrowserLink>
);

const Icon = styled(FontAwesomeIcon)`
	${props =>
		props.list &&
		css`
			color: var(--color-decorative);
			margin-right: 5px;
			margin-left: -15px;
		`
	};
`

const Back = () => (
	<Icon icon={['fas', 'reply']} />
);

// // //

const Emoji = props => (
	<span
		className="emoji"
		role="img"
		aria-label={props.label ? props.label : ""}
		aria-hidden={props.label ? "false" : "true"}
	>
		{props.symbol}
	</span>
);

// STYLES
export {BrowserLink, WebLink, Wrapper, Icon, Back}
// COMPONENTS
export {Emoji}