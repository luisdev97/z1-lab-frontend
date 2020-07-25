import React, { useState } from "react";
import styled from "styled-components";
import PokeCardContainer from "../../containers/PokeCardContainer/PokeCardContainer";

const StyledPokeList = styled.div`
  max-height: 100vh;
  flex: 2.6;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  padding-top: 2%;
  align-content: flex-start;
`;

const PokeList = () => {
  const [page, setPage] = useState<number>(0);

  const prevPage = () => setPage(page - 1);
  const nextPage = () => setPage(page + 1);

  const renderPokeCards = () => {
    const range: number[] = Array.from({ length: 10 }, (v, k) => k + 1).map(
      (k) => k + 10 * page
    );
    return range.map((id) => <PokeCardContainer key={id} id={id} />);
  };

  return (
    <StyledPokeList>
      {renderPokeCards()}
      <button disabled={page === 0} onClick={() => prevPage()}>
        Anterior
      </button>
      <button onClick={() => nextPage()}>Siguiente</button>
    </StyledPokeList>
  );
};

export default PokeList;
