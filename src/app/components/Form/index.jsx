import React from 'react';
import { FormControl } from "@mui/material";
import TaskInput from '../TaskInput';

const Form = ({ createTodo, task, onChangeTaskInput, idToEdit, errors }) => {
    return (
        <form onSubmit={createTodo}>
            <FormControl
                fullWidth
                sx={{ m: 1 }}
                variant="standard">
                <TaskInput
                    task={task}
                    onChangeTaskInput={onChangeTaskInput}
                    errors={errors}
                    idToEdit={idToEdit}
                />
            </FormControl>
        </form>

    );
};

export default Form;