import { connect } from 'react-redux';
import { getDeploymentRequestInfo, addDploymentRequestInfo, updateDploymentRequestStatus } from './Store';
import DeploymentRequest from './DeploymentRequest';
import { getEnvironemntInfo, getDashboradProgramData, getSelectTabProgramData, getappdata, getAppProgram } from '../Dashboard/Store';

const mapStateToProps = DashboardStore => DashboardStore;
const mapDispatchToProps = {
    getDeploymentRequestInfo: (params) => getDeploymentRequestInfo(params),
    addDploymentRequestInfo: (params) => addDploymentRequestInfo(params),
    updateDploymentRequestStatus: (params) => updateDploymentRequestStatus(params),
    getEnvironemntInfo: () => getEnvironemntInfo(),
    getSelectTabProgramData: (param) => getSelectTabProgramData(param),
    getDashboradProgramData: (param) => getDashboradProgramData(param),
    getappdata: (param) => getappdata(param),
    getAppProgram: (param) => getAppProgram(param),



};
export default connect(mapStateToProps, mapDispatchToProps)(DeploymentRequest);
