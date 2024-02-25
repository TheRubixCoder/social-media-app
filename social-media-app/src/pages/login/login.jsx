import "./login.scss"
import { Link } from 'react-router-dom';

const Login = () => {
    return(
        <div className="login">
            <div className="card">
                <h1>Login</h1>
                <form>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button>Login</button>
                </form>
                <Link to="/register">
                <p>Dont have an account? Click here!</p>
                </Link>
            </div>
        </div>
    )
}

export default Login