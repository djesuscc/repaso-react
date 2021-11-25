import { User } from '../interfaces/reqRes';
import { useUsers } from '../hooks/useUsers';

export const Usuarios = () => {
    const { users, beforePage, nextPage } = useUsers();

    const renderItem = ({
        id,
        avatar,
        first_name,
        last_name,
        email
    }: User) => {

        return (
            <tr key={id.toString()}>
                <td> 
                    <img
                        className="rounded-circle"
                        src={avatar} 
                        alt={email} 
                    /> 
                </td>
                <td>{first_name}</td>
                <td>{last_name}</td>
                <td>{email}</td>
            </tr>
        )
    }

    return (
        <div className="mb-5">
            <h3>Usuarios: </h3>

            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>LastName</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(renderItem)}
                </tbody>
            </table>
            <button
                className="btn btn-primary"
                onClick={beforePage}
            >
                Before
            </button>
            &nbsp;
            <button 
                className="btn btn-primary"
                onClick={nextPage}
            >
                Next
            </button>
        </div>
    )
}
