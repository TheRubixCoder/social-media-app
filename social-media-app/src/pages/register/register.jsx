import "./register.scss"
import { Link } from 'react-router-dom';

const Register = () => {
    return(
        <div className="register">
            <div className="card">
                <h1>Register</h1>
                <form>
                    <input type="text" placeholder="Username" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="text" placeholder="Name" />
                    <button>Register</button>
                </form>
                <Link to="/login">
                <p>Do have an account? Click here!</p>
                </Link>
            </div>
        </div>
    )
}

export default Register