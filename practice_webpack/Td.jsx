import React, { useCallback } from "react";
import styled from "styled-components";
import { CLICK_CELL, SET_TURN } from "./TicTackToe";

const StyledTd = styled.td`
  width: 4rem;
  height: 4rem;
  border: 1px solid black;
`;

const Td = ({ rowIndex, cellIndex, dispatch, cellData }) => {
  const onClick = useCallback(() => {
    console.log(rowIndex, cellIndex);
    dispatch({ type: CLICK_CELL, row: rowIndex, cell: cellIndex });
    dispatch({ type: SET_TURN });
  }, [cellData]);

  console.log("ce", cellData);
  return <StyledTd onClick={onClick}>{cellData}</StyledTd>;
};

export default Td;
