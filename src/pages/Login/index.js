import { NavLink, useNavigate } from 'react-router-dom';
import './Login.scss';
import { login } from '../../services/userService';
import { setCookie } from '../../helpers/cookie';
import {useDispatch} from 'react-redux';
import { checkLogin } from '../../actions/login';
function Login() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
        const response = await login(email, password);
        console.log(response);
        
        if (response.length > 0) {
            setCookie("id", response[0].id, 1);
            setCookie("fullName", response[0].fullName, 1);
            setCookie("email", response[0].email, 1);
            setCookie("token", response[0].token, 1);
            navigate("/");
            dispatch(checkLogin(true));
        }
        else {
            alert("Wrong account or password!");
        }
    }


    return (
        <>
            <form onSubmit={handleSubmit} className='form-login'>
                <h2 className='form-login__title'>Log in with your account</h2>
                <div className='form-login__email'>
                    <input type="email" placeholder="Email" />
                </div>
                <div className='form-login__password'>
                    <input type="password" placeholder="Password" />
                </div>

                <button className='form-login__submit' type="submit">Log in</button>


                <div className='form-login__forgot'>
                    <p>Forgot password ?</p>
                </div>
                <div className='form-login__signup'>
                    <p>---- or ----</p>
                    <NavLink to='/signup'>
                        <button>Sign Up</button>
                    </NavLink>
                </div>
            </form>
        </>
    )
}
export default Login;