import React from 'react';
import { render } from '@testing-library/react';
import Input from '../index';
import '@testing-library/jest-dom';

// tests to Input component
describe('Input', () => {
    test('renders the Input component', async () => {
        const { getByTestId } = render(
            <Input name="task" value="Aula de Inglês" />
        );
        const inputTask = getByTestId('task').querySelector('input');
        expect(inputTask.value).toBe("Aula de Inglês");
    });
});