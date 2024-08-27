import Input from './index';

export default {
    title: 'Components/Input',
    Comment: Input,
    args: {
        name: "task",
        fullWidth: true,
        className: "task",
        value: "Aula de Inglês",
        label: "Infome os dados no input",
        InputProps: null,
        errors: null
    }
};

export const Default = () => (
    <Input
        name="task"
        className="task"
        value="Aula de Inglês"
        label="Infome os dados no input"
        fullWidth
    />
);
