import { connect } from 'react-redux';
import { getNormalRequestInfo, addNormalRequestInfo  } from './Store';
import NormalRequest from './NormalRequest';

const mapStateToProps = DashboardStore => DashboardStore;
const mapDispatchToProps = {
    getNormalRequestInfo: params => getNormalRequestInfo(params),
    addNormalRequestInfo: params => addNormalRequestInfo(params),
};
export default connect(mapStateToProps, mapDispatchToProps)(NormalRequest);
