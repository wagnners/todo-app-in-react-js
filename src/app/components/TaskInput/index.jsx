import React from 'react';
import Input from 'components/Input';
import { Button } from "@mui/material";
import { useContext } from 'react';
import TodoContext from 'providers/TodoProvider';

const TaskInput = () => {

    const {  
        task, 
        onChangeTaskInput, 
        idToEdit, 
        errors 
    } = useContext(TodoContext);

    return (
        <Input
            name="task"
            className='App__input'
            onChange={onChangeTaskInput}
            label="Descreve o título da tarefa"
            value={task}
            errors={errors}
            InputProps={{
                disableUnderline: true,
                endAdornment:
                    <Button
                        type="submit"
                        variant="text"
                        size="medium"
                        disableRipple
                    >
                        {idToEdit ? "Atualizar" : "Adicionar"}
                    </Button>,
            }}
        />
    )
};

export default TaskInput;