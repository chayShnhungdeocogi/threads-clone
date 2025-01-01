import { MdOutlineNavigateNext } from "react-icons/md";
import { GoLinkExternal } from "react-icons/go";

function Help() {
   
    

    return (
        <>
            <div className="help-tab">
                <div className="setting-item">
                    <span>Privacy and security help</span>
                    <span className="arrow"><MdOutlineNavigateNext /></span>
                </div>

                <div className="setting-item">
                    <span>Support requests</span>
                    <span className="arrow"><MdOutlineNavigateNext /></span>
                </div>

                <div className="setting-item with-external">
                    <span>Help Center</span>
                    <span className="external-link-icon"><GoLinkExternal /></span>
                </div>

                <div className="setting-item with-external">
                    <span>Meta Privacy Policy</span>
                    <span className="external-link-icon"><GoLinkExternal /></span>
                </div>

                <div className="setting-item with-external">
                    <span>Meta Tern of Use</span>
                    <span className="external-link-icon"><GoLinkExternal /></span>
                </div>
                
                <div className="setting-item with-external">
                    <span>Threads Supplemental Privacy Policy</span>
                    <span className="external-link-icon"><GoLinkExternal /></span>
                </div>

                <div className="setting-item with-external">
                    <span>Threads Terns of Use</span>
                    <span className="external-link-icon"><GoLinkExternal /></span>
                </div>

                <div className="setting-item with-external">
                    <span>Cookies Policy</span>
                    <span className="external-link-icon"><GoLinkExternal /></span>
                </div>

                <div className="setting-item with-external">
                    <span>Fediverse Guide</span>
                    <span className="external-link-icon"><GoLinkExternal /></span>
                </div>
                {/* Thêm các items khác */}
            </div>
        </>
    )
}
export default Help;
