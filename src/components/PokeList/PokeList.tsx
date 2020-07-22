import React from 'react';
import styled from 'styled-components';

const StyledPokeList = styled.div`
	background-color: purple;
	height: 85vh;
	width: 30vw;
	margin: 0 auto;
`;

const PokeList = () => {
	return <StyledPokeList>contenido de la lista</StyledPokeList>;
};

export default PokeList;
