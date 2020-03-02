import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import {getLogout} from '../../containers/Login/Store'

import { Link } from 'react-router-dom';
import imageLogo from '../../images/logo.png';
import imageLogo2 from '../../images/logo2.png';
import adminAvtr from '../../images/admin.jpg';

class Header extends Component{

  render(){
    const { getLogout } = this.props;
    return(
      <header id="header" className="header">
        <div className="top-left">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/dashboard"><img src={imageLogo} height="30px" alt="Logo" /></Link>
            <Link className="navbar-brand hidden" to="/dashboard"><img src={imageLogo2} alt="Logo" /></Link>
            <Link id="menuToggle" className="menutoggle" to="/dashboard"><i className="fa fa-bars"></i></Link>
          </div>
        </div>
        <div className="top-right">
          <div className="header-menu">
            <div className="header-left">
              <div className="dropdown for-notification">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="notification" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="fa fa-bell"></i>
                  <span className="count bg-danger">0</span>
                </button>
                <div className="dropdown-menu" aria-labelledby="notification">
                  <p className="red">You have 0 Notification</p>
                </div>
              </div>
            </div>

            <div className="user-area dropdown float-right">
              <Link to="/dashboard" className="dropdown-toggle active" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img className="user-avatar rounded-circle" src={adminAvtr} alt="User Avatar" />
              </Link>

              <div className="user-menu dropdown-menu">
                <Link className="nav-link" to="/dashboard"><i className="fa fa-user"></i>My Profile</Link>
                <Link className="nav-link" to="/dashboard"><i className="fa fa-cog"></i>Settings</Link>
                <a className="nav-link" onClick={() =>{
                    getLogout()
                    axios.defaults.headers.common['Authorization'] = '';

                }}><i className="fa fa-power-off"></i>Logout</a>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

const mapStateToProps = DashboardStore => DashboardStore;

const mapDispatchToProps = {
    getLogout: () => getLogout(),
};

export default connect(mapStateToProps, mapDispatchToProps)( Header);
