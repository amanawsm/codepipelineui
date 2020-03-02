import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom'
const Sidebar = () => (
    <aside id="left-panel" className="left-panel">

        <nav className="navbar navbar-expand-sm navbar-default">
            <div id="main-menu" className="main-menu collapse navbar-collapse">
                <ul className="nav navbar-nav">
                    <li>
                        <Link to="/dashboard">
                            <i className="menu-icon fa fa-laptop"></i>Dashboard </Link>
                    </li>
                    <li>
                        <Link to="/deployment-tab">
                        <i className="menu-icon fa fa-laptop"></i>Deployment Requests</Link>
                    </li> 
                    <li>
                        <Link to="/normal-request-tab">
                        <i className="menu-icon fa fa-laptop"></i>Normal Requests</Link>
                    </li>                
                </ul>
            </div>
        </nav>

    </aside>

);

Sidebar.propTypes = {
    headingName: PropTypes.string,
};

export default Sidebar;
