import React from "react";
import styled from "styled-components";
import Tr from "./Tr";

const StyledTable = styled.table`
  cursor: pointer;
`;

const Table = ({ onClick, tableData, dispatch }) => {
  console.log("len", tableData.length);
  return (
    <StyledTable>
      <tbody>
        {Array(tableData.length)
          .fill()
          .map((tr, index) => (
            <Tr
              key={index}
              rowIndex={index}
              rowData={tableData[index]}
              dispatch={dispatch}
            />
          ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;
