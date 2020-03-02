import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { getEnvironemntInfo, getDashboradProgramData, getSelectTabProgramData } from './Store';

const mapStateToProps = DashboardStore => DashboardStore;
const mapDispatchToProps = {
    getEnvironemntInfo: () => getEnvironemntInfo(),
    getSelectTabProgramData: (param) => getSelectTabProgramData(param),
    getDashboradProgramData: (param) => getDashboradProgramData(param),

};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
