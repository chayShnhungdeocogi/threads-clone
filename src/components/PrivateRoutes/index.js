import { Navigate, Outlet } from "react-router-dom";
import {useSelector} from 'react-redux';
import loginReducer from "../../reducers/login";
function PrivateRoutes() {

    const isLogin = true;

    return (

        <>
        
            {isLogin ? (<Outlet />) :(<Navigate to="/login" />)}
            
        </>
    )
}

export default PrivateRoutes;