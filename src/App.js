// BASIC
import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
// PAGES
import MainApp from './Components/App/App'
import NotFoundPage from './Components/404/404'

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={MainApp}/>
				<Route exact component={NotFoundPage}/>
			</Switch>
		</Router>
	);
}

export default App;
