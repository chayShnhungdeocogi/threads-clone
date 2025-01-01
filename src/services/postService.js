import {  del, get, patch, post } from "../utils/request";

export const getPostList = async () => {
    const result = await get("posts");
    return result;
}

export const updatePostLikes = async (postId, likes) => {
    const result = await patch(`posts/${postId}`, { likes });
    return result;
}

export const createPost = async (options) => {
    const result = await post("posts", options);
    return result;
}

export const deletePost = async (postId) => {
    const result = await del(`posts/${postId}`);
    return result;
}