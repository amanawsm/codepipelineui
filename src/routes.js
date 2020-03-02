import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import RequireAuth from './utils/requireAuth';
import SideMenu from './component/SiderBar'
import Heading from './component/Heading'
import Footer from './component/Footer'

const Login = lazy(() => import('./containers/Login'));
const Dashboard = lazy(() => import('./containers/Dashboard'));
const Register = lazy(() => import('./containers/Register'));
const DeploymentRequest = lazy(() => import('./containers/DeploymentRequest'));
const NormalRequest = lazy(() => import('./containers/NormalRequest'));
const Routes = ({ user }) => (
  <Router>
    <div className="warper">
      <Suspense fallback={<div>Loading...</div>}>
        {user && user.token !== undefined && (
          <SideMenu />
        )
        }
        <div id="right-panel" className={user  && user.token !== undefined ? "right-panel" : ""}>

        {user && user.token !== undefined && (
          <Heading />
        )
        }
          
          <div className="main-content">
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/dashboard" component={RequireAuth(Dashboard)} />
            <Route exact path="/deployment-tab" component={RequireAuth(DeploymentRequest)} />
            <Route exact path="/normal-request-tab" component={RequireAuth(NormalRequest)} />

          </div>
        </div>
        <Footer />
      </Suspense>
    </div>
  </Router>
);

const mapStateToProps = ({ LoginStore }) => LoginStore;
export default connect(mapStateToProps)(Routes);
