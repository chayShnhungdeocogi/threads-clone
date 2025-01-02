import { getCookie } from '../../helpers/cookie.js';
import { useEffect, useState } from 'react';
import { getUser } from '../../services/userService';
import { CgInsights } from "react-icons/cg";
import './Profile.scss';
import { FaInstagram } from "react-icons/fa6";
import { deletePost, getPostList, updatePostLikes } from '../../services/postService.js';
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
function Profile() {
    const [reload, setReload] = useState(false);

    const handleReload = () => {
        setReload(!reload);
    }

    const token = getCookie('token');

    const [user, setUser] = useState([]);
    const [likePost, setLikePost] = useState([]);

    const [posts, setPosts] = useState([]);

    useEffect(() => {

        const fetchApi = async () => {
            const result = await getUser();
            result.map(item => {
                if (item.token === token) {
                    setUser(item);
                }

            })
        }
        fetchApi();
    }, []);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await getPostList();
            setPosts(result);

        }
        fetchApi();
    }, [reload]);

    const handleClick = async (postId) => {
        const post = posts.find(item => item.id === postId);
        if (!post) return;

        const isLiked = likePost.includes(postId);

        console.log(isLiked);

        const newLikes = post.likes + (isLiked ? -1 : 1);

        setLikePost(prev => isLiked ? prev.filter(item => item !== postId) : [...prev, postId]);

        await updatePostLikes(postId, newLikes);

        setPosts(posts.map(item => item.id === postId ? { ...item, likes: newLikes } : item));

    }

    const deleteItem = async (postId) => {
        const result = await deletePost(postId);
        if (result) {
            handleReload();
            Swal.fire({
                title: "Deleted!",
                text: "You have deleted successfully.",
                icon: "success"
            });
        }
    }


    const handleDelete = async (postId) => {
        
        Swal.fire({
            title: "Delete post?",
            text: "If you delete this post, you won't be able to restore it.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "Cancel",
            confirmButtonText: "Delete"
        }).then((result) => {
            if (result.isConfirmed) {
                deleteItem(postId);
            }
        });
    }


    return (
        <>
            <div className='layout-profile'>
                <div className='container'>
                    <div key={user.id} className='infor-user'>
                        <div className='full-name'>{user.fullName}</div>
                        <div className='user-name'>{user.userName}</div>
                        <div className='followers'>{user.followers} followers</div>
                        <img src={user.avatar} alt='avatar' className='avatar' />
                        <div className='opt'>
                            <span><CgInsights /></span>
                            <span><FaInstagram /></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="feed-container">
                {/* Posts List */}
                <div className="posts-list">
                    {/* Single Post */}
                    {posts.map(item => {

                        return (
                            <>
                                {item.userId == user.id ? (
                                    <>
                                        <div key={item.id} className="post-card">
                                            <div className="post-header">
                                                <div className="post-user-info">
                                                    <img
                                                        src={user.avatar}
                                                        alt="user avatar"
                                                        className="user-avatar"
                                                    />
                                                    <div className="user-details">
                                                        <span className="username">{user.userName}</span>
                                                    </div>
                                                </div>
                                                <div className='opts'>
                                                    <span onClick={()=> {handleDelete(item.id)}} ><RiDeleteBin6Line /></span>
                                                </div>
                                            </div>

                                            <div className="post-content">
                                                <p className="post-text">
                                                    {item.content}
                                                </p>
                                                <div className='image'>
                                                    <img
                                                        src={item.image}
                                                        alt="post"
                                                        className="post-image"
                                                    />
                                                </div>

                                            </div>

                                            <div className="post-actions">
                                                <div className="action-buttons">
                                                    <button onClick={() => handleClick(item.id)} className="action-btn">
                                                        <FaRegHeart />
                                                        <span>{item.likes}</span>
                                                    </button>
                                                    <button className="action-btn">
                                                        <FaRegComment />
                                                        {/* <span>{item.replies}</span> */}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ) : (<></>)}

                            </>
                        )
                    })}

                </div>
            </div>



        </>
    )
}
export default Profile;
