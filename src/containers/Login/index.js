import { connect } from 'react-redux';
import Login from './login';
import { getUserLogin } from './Store';


const mapStateToProps = LoginStore => LoginStore;
const mapDispatchToProps = {
  getUserLogin: params => getUserLogin(params),
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
