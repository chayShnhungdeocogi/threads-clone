import { NavLink, Outlet } from 'react-router-dom';
import './LayoutDefault.scss';
import { BsThreads } from "react-icons/bs";
import { IoMdHome } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { IoAddOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import loginReducer from '../../reducers/login';
import { useSelector } from 'react-redux';
import { getCookie } from '../../helpers/cookie';
function LayoutDefault() {
    const token = getCookie("token");
    console.log(token);
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
                                
                                <button>
                                    <IoAddOutline />
                                </button>

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
                                                <li>Setting</li>
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