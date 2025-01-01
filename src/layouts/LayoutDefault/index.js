import { NavLink, Outlet } from 'react-router-dom';
import './LayoutDefault.scss';
import { BsThreads } from "react-icons/bs";
import { IoMdHome } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { IoAddOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { getCookie } from '../../helpers/cookie';
import Modal from 'react-modal';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import { useState } from 'react';
import { createPost } from '../../services/postService';
import { CiImageOn } from "react-icons/ci";
import { MdOutlineGifBox } from "react-icons/md";
import { CiHashtag } from "react-icons/ci";
import { MdOutlinePlace } from "react-icons/md";
function LayoutDefault() {
    const token = getCookie("token");
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState([]);
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '25px',
            width: '600px',
            height: 'auto',
        },
    };



    const handleChange = (e) => {
        e.preventDefault();

        console.log(e);
        
        
        
        
    }

    const closeModal = () => {
        setShowModal(false);
    }
    const openModal = () => {
        setShowModal(true);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await createPost(data);
        if (result) {
            setShowModal(false);
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Posted!",
                showConfirmButton: false,
                timer: 1000
            });
        }
    }
    
    

    return (

        <>
            <div className='layout-default'>
                <header className='layout-default__header'>
                    <div className='layout-default__logo'>
                        <NavLink to='/'><BsThreads /></NavLink>

                    </div>
                    <div className='menu'>
                        <ul>
                            <li className='menu__icon'>
                                <NavLink to='/'><IoMdHome /></NavLink>
                            </li>
                            <li className='menu__icon'>
                                <NavLink to='/search'><FaSearch /></NavLink>
                            </li>
                            <li className='menu__add'>
                                <button onClick={openModal}>
                                    <IoAddOutline />
                                </button>
                                <Modal
                                    isOpen={showModal}
                                    onRequestClose={closeModal}
                                    style={customStyles}
                                    contentLabel="Example Modal"
                                >
                                    <form onSubmit={handleSubmit}>
                                        <div className='container'>
                                            <div className='form-header'>New thread</div>
                                            <div className='form-user'>
                                                <img src='https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg' alt='avatar' className='avatar' />
                                                <span className='name'>user name</span>
                                            </div>
                                            <div className='form-content'>
                                                <input type='text' name='title' placeholder="What's new ?"  onChange={handleChange} />
                                            </div>
                                            <ul className='form-tag'>
                                                <li>
                                                    <input type='file' name='image' id='file-input' onChange={handleChange}/>
                                                    
                                                    <label htmlFor='file-input'><CiImageOn /></label>
                                                </li>
                                                <li><MdOutlineGifBox /></li>
                                                <li><CiHashtag /></li>
                                                <li><MdOutlinePlace /></li>
                                            </ul>
                                            <button className='btnPost' type='submit'>Post</button>
                                        </div>




                                    </form>
                                </Modal>

                            </li>

                            <li className='menu__icon'>
                                <NavLink to='/activity'><FaRegHeart /></NavLink>
                            </li>
                            <li className='menu__icon'>
                                <NavLink to='/profile'><FaRegUser /></NavLink>
                            </li>
                            <li className='menu__bar'>
                                <button>
                                    <FaBarsStaggered />
                                </button>
                                <div className='menu__bar--sub'>
                                    <ul>
                                        <li>Dark Mode</li>

                                        {token && (
                                            <>
                                                <li><NavLink to='/setting'>Setting</NavLink></li>
                                                <li><NavLink to='/logout'>Log out</NavLink></li>
                                            </>
                                        )}

                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {token.length > 0 ? (<></>) : (
                        <div className='layout-default__login'>
                            <button>
                                <NavLink to='/login'>Log in</NavLink>
                            </button>
                        </div>
                    )}

                </header>
                <main className="layout-default__main">
                    <Outlet />
                </main>
                <footer className="layout-default__footer">
                    <ul>
                        <li>
                            <span>© 2024</span>
                        </li>
                        <li>
                            <a href='https://help.instagram.com/769983657850450' target='_blank'>Threads Terms
                            </a>
                        </li>
                        <li>
                            <a href='https://help.instagram.com/515230437301944' target='_blank'>Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href='https://privacycenter.instagram.com/policies/cookies/' target='_blank'>Cookies Policy
                            </a>
                        </li>
                        <li>
                            <span>Report a problem</span>
                        </li>
                    </ul>
                </footer>
            </div>

        </>
    )
}

export default LayoutDefault;