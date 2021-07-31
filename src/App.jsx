import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Card, DarkModeToggle, Nav, Particles } from './components';
import { Home, About, Projects, Resume, Contact } from './pages';

function App() {
	return (
		<div className="App min-h-screen flex">
			<Particles />
			<DarkModeToggle className="absolute top-3 right-3" />
			<Router>
				<div className="flex items-center">
					<Nav />
				</div>
				<div className="h-screen w-screen flex items-center justify-center flex-col">
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/about" component={About} />
						<Route path="/projects" component={Projects} />
						<Route path="/resume" component={Resume} />
						<Route path="/contact" component={Contact} />
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
