import { connect } from 'react-redux';
import Register from './register';
import { getUserRegistered } from './Store';

const mapStateToProps = RegisterStore => RegisterStore;
const mapDispatchToProps = {
  getUserRegisterd: params => getUserRegistered(params),
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);
