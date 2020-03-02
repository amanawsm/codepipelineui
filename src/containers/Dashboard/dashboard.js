import React, { Component } from 'react';
import axios from 'axios';

import { TabContainer, Tabs, Tab, Table } from 'react-bootstrap'

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabId: 2,
            subTab: '',
            activeTab: true,
            dashboradTabInfoData: []
        };
    }

   async componentDidMount() {
        const { tabId } = this.state
        const { getEnvironemntInfo,getSelectTabProgramData, LoginStore: {user} } = this.props;
       axios.defaults.headers.common['Authorization'] = `Bearer ${user && user.token}`;
      await getEnvironemntInfo()
      await getSelectTabProgramData({tabId});
    }

    static getDerivedStateFromProps(props, prevSate) {
        const { DashboardStore: { dashboradInfo } } = props;
        const { dashboradInfoData } = prevSate
      
        if (dashboradInfo !== dashboradInfoData) {
            return {
                dashboradInfoData: dashboradInfo,
            }
        }
        return null;
    }
    componentDidUpdate() {
        const { DashboardStore: { dashboradTabInfo }, getDashboradProgramData  } = this.props
        const { tabId, activeTab, dashboradTabInfoData } = this.state
        if( dashboradTabInfo !== dashboradTabInfoData) {
           if(dashboradTabInfo && dashboradTabInfo[0] && dashboradTabInfo[0].id ) {
            if(activeTab) {
                getDashboradProgramData({tabId, subTab: dashboradTabInfo && dashboradTabInfo[0] && dashboradTabInfo[0].id});
            }
        }
            this.setState({
                dashboradTabInfoData: dashboradTabInfo,
                subTab: dashboradTabInfo && dashboradTabInfo[0] && dashboradTabInfo[0].id,
                activeTab : dashboradTabInfo && dashboradTabInfo[0] && dashboradTabInfo[0].id ? false : true

            })
        }
    }


    render() {
        const { tabId, subTab } = this.state
        const { DashboardStore: { dashboradInfo, programDetail, dashboradTabInfo, phase }, getDashboradProgramData, getSelectTabProgramData } = this.props
        return (
            <>
                <TabContainer>
                    <Tabs id="controlled-tab-example" activeKey={tabId} onSelect={(tabId) => {
                        this.setState({
                            tabId
                        }, () => {
                            getSelectTabProgramData({tabId});

                        })
                    }}>
                        {dashboradInfo && dashboradInfo.map((item) => (
                            <Tab key={item.id} eventKey={item.id} title={item.name}>

                                <Tabs key={item.id} id="controlled-tab-example" activeKey={subTab} onSelect={(subTab) => {
                                    this.setState({
                                        subTab
                                    }, () => {
                                        getDashboradProgramData({tabId, subTab});
                                    })
                                }}>
                                    {dashboradTabInfo && dashboradTabInfo.map((tablist) => (
                                        <Tab key={tablist.id} eventKey={tablist.id} title={tablist.name}>
                                            <Table striped bordered hover>
                                                <thead>
                                                    <tr>
                                                        <th>SERVER</th>
                                                        <th>MAIN PROGRAMME</th>
                                                        <th>PROGRAMME</th>
                                                        {programDetail && programDetail[0].applications && programDetail[0].applications.map((applications) => (
                                                            <th key={applications.app_name}>{applications.app_name}</th>
                                                        ))}
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {programDetail && programDetail.map((list, index) => (
                                                        <tr key={index}>

                                                                <td> {list.server} </td>
                                                                <td> {list.app_type_name} </td>
                                                                <td> {list.program_name} </td>
                                                               

                                                                {programDetail && programDetail[index].applications && programDetail[index].applications.map((applications) => (
                                                                    <td key={applications.version_id}>{applications.version}</td>
                                                                ))}

                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </Table>

                                        </Tab>

                                    ))}
                                </Tabs>
                            </Tab>
                        ))}
                    </Tabs>
                </TabContainer>
            </>
        );
    }
}

export default Dashboard;
