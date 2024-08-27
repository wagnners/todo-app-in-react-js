import React from 'react';
import { render } from '@testing-library/react';
import TaskInput from '../index';
import TodoContext from 'providers/TodoProvider';

describe('TaskInput', () => {

    test('renders the TaskInput component', async () => {
        const createTodoMock = jest.fn();
        const onChangeTaskInputMock = jest.fn();

        const { getByTestId } = render(
            <TodoContext.Provider value={{ createTodo: createTodoMock, task: "Aula de Inglês", onChangeTaskInput: onChangeTaskInputMock, }} >
                <TaskInput />
            </TodoContext.Provider>
        );

        const inputTask = getByTestId('task').querySelector('input');
        expect(inputTask.value).toBe("Aula de Inglês");
    });
});
