import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'hunter',
        email: 'hunter@gmail.com'
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;

        setFormState({
            ...formState,
            [name]: value
        });
        
    }

    useEffect(() => {
        // console.log('entra al useEfect');
    }, []);

    useEffect(() => {
        // console.log('FormState cambia');
    }, [formState]);

    useEffect(() => {
        // console.log('Email cambia');
    }, [email]);
    

    return (
        <>
            <h1>Formulario simple</h1>
            <hr />
            <input 
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={ username }
                onChange={ onInputChange }
            />
            <input 
                type="email"
                className="form-control mt-2"
                placeholder="user@email.com"
                name="email"
                value={ email }
                onChange={ onInputChange }
            />

            {
                (username === 'hunter2') && <Message />
            }
            
        </>
    )
}
