import React from 'react';
import TodoList from '../TodoList';
import Grid from '@mui/material/Grid';
import { Droppable } from 'react-beautiful-dnd';
import { Typography } from "@mui/material";

const ColumnBoard = (props) => {

  const {
    title,
    id
  } = props;

  return (
    <Grid xs={12} sm={12} lg={4} md="4" height="200">
      <div className='ColumnBoard__content'>
        <Typography variant="subtitle1" className='ColumnBoard__title'>
          {title}
        </Typography>
        <Droppable droppableId={id}>
          {
            (provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={provided.isDraggingOver}
                className='ColumnBoard__droppable'
              >
                <TodoList
                  title={title}
                  id={id}
                />
                {provided.placeholder}
              </div>
            )
          }
        </Droppable>
      </div>
    </Grid>
  )
};

export default ColumnBoard;