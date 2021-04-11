import React from 'react';
import styled from 'styled-components';

const SearchField = styled.div`
  text-align: right;
  margin-top: 20px;

  & input {
    padding: 10px 0;
    font-size: 1.8rem;
    color: white;
    background-color: inherit;
    border-bottom: 1px solid white;
  }

  & input::placeholder {
    color: white;
  }
`;

export const SearchInput = ({ input, handleOnChange }) => {
  return (
    <SearchField>
      <input
        type="text"
        placeholder="Search..."
        value={input}
        onChange={handleOnChange}
      />
    </SearchField>
  );
};
