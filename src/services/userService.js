import { del, get, patch, post } from "../utils/request";

export const login = async (email, password) => {
    const result = await get(`users?email=${email}&password=${password}`);
    return result;
}

export const signup = async (options) => {
    const result = await post(`users`, options);
    return result;
}

export const checkEmail = async (key, value) => {
    const result = await get(`users?${key}=${value}`);
    return result;
}




export const getUser = async () => {
    const result = await get('users');
    return result;
}

export const searchUser = async (params) => {
    const result = await get(`users/seach?q=${params}`);
    return result;
}

