import React from 'react';
import { render } from '@testing-library/react';
import Form from '../index';
import TodoContext from 'providers/TodoProvider';

describe('Form', () => {

    test('renders the Form component', async () => {

        const changeStatusMockMock = jest.fn();
        const createTodoMock = jest.fn();
        const onChangeTaskInputMock = jest.fn();

        const todos = [
            { id: "1", task: 'Todo 1', status: 'OPEN' },
        ];

        const { getByTestId } = render(
            <TodoContext.Provider  value={{ todos, task:"Aula de Inglês", onChangeTaskInput:onChangeTaskInputMock, changeStatus: changeStatusMockMock }} >
                <Form createTodo={createTodoMock} />
            </TodoContext.Provider>
        );

        const inputTask = getByTestId('task').querySelector('input');
        expect(inputTask.value).toBe("Aula de Inglês");
    });
});
