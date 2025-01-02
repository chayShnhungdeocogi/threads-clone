import { useEffect, useState } from "react";
import { createComment, getComments } from "../../services/commentService";
import { getPostList } from "../../services/postService";
import { FaRegHeart } from "react-icons/fa";
import './CommentOfUser.scss';
import { getCookie } from "../../helpers/cookie";
import { getUser } from "../../services/userService";
function CommentOfUser() {
  const token = getCookie("token");
  const [user, setUser] = useState([]);
  const str = window.location.pathname;
  const idPost = str.split('/')[2];
  const [comment, setComment] = useState([]);
  const [post, setPost] = useState([]);


  const [data, setData] = useState([]);

  useEffect(() => {

    const fetchApi = async () => {
      const result = await getComments();
      setComment(result.reverse());
    }
    fetchApi();
  }, []);

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
      {
        result.map((item) => {

          if (item.id == idPost) {
            setPost(item);
          }
        })
      }
    }
    fetchApi();
  }, []);

  const handleChange = (e) => {
    const name = e.target.name; // content
    const value = e.target.value; // noi dung content

    setData({
      ...data,
      [name]: value,
      "postId": idPost,
      "userId": {
        "id": user.id,// id ng comment,
        "userName": user.userName,// username ng comment,
        "avatar": user.avatar // avatar ng comment
      },
      "likes": 0,
    });


  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await createComment(data);
    if (result) {
      window.location.reload();
    }
  }



  return (
    <>
      <div className="feed-container">
        {/* Posts List */}
        <div className="posts-list">
          {/* Single Post */}
          <div key={post.id} className="post-card">
            <div className="post-header">
              <div className="post-user-info">
                <img
                  src={post.avatar}
                  // get user avatar
                  alt="user avatar"
                  className="user-avatar"
                />
                <div className="user-details">
                  <span className="username">{post.userName}</span>
                </div>
              </div>
            </div>

            <div className="post-content">
              <p className="post-text">
                {post.content}
              </p>
              <div className='image'>
                <img
                  src={post.image}
                  alt="post"
                  className="post-image"

                />
              </div>

            </div>

            <div className="post-actions">
              <div className="action-buttons">
                <button className="action-btn">
                  <FaRegHeart />
                  <span>{post.likes}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="add-comment">
        <div className="user">
          <img src={user.avatar} alt="" className="user-avatar" />
          <span className="user-name">{user.userName}</span>
        </div>
        <form onSubmit={handleSubmit} className="comment-form">
          <div className="content-comment">
            <input type='text' name='content' placeholder="Add your comment ... " onChange={handleChange} />
          </div>
          <div className="btnComment">
            <button type="submit"> Post </button>
          </div>

        </form>
      </div>
      <div className="comment-container">
        <div className="comment-list">
          {comment.map(item => {
            if (item.postId == idPost) {
              return (
                <div key={item.id} className="comment-card">
                  <div className="comment-header">
                    <div className="comment-user-info">
                      <img
                        src={item.userId.avatar}
                        alt="user avatar"
                        className="user-avatar"
                        style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid black' }}
                      />
                      <div className="user-details">
                        <span className="username">{item.userId.userName}</span>
                      </div>
                    </div>
                  </div>
                  <div className="comment-content">
                    <p className="comment-text">
                      {item.content}
                    </p>
                  </div>
                  <div className="react">
                    <div className="react--item">
                      <div className="icon"> <FaRegHeart /></div>
                      <div className="likes">{item.likes}</div>
                    </div>
                  </div>

                </div>
              )
            }
          })}
        </div>
      </div>
    </>
  );
}

export default CommentOfUser;