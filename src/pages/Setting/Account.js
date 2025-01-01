import { MdOutlineNavigateNext } from "react-icons/md";
import { GoLinkExternal } from "react-icons/go";
function Account() {
    return (
        <>
            <div className="account-tab">
                <div className="setting-item">
                    <span>Political content</span>
                    <span className="arrow"><MdOutlineNavigateNext /></span>
                </div>

                <div className="setting-item">
                    <span>Website permissions</span>
                    <span className="arrow"><MdOutlineNavigateNext /></span>
                </div>

                <div className="setting-item">
                    <span>Deactivate or delete profile</span>
                    <span className="arrow"><MdOutlineNavigateNext /></span>
                </div>

                {/* Thêm các items khác */}

                <div className="section-title">Other account settings</div>
                <div className="section-description">
                    Some settings, like username and password, apply to both Threads and Instagram and can be managed on Instagram.
                </div>

                <div className="setting-item">
                    <span>Personal information</span>
                    <span className="arrow"><GoLinkExternal /></span>
                </div>

                <div className="setting-item">
                    <span>Supervisor</span>
                    <span className="arrow"><GoLinkExternal /></span>
                </div>

                <div className="setting-item">
                    <span>Security</span>
                    <span className="arrow"><GoLinkExternal /></span>
                </div>

                <div className="setting-item">
                    <span>Account status</span>
                    <span className="arrow"><GoLinkExternal /></span>
                </div>
                
                <div className="setting-item">
                    <span>Dowload your information</span>
                    <span className="arrow"><GoLinkExternal /></span>
                </div>
                
                <div className="setting-item">
                    <span>Transfer your information</span>
                    <span className="arrow"><GoLinkExternal /></span>
                </div>
                {/* Thêm các setting items khác */}
            </div>
        </>
    )
}
export default Account;
