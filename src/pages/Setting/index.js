import './Setting.scss';
import { useState } from 'react';
import Privacy from './Privacy';
import Account from './Account';
import Help from './Help';
function Setting() {
    const [active, setActive] = useState('privacy');
    return (
        <>
            <div className="settings-container">
                <div className="tabs">
                    <button
                        className={`tab ${active === 'privacy' ? 'active' : ''}`}
                        onClick={() => setActive('privacy')}
                    >
                        Privacy
                    </button>
                    <button
                        className={`tab ${active === 'account' ? 'active' : ''}`}
                        onClick={() => setActive('account')}
                    >
                        Account
                    </button>
                    <button
                        className={`tab ${active === 'help' ? 'active' : ''}`}
                        onClick={() => setActive('help')}
                    >
                        Help
                    </button>
                </div>

                <div className="tab-content">
                    {active === 'privacy' && <Privacy />}
                    {active === 'account' && <Account />}
                    {active === 'help' && <Help />}
                </div>
            </div>
        </>
    )
}
export default Setting;
