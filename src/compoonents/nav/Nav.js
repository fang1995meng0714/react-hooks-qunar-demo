import React from 'react';
import './Nav.css';

function Nav() {
    return (
        <div className="nav">
            <span className="nav-prev">
                前一天
            </span>
            <span className="nav-current">{"今天"}</span>
            <span className="nav-next">
                后一天
            </span>
        </div>
    )
}

export default Nav;