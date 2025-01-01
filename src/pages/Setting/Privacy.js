import { MdLockOutline } from "react-icons/md";
import { BsThreads } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { BiHide } from "react-icons/bi";
import { MdOutlineNavigateNext } from "react-icons/md";
import { MdOutlineBlock } from "react-icons/md";
import { IoHeartDislikeOutline } from "react-icons/io5";
import { GoLinkExternal } from "react-icons/go";
function Privacy() {
    return (
        <>
            <div className="privacy-tab">
                <div className="setting-item">
                    <div className="setting-left">
                        <span className="icon"><MdLockOutline /></span>
                        <span>Private profile</span>
                    </div>
                    <div className="toggle-switch"></div>
                </div>

                <div className="setting-item">
                    <div className="setting-left">
                        <span className="icon"><BsThreads /></span>
                        <span>Mentions</span>
                    </div>
                    <div className="setting-right">
                        <span>Everyone</span>
                        <span className="arrow"><MdOutlineNavigateNext /></span>
                    </div>
                </div>

                <div className="setting-item">
                    <div className="setting-left">
                        <span className="icon"><FaRegUserCircle /></span>
                        <span>Online status</span>
                    </div>
                    <div className="setting-right">
                        <span>No one</span>
                        <span className="arrow"><MdOutlineNavigateNext /></span>
                    </div>
                </div>

                <div className="setting-item">
                    <div className="setting-left">
                        <span className="icon"><BiHide /></span>
                        <span>Hidden Words</span>
                    </div>
                    <div className="setting-right">
                        <span></span>
                        <span className="arrow"><MdOutlineNavigateNext /></span>
                    </div>
                </div>

                {/* Thêm các setting items khác tương tự */}

                <div className="section-title">Other privacy settings</div>
                <div className="section-description">
                    Some settings, like restrict, apply to both Threads and Instagram and can be managed on Instagram.
                </div>

                <div className="setting-item with-external">
                    <div className="setting-left">
                        <span className="icon"><MdOutlineBlock /></span>
                        <span>Blocked profiles</span>
                    </div>
                    <span className="external-link-icon"><GoLinkExternal /></span>
                </div>

                <div className="setting-item with-external">
                    <div className="setting-left">
                        <span className="icon"><IoHeartDislikeOutline /></span>
                        <span>Hide like and share counts</span>
                    </div>
                    <span className="external-link-icon"><GoLinkExternal /></span>
                </div>
                {/* Thêm các items khác */}
            </div>
        </>
    )
}
export default Privacy;
