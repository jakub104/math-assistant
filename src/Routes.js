// BASIC
import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
// PAGES
import MainPage from './Components/Pages/MainPage/App'
import StopwatchApp from './Components/Pages/StopwatchApp/App'
import DeltaApp from './Components/Pages/DeltaApp/App'
import CalculatorApp from './Components/Pages/CalculatorApp/App'
import NotFoundPage from './Components/Pages/404/404'

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={MainPage}/>
				<Route path="/stoper" exact component={StopwatchApp}/>
				<Route path="/delta" exact component={DeltaApp}/>
				<Route path="/kalkulator" exact component={CalculatorApp}/>
				<Route exact component={NotFoundPage}/>
			</Switch>
		</Router>
	);
}

export default App;
