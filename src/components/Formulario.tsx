import { useForm } from '../hooks/useForm';

export const Formulario = () => {
    const { form, handleChangeForm } = useForm({
        email: 'djesuscc@correo.com',
        password: '12345',
    });

    return (
        <>
            <h3>Formulario</h3>
            <input
                type="text"
                className="form-control"
                placeholder="Email"
                value={ form.email }
                onChange={({ target }) => handleChangeForm(target.value, 'email')}
            />
            <input 
                type="password"
                className="form-control mt-2 mb-4"
                placeholder="Password"
                value={ form.password }
                onChange={({ target }) => handleChangeForm(target.value, 'password')}
            />

            <code>
                <pre>
                    { JSON.stringify(form, null, 2) }
                </pre>
            </code>
        </>
    )
}
