import React from 'react';
import TodoItem from '../TodoItem';
import { useContext } from 'react';
import TodoContext from 'providers/TodoProvider';

const TodoList = (props) => {

    const { id } = props;

    const {  
        todos, 
    } = useContext(TodoContext);

    return (
        <ul className='TodoList__item' id={id}>
            {todos && todos.map((todo, index) => (
                <>
                    {todo?.status === id && <TodoItem
                        index={index}
                        todo={todo}
                        {...props}
                    />}
                </>
            ))}
        </ul>
    );
}

export default TodoList;