import React, { useState } from 'react';
import Card from './components/Card';
import DarkModeToggle from './components/DarkModeToggle';
import Nav from './components/Nav';

function App() {
	return (
		<div className="App min-h-screen flex items-center justify-center">
			<DarkModeToggle className="absolute top-3 right-3" />
			<Nav />
			<Card className="w-3/5 glow" style={{ minHeight: '80vh' }}>
				<h1 className="bw-text">Hello World!</h1>
			</Card>
		</div>
	);
}

export default App;
