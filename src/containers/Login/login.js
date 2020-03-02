import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types';
import InputField from '../../component/inputField';
import ButtonField from '../../component/button';
import imageLogo from '../../images/logo.png';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  static propTypes = {
    getUserLogin: PropTypes.func,
    LoginStore: PropTypes.any,
  };

  static getDerivedStateFromProps(props) {
    const { LoginStore: { user }, history } = props;
    if (user && user.token !== undefined) {
      console.log('USER: ', user);
      history.push('/dashboard');
    }
    return null;
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  /**
   * Login Function
   */
  loginUser = () => {
    const { getUserLogin } = this.props;
    const { email, password } = this.state;
    getUserLogin({ email, password });
  }


  render() {
    const { email, password } = this.state;
    const { LoginStore: { phase } } = this.props;
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
                        <ButtonField className="btn btn-success btn-flat m-b-30 m-t-30" variant="primary" type="submit" label="Login" onClick={this.loginUser}  />
                
                <div className="register-link m-t-15 text-center">
                    <p>Don't have account ? <Link to="/register">Sign Up Here </Link></p>
                </div>
                </div>
                
            </div>
      </div>
      </div>
      
      </>
    );
  }
}

export default Login;
