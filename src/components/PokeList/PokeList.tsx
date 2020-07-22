import React from 'react';
import styled from 'styled-components';

const StyledPokeList = styled.div`
	height: 50vh;
	background-color: teal;
	flex: 2.6;
`;

const PokeList = () => {
	return <StyledPokeList>Lista de pokemon</StyledPokeList>;
};

export default PokeList;
