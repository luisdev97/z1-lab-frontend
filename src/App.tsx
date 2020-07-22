import React from 'react';
import './App.css';
import Wrapper from './components/PokeWrapper/PokeWrapper';
import styled from 'styled-components';

const StyledApp = styled.div``;

function App() {
	return (
		<StyledApp>
			<Wrapper />
		</StyledApp>
	);
}

export default App;
