import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types';
import InputField from '../../component/inputField';
import ButtonField from '../../component/button';
import imageLogo from '../../images/logo.png';


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      first_name: '',
      last_name: ''
    };
  }

  static propTypes = {
    getUserRegisterd: PropTypes.func,
    RegisterStore: PropTypes.any,
  };

  static getDerivedStateFromProps(props) {
    const { RegisterStore: { user }, history } = props;
    console.log('userInfo: ', user);
    // if (user && user.user!=null && user.user.token !== undefined) {
    //   history.push('/');
    // }
    return null;
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  /**
   * Login Function
   */
  registerUser = () => {
    const { getUserRegisterd } = this.props;
    const { email, password, first_name, last_name } = this.state;
    getUserRegisterd({ email, password, first_name, last_name });
  }


  render() {
    const { email, password, first_name, last_name } = this.state;
    const { RegisterStore: { phase } } = this.props;
    return (
      <>
      <div className="sufee-login d-flex align-content-center flex-wrap">
      <div className="container">
      <div className="login-content">
          <div className="login-logo">
              <Link to="/">
                  <img className="align-content" src={imageLogo} alt="Roooter UI"/>
              </Link>
          </div>
          <div className="login-form">
              <div className="form-group">
                  <InputField
                  field="first_name"
                  label="First Name*"
                  value={first_name || ''}
                  className="form-control" placeholder="First Name"
                  onChange={this.onChange}/>
              </div>
              <div className="form-group">
                  <InputField
                  field="last_name"
                  label="Last Name*"
                  value={last_name || ''}
                  className="form-control" placeholder="Last Name"
                  onChange={this.onChange}/>
              </div>
              <div className="form-group">
                  <InputField
                  field="email"
                  label="Email*"
                  value={email || ''}
                  className="form-control" placeholder="Email"
                  onChange={this.onChange}/>
              </div>
              <div className="form-group">
                  <InputField  
                  field="password"
                  label="Password*"
                  value={password || ''}
                  type="password"
                  onChange={this.onChange} 
                  className="form-control" placeholder="Password"/>
              </div>
              <ButtonField className="btn btn-success btn-flat m-b-30 m-t-30" variant="primary" type="submit" label="Register" onClick={this.registerUser}  />
                
              <div className="register-link m-t-15 text-center">
                  <p>Already account ? <Link to="/">Sign In Here </Link></p>
              </div>
              </div>
          </div>
      </div>
      </div>
      
      </>
    );
  }
}

export default Register;
