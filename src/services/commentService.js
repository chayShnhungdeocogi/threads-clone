import { get, post } from "../utils/request";


export const getComments = async () => {
    const result = await get("comments");
    return result;
}
export const createComment = async (options) => {
    const result = await post("comments", options);
    return result;
}
