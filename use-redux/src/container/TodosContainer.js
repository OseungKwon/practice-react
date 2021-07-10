import React from 'react';
import Todos from '../components/Todos';
import { connect } from 'react-redux';
import { changeInput, insert, toggle, remove } from '../redux/todos';

const TodosContainer = ({
    input,
    todos,
    changeInput,
    insert,
    toggle,
    remove,
}) => {
    return (
        <Todos
            input={input}
            todos={todos}
            onChangeInput={changeInput}
            onInsert={insert}
            onToggle={toggle}
            onRemove={remove}
        />
    );
};
const mapStateToProps = (state) => ({
    input: state.todos.input,
    todos: state.todos.todos,
});
const mapDispatchToPorps = {
    changeInput,
    insert,
    toggle,
    remove,
};

export default connect(mapStateToProps, mapDispatchToPorps)(TodosContainer);
