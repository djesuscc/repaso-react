import { useEffect, useReducer } from "react";

interface AuthState {
    validando: Boolean;
    token: String | null;
    userName: String | null;
    name: String | null;
}

const initialState: AuthState = {
    validando: true,
    token: null,
    userName: null,
    name: null,
}

type LoginPayload = {
    userName: String;
    name: String;
}

type AuthAction =
    | { type: 'logout' }
    | { type: 'login', payload: LoginPayload };

const authReducer = ( state: AuthState, action: AuthAction ): AuthState => {
    switch (action.type) {
        case 'logout':
            return {
                ...initialState,
                validando: false,
            }
        case 'login':
            return {
                ...state,
                token: 'ABC123',
                name: action.payload.name,
                userName: action.payload.userName,
            }
        default:
            return state;
    }
}

export const Login = () => {
    const [{ validando, token, userName }, dispatch] = useReducer(authReducer, initialState)
    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'logout' })
        }, 1500)
    }, [dispatch]);

    const handleLogin = () => {
        dispatch({ 
            type: 'login',
            payload: {
                name: 'Daniel',
                userName: 'djesuscc'
            }
        })
    }

    const handleLogout = () => {
        dispatch({ type: 'logout'})
    }

    if ( validando ) {
        return (
            <>
                <h3>Login</h3>
                <div className="alert alert-info">
                    Validando...
                </div>
            </>
        );
    }

    return (
        <div>
            <h3>
                Login
            </h3>
            { token ? (
                <>
                    <div className="alert alert-success">
                        Autenticado como { userName }
                    </div>
                    <button 
                        className="btn btn-danger"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </>
            ) : (
                <>
                    <div className="alert alert-danger">
                        No autenticado...
                    </div>
                    <button 
                        className="btn btn-primary"
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                </>
            )}
        </div>
    )
}
