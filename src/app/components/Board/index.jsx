import React from 'react';
import ColumnBoard from '../ColumnBoard';
import { STATUS } from 'constants/status';
import { DragDropContext } from 'react-beautiful-dnd';
import Grid from '@mui/material/Grid';
import { useContext } from 'react';
import TodoContext from 'providers/TodoProvider';

const TodoBoard = () => {

    const {  
        changeStatus,
    } = useContext(TodoContext);

    const handleDragEnd = (result) => {

        const { destination, source, draggableId } = result;

        if (!destination) return;
        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) return;

        changeStatus(draggableId, destination.droppableId);
    };

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Grid className='Board__grid' container spacing={2}>
                <ColumnBoard
                    title={"Aberto"}
                    id={STATUS.OPEN}
                />
                <ColumnBoard
                    title={"Em Desenvolvimento"}
                    id={STATUS.IN_PROGRESS}
                />
                <ColumnBoard
                    title={"Concluído"}
                    id={STATUS.DONE}
                />
            </Grid>
        </DragDropContext>
    )
};

export default TodoBoard;