import { NavLink, useNavigate } from 'react-router-dom';
import './SignUp.scss';
import { checkEmail, checkUserName, signup } from '../../services/userService';
import { randomToken } from '../../helpers/randomToken';
function SignUp() {

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const fullName = e.target[0].value;
        const userName = e.target[1].value;
        const email = e.target[2].value;
        const password = e.target[3].value;

        const checkExistEmail = await checkEmail("email", email);

        
        if (checkExistEmail.length > 0) {
            alert("Email already exists!");
        }
        else {
            const options = {
                fullName: fullName,
                userName: userName,
                email: email,
                password: password,
                token: randomToken(),
                avatar: "https://media.istockphoto.com/id/1223671392/vi/vec-to/%E1%BA%A3nh-h%E1%BB%93-s%C6%A1-m%E1%BA%B7c-%C4%91%E1%BB%8Bnh-h%C3%ACnh-%C4%91%E1%BA%A1i-di%E1%BB%87n-ch%E1%BB%97-d%C3%A0nh-s%E1%BA%B5n-cho-%E1%BA%A3nh-minh-h%E1%BB%8Da-vect%C6%A1.jpg?s=612x612&w=0&k=20&c=l9x3h9RMD16-z4kNjo3z7DXVEORzkxKCMn2IVwn9liI=",
                followers: 0,
                following: 0,
            };
            const response = await signup(options);
            if(response) {
                navigate('/');
            }
            else {
                alert("Registration failed!");
            }
        }
        

    }

    return (
        <>
            <form onSubmit={handleSubmit} className='form-signup'>
                <h2 className='form-signup__title'>Create a new account</h2>
                <div className='form-signup__fullName'>
                    <input type="fullName" placeholder="Full name" />
                </div>
                <div className='form-signup__userName'>
                    <input type="userName" placeholder="User name" />
                </div>
                <div className='form-signup__email'>
                    <input type="email" placeholder="Email" />
                </div>
                <div className='form-signup__password'>
                    <input type="password" placeholder="Password" />
                </div>

                <button className='form-signup__submit' type="submit">
                    Sign Up
                </button>
            </form>
        </>
    )
}
export default SignUp;