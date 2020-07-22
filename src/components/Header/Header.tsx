import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
	background-color: yellow;
	height: 12vh;
	max-height: 12vh;
	padding: 5% 0 0 5%;
`;

export default function Header() {
	return (
		<StyledHeader>
			<h1>PokeDex</h1>
		</StyledHeader>
	);
}
