import { del, get, patch, post } from "../utils/request";

export const getPostList = async () => {
    const result = await get("posts");
    return result;
}

