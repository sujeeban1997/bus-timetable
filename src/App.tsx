import React from 'react';
import { Routes, Route } from "react-router-dom"
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Results from './components/SearchResult';

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/results' element={<Results />} />
			</Routes>
		</>
	);
}

export default App;
