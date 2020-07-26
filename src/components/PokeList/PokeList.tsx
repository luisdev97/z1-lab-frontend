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
  padding: 5%;
`;

const PaginationButton = styled.button`
  margin-top: 1vh;
  padding: 0 16px;
  border-radius: 2px;
  background-color: #018786;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  color: #fff;
  transition: background-color 15ms linear,
    box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);

  height: 36px;
  line-height: 2.25rem;
  font-family: Roboto, sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  :disabled {
    background-color: gray;
  }
`;

const PokeList = () => {
  const [page, setPage] = useState<number>(0);

  const prevPage = () => setPage(page - 1);
  const nextPage = () => setPage(page + 1);

  const renderPokeCards = () => {
    //get the range of ids based on the selected page
    const range: number[] = Array.from({ length: 10 }, (v, k) => k + 1).map(
      (k) => k + 10 * page
    );
    return range.map((id) => <PokeCardContainer key={id} id={id} />);
  };

  return (
    <StyledPokeList>
      {renderPokeCards()}
      <PaginationButton disabled={page === 0} onClick={() => prevPage()}>
        Prev
      </PaginationButton>
      <PaginationButton disabled={page === 95} onClick={() => nextPage()}>
        Next
      </PaginationButton>
    </StyledPokeList>
  );
};

export default PokeList;
