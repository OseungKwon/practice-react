import React, { useState, useReducer, useCallback } from "react";
import Table from "./Table";

const initialState = {
  winner: "",
  turn: "0",
  tableData: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ]
};

export const SET_WINNER = "SET_WINNER";
export const CLICK_CELL = "CLICK_CELL";
export const SET_TURN = "SET_TURN";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_WINNER:
      return {
        ...state,
        winner: action.winner
      };
    case CLICK_CELL: {
      const tableData = [...state.tableData];
      tableData[action.row] = [...tableData[action.row]];
      tableData[action.row][action.cell] = state.turn;
      return {
        ...state,
        tableData
      };
    }
    case SET_TURN: {
      return {
        ...state,
        turn: state.turn === "0" ? "X" : "0"
      };
    }
  }
};

const TicTackToe = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const onClick = useCallback(() => {
    console.log("click");
    dispatch({ type: SET_WINNER, winner: "O" });
  }, []);
  return (
    <>
      <div>hi</div>
      <Table
        onClick={onClick}
        tableData={state.tableData}
        dispatch={dispatch}
      />
      {state.winner && state.winner}
    </>
  );
};

export default TicTackToe;
