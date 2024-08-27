import React from 'react';
import { render } from '@testing-library/react';
import ColumnBoard from '../index';
import '@testing-library/jest-dom'
import { DragDropContext } from 'react-beautiful-dnd';
import TodoContext from 'providers/TodoProvider';

describe('ColumnBoard', () => {

    test('renders the ColumnBoard component', () => {

        const todos = [
            { id: "1", task: 'Todo 1', status: 'OPEN' },
        ];

        const changeStatusMock = jest.fn();

        const { getByText } = render(
            <TodoContext.Provider  value={{ todos, changeStatus: changeStatusMock }} >
                <DragDropContext>
                    <ColumnBoard title={"Aberto"} id="1" />
                </DragDropContext>
            </TodoContext.Provider>
        );

        const element = getByText("Aberto");
        expect(element).toBeInTheDocument();
    });
});
