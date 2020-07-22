import React from 'react';
import { useQuery } from 'react-query';
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
const getPokeDataSet = async () => {
	const response: Response = await fetch('https://pokeapi.co/api/v2/pokemon');
	return response.json();
};

const PokeList = () => {
	const { status, data, isFetching, error } = useQuery('posts', getPokeDataSet);

	const renderPokeCards = (pokemon: any) =>
		pokemon.map((p: any) => <PokeCard key={p.name} pokemon={p} />);

	if (status === 'loading') {
		return <div>loading...</div>; // loading state
	}

	if (status === 'error') {
		return <div>{error?.message}</div>; // error state
	}

	return (
		<StyledPokeList>
			{renderPokeCards(data.results.slice(0, 10))}
		</StyledPokeList>
	);
};

export default PokeList;
