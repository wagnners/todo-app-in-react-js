import React from 'react';
import { TextField } from "@mui/material";
import { func } from 'joi';

const Input = ({name = null, className = null, value = null, onChange = () => func, label = null, InputProps = null, errors = null, fullWidth=false }) => (
    <TextField
        fullWidth
        data-testid={name}
        name={name}
        className={className}
        onChange={(e) => onChange(e.target.value)}
        label={label}
        value={value}
        InputProps={InputProps}
        errors={errors?.[name] ? true : false}
        helperText={errors?.[name] ? errors[name] : ""}
    />
);

export default Input;