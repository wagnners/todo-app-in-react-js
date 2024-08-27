import React from 'react';
import { render } from '@testing-library/react';
import TodoList from '../index';
import '@testing-library/jest-dom';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import TodoContext from 'providers/TodoProvider';

describe('TodoList', () => {

    test('renders the TodoList component', async () => {

        const todosMock = [{
            id: "010203",
            task: "Aula de Inglês",
            status: "OPEN"
        }];

        const { getByText } = render(
            <TodoContext.Provider value={{ todos: todosMock }}>
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
                                    <TodoList id="OPEN" />
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
