import {Outlet} from 'react-router-dom';
import './LayoutLogSign.scss'
function LayoutLogSign() {

    return (
        <>
           <div className='layout-login'>
                <img className='layout-login__image' src='https://static.cdninstagram.com/rsrc.php/y0/r/THmkXhzz2_a.avif' alt='anhThreads' />
                <div className='layout-login__main'>

                </div>
                <div className='loyout-login__main'>
                    <Outlet />
                </div>
                <footer className="layout-login__footer">
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

export default LayoutLogSign;