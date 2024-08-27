import React from 'react';
import { FaEdit, FaRegTrashAlt } from 'react-icons/fa';
import Box from '@mui/material/Box';
import { Draggable } from 'react-beautiful-dnd';
import { useContext } from 'react';
import TodoContext from 'providers/TodoProvider';

const TodoItem = (props) => {

    const {
        todo,
        index
    } = props

    const {
        deleteTodo,
        editTodo,
    } = useContext(TodoContext);

    return (
        <Draggable draggableId={todo.id} index={index} >
            {(provided) => (
                <Box
                    className="TodoItem__box"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    isDragging={provided.isDragging}

                >
                    {todo.task}
                    <div className='TodoItem__buttons'>
                        <FaEdit className="TodoItem__editIcon" onClick={() => editTodo(todo.task, todo.id)} />
                        <FaRegTrashAlt className="TodoItem__deleteIcon" onClick={() => deleteTodo(todo.id)} />
                    </div>
                </Box>
            )}
        </Draggable>

    );
}

export default TodoItem;