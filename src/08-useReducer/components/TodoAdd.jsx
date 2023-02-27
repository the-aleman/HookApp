
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ onNewTodo }) => {

    const { description, onInputChange, onResetForm } = useForm({
        description: ''
    });

    const onFormSubmit = (event) => {
        event.preventDefault();

        if(description.trim().length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            description: description,
            donde: false
        };

        onNewTodo(newTodo);
        onResetForm();
    };

    return (
        <form onSubmit={ onFormSubmit } aria-label="form">
            <input 
                type="text"
                name="description"
                placeholder="¿Qué hay que hacer?"
                className="form-control"
                value={ description }
                onChange={ onInputChange }
            />
            <button
                type="button"
                className="btn btn-outline-primary mt-2"
                onClick={ onFormSubmit }
            >
                Agregar
            </button>
        </form>
    )
}
