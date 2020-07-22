import React from 'react';
import styled from 'styled-components';
import PokeCard from '../PokeCard/PokeCard';

const StyledPokeList = styled.div`
	background-color: teal;
	flex: 2.6;
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: space-evenly;
	grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
	grid-gap: 5px;
	padding: 5%;
`;

const PokeList = () => {
	return (
		<StyledPokeList>
			<PokeCard />
			<PokeCard />
			<PokeCard />
			<PokeCard />
			<PokeCard />
			<PokeCard />
			<PokeCard />
			<PokeCard />
			<PokeCard />
			<PokeCard />
		</StyledPokeList>
	);
};

export default PokeList;
