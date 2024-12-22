import loginReducer from './login';



import { combineReducers } from "redux";
const allReducers = combineReducers({
    loginReducer,
   // Thêm các reducer ở đây

});

export default allReducers;