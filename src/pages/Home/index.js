import { useEffect, useState } from 'react';
import './Home.scss';
import { getPostList, updatePostLikes } from '../../services/postService';
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { Link } from 'react-router-dom';
function Home() {

    const [data, setData] = useState([]);
    const [likePost, setLikePost] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await getPostList();
            setData(result.reverse());
        }
        fetchApi();
    }, []);



    const handleClick = async (postId) => {
        const post = data.find(item => item.id === postId);
        if (!post) return;

        const isLiked = likePost.includes(postId);

        const newLikes = post.likes + (isLiked ? -1 : 1);

        setLikePost(prev => isLiked ? prev.filter(item => item !== postId) : [...prev, postId]);

        await updatePostLikes(postId, newLikes);

        setData(data.map(item => item.id === postId ? { ...item, likes: newLikes } : item));

    }



    return (
        <>

            <div className="feed-container">
                {/* Posts List */}
                <div className="posts-list">
                    {/* Single Post */}
                    {data.map(item => {
                        return (
                            <div key={item.id} className="post-card">
                                <div className="post-header">
                                    <div className="post-user-info">
                                        <img
                                            src={item.avatar}
                                            // get user avatar
                                            alt="user avatar"
                                            className="user-avatar"
                                        />
                                        <div className="user-details">
                                            <span className="username">{item.userName}</span>
                                        </div>
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
                                            <Link to={`/comment/${item.id}`}><FaRegComment /></Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>



        </>
    )
}
export default Home;
