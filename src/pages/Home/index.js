import { useEffect, useState } from 'react';
import './Home.scss';
import {  getPostList } from '../../services/postService';
import { FaHandLizard, FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { useDispatch } from 'react-redux';
function Home() {

    const [data, setData] = useState([]);

    

    useEffect(() => {
        const fetchApi = async () => {
            const result = await getPostList();
            setData(result);
        }
        fetchApi();
    }, []);

    
  
    
    
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
                                            src="https://api.dicebear.com/6.x/avataaars/svg?seed=2"
                                            alt="user avatar"
                                            className="user-avatar"
                                        />
                                        <div className="user-details">
                                            <span className="username">username</span>
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
                                        <button  className="action-btn">
                                            <FaRegHeart />
                                            <span>{item.likes}</span>
                                        </button>
                                        <button className="action-btn">
                                            <FaRegComment />
                                            <span>{item.replies}</span>
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
