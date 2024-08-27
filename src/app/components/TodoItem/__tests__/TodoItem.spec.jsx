import React from 'react';
import { render } from '@testing-library/react';
import TodoItem from '../index';
import '@testing-library/jest-dom';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import TodoContext from 'providers/TodoProvider';

describe('TodoItem', () => {

    test('renders the TodoItem component', async () => {
        const deleteTodoMock = jest.fn();
        const editMock = jest.fn();

        const todo = {
            id: "010203",
            task: "Aula de Inglês",
            status: "OPEN"
        };

        const { getByText } = render(
            <TodoContext.Provider value={{deleteTodo: deleteTodoMock, editTodo: editMock}}>
                <DragDropContext>
                    <Droppable droppableId={"OPEN"}>
                        {
                            (provided) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                    isDraggingOver={provided.isDraggingOver}
                                    className='ColumnBoard__droppable'
                                >
                                    <TodoItem todo={todo} index={0} />
                                    {provided.placeholder}
                                </div>
                            )
                        }

                    </Droppable>
                </DragDropContext>
            </TodoContext.Provider>
        );

        const element = getByText("Aula de Inglês");
        expect(element).toBeInTheDocument();


    });
});
