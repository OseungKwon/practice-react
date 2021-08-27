import React from "react";
import Td from "./Td";

const Tr = ({ rowData, rowIndex, dispatch }) => {
  console.log(rowData);
  return (
    <tr>
      {Array(rowData.length)
        .fill()
        .map((td, index) => (
          <Td
            cellIndex={index}
            key={index}
            rowIndex={rowIndex}
            dispatch={dispatch}
            cellData={rowData[index]}
          />
        ))}
    </tr>
  );
};

export default Tr;
