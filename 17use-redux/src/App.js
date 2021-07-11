import React from 'react';
import CounterContainer from './container/CounterContainer';
import TodosContainer from './container/TodosContainer';

const App = () => {
  return (
    <div>
      <CounterContainer number={0} />
      <hr />
      <TodosContainer />
    </div>
  )
}

export default App
