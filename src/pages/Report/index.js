import { ImAttachment } from "react-icons/im";
import './Report.scss';
function Report() {
  return (
   <>
   <div className="container-report">
        <h2>Report a problem</h2>
        <form>
            <div className="form-group">
                <textarea placeholder="Please include as many details as possible..."></textarea>
            </div>
            <div className="form-footer">
                <div className="attachment-icon"><ImAttachment /></div>
                <button type="submit" className="submit-btn">Submit</button>
            </div>
        </form>
    </div>
   
   </>
  );
}

export default Report;