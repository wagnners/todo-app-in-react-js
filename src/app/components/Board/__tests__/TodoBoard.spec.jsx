import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoBoard from '../index';
import '@testing-library/jest-dom';
import TodoContext from 'providers/TodoProvider';

describe('TodoBoard', () => {

    jest.mock('react-beautiful-dnd', () => ({
        DragDropContext: ({ children }) => children,
    }));

    test('renders the TodoBoard component', () => {

        const todos = [
            { id: "1", task: 'Todo 1', status: 'OPEN' },
        ];
        const changeStatusMock = jest.fn();

        const { getByText } = render(
            <TodoContext.Provider value={{ todos, changeStatus: changeStatusMock }} >
                <TodoBoard />
            </TodoContext.Provider>
        );
        const element = getByText("Aberto");
        expect(element).toBeInTheDocument();
    });

});