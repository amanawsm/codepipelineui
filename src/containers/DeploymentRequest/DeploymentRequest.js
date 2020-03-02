import React, { Component } from 'react';
import axios from 'axios';
import Select from "react-select";

import { Modal, Button, Form } from 'react-bootstrap';
import InputField from '../../component/inputField';
import TextAreaField from '../../component/textAreaField'
import ButtonField from '../../component/button';
import Pagination from '../../component/pagination';


class DeploymentRequest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            environmrnt_id: '',
            program_id: '',
            application_id: '',
            version: '',
            description: '',
            showModal: false,
            search_text: '',
            from: '',
            to: '',
            programListSeleted: [],
            updateDeploymentId: '',
            searchJson: {
                "draw": 3,
                "columns": [{
                    "data": "id",
                    "name": "",
                    "searchable": true,
                    "orderable": true,
                    "search": {
                        "value": "",
                        "regex": false
                    }
                }, {
                    "data": "description",
                    "name": "",
                    "searchable": true,
                    "orderable": true,
                    "search": {
                        "value": "",
                        "regex": false
                    }
                }, {
                    "data": "status",
                    "name": "",
                    "searchable": true,
                    "orderable": true,
                    "search": {
                        "value": "",
                        "regex": false
                    }
                }, {
                    "data": "requested_by",
                    "name": "",
                    "searchable": true,
                    "orderable": true,
                    "search": {
                        "value": "",
                        "regex": false
                    }
                }, {
                    "data": "created_at",
                    "name": "",
                    "searchable": true,
                    "orderable": true,
                    "search": {
                        "value": "",
                        "regex": false
                    }
                }, {
                    "data": "id",
                    "name": "",
                    "searchable": false,
                    "orderable": false,
                    "search": {
                        "value": "",
                        "regex": false
                    }
                }],
                "order": [{
                    "column": 0,
                    "dir": "desc"
                }],
                "start": 0,
                "length": 10,
                "search": {
                    "value": "",
                    "regex": false,
                    "from_date": "",
                    "to_date": ""
                }
            }
        };
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSelectChange = (e) => {
        this.setState({ value: e.target.value });
    }
    updateStatusForDeploymentRequest(deployment_id, e) {
        const { updateDploymentRequestStatus } = this.props;
        updateDploymentRequestStatus({ 'id': deployment_id, 'status': e.target.value });
    }

    componentDidMount() {
        const { getDeploymentRequestInfo, getEnvironemntInfo, LoginStore: { user } } = this.props;
        axios.defaults.headers.common['Authorization'] = `Bearer ${user && user.token}`;

        getDeploymentRequestInfo(this.state.searchJson);
        getEnvironemntInfo()

    }

    static getDerivedStateFromProps(props, prevSate) {
        const { DashboardStore: { dashboradInfo } } = props;
        const { dashboradInfoData } = prevSate
        if (dashboradInfo !== dashboradInfoData) {
            return {
                dashboradInfoData: dashboradInfo,
                tabId: Number(dashboradInfo && dashboradInfo.id)
            }
        }
        return null;
    }

    submitDeploymentRequest = () => {
        const { addDploymentRequestInfo, getDeploymentRequestInfo } = this.props;
        const { environment_id, program_id, application_id, version, description } = this.state;
        if (this.state.environment_id == "" || this.state.description == "") {
            alert('Please fill required fields!');
        } else {
            addDploymentRequestInfo({ environment_id, program_id, application_id, version, description });
            this.onCloseModal();
            getDeploymentRequestInfo(this.state.searchJson);
        }
    }
    searchDeploymentRequest = () => {

    }

    onCloseModal = () => {
        this.setState({
            showModal: false
        })
    }

    onChangeProgram(value, index, type) {
        console.log('versionversion', value, index, type)
        const { programListSeleted } = this.state
        programListSeleted[index][type] = value
        this.setState({
            programListSeleted
        })
    }

    render() {
        const { environment_id, programListSeleted, program_id, application_id, version, description, app_name, search_text, from, to, showModal } = this.state;
        const { DeploymentRequestStore: { deploymentRequest }, getSelectTabProgramData, DashboardStore: { dashboradInfo, appProgramList, appList, dashboradTabInfo }, getappdata, getAppProgram } = this.props;

        const optionsProgram = [];
        if (appProgramList) {
            appProgramList.map(item =>
                optionsProgram.push({ value: item.program_id, label: item.program_name, name: item.program_name, version: item.version, version_id: item.version_id, description: '' })
            );
        }

        return (
            <>
                <Modal
                    show={showModal}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    onHide={this.onCloseModal}
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            New Deployment Request
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="form-group">
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Select Environment</Form.Label>
                                <Form.Control value={environment_id} as="select" onChange={(event) => {
                                    this.setState({ environment_id: event.target.value })
                                    getSelectTabProgramData({ tabId: event.target.value });
                                }}>
                                    <option value="">Select Environment </option>
                                    {dashboradInfo && dashboradInfo.map((item) => (<option value={item.id}>{item.name}</option>))}

                                </Form.Control>
                            </Form.Group>
                            {/* <InputField
                                field="environment_id"
                                label="Environment*"
                                value={environment_id || ''}
                                className="form-control" placeholder="Title"
                                onChange={this.onChange} /> */}
                        </div>
                        <div className="form-group">
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Select Type  </Form.Label>
                                <Form.Control value={application_id} as="select" onChange={(event) => {
                                    this.setState({ application_id: event.target.value })
                                    getappdata({ env_id: environment_id, app_type_id: event.target.value });
                                }}>
                                    <option value="">Select Applications </option>
                                    {dashboradTabInfo && dashboradTabInfo.map((tablist) => (<option value={tablist.id}>{tablist.name}</option>))}

                                </Form.Control>
                            </Form.Group>

                            {/* <TextAreaField
                                field="description"
                                label="Description*"
                                value={description || ''}
                                type="text"
                                
                                onChange={this.onChange}
                                className="form-control" placeholder="Description"
                            /> */}
                        </div>
                        <div className="form-group">
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Select App </Form.Label>
                                <Form.Control value={app_name} as="select" onChange={(event) => {
                                    this.setState({ app_name: event.target.value })
                                    getAppProgram({ env_id: environment_id, app_name: event.target.value, app_type_id: application_id });
                                }}>
                                    <option value="">Select Applications </option>
                                    {appList && appList.map((tablist) => (<option value={tablist.name}>{tablist.name}</option>))}

                                </Form.Control>
                            </Form.Group>
                        </div>

                        <div className="form-group">
                            <Select

                                theme={theme => ({
                                    ...theme,
                                    border: 0,
                                    colors: {
                                        ...theme.colors,
                                        primary25: "01a8f9",
                                        primary: "#039be5"
                                    }
                                })}
                                options={optionsProgram}
                                value={programListSeleted || []}
                                isMulti
                                name="year"
                                className="browser-default"
                                placeholder="Select an option"
                                onChange={(value) => {
                                    console.log('eventeventevent', value)
                                    this.setState({
                                        programListSeleted: value ? value : []
                                    })
                                }}
                            />
                            {programListSeleted.map((programList, index) => (
                                <div key={index}>
                                    {programList.name}

                                    <InputField
                                        field="text"
                                        label=""
                                        value={programList.version || ''}
                                        className="form-control" placeholder="Version"
                                        onChange={(event) => this.onChangeProgram(event.target.value, index, 'version')} />

                                    <TextAreaField
                                        field="description"
                                        label="Description*"
                                        value={programList.description || ''}
                                        type="text"

                                        onChange={(event) => this.onChangeProgram(event.target.value, index, 'description')}
                                        className="form-control" placeholder="Description"
                                    />


                                </div>

                            ))}

                            {/* <Form.Group controlId="exampleForm.ControlSelect2">
                                <Form.Label>Example multiple select</Form.Label>
                                <Form.Control as="select" multiple onChange={(event) => {
                                    console.log('ssssssssssssss', event.target.value)
                                    // this.setState({ application_id: event.target.value })
                                }}>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Form.Control>
                            </Form.Group> */}
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type="button" className="btn btn-secondary" onClick={this.onCloseModal}>Cancel</Button>
                        <Button type="button" onClick={this.submitDeploymentRequest} className="btn btn-primary">Save</Button>
                    </Modal.Footer>
                </Modal>
                <div id="left-panel" className="left-panel">
                    <div className="content">
                        <div className="animated fadedIn">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <strong className="card-title">Manage Deployment Requests</strong>
                                        </div>
                                        <div className="card-body">
                                            <button type="button" onClick={() => {
                                                this.setState({
                                                    showModal: true
                                                })
                                            }} className="btn btn-primary mb-1" >
                                                Add Deployment Request
                            </button>
                                            <div class="row form-group">
                                                <div class="col col-sm-3">
                                                    <InputField
                                                        field="search"
                                                        label=""
                                                        value={search_text || ''}
                                                        className="form-control" placeholder="Search By Title"
                                                        onChange={this.onChange} />
                                                </div>
                                                <div class="col col-sm-3">
                                                    <InputField
                                                        field="from"
                                                        label=""
                                                        value={from || ''}
                                                        className="form-control" placeholder="Search By From Date"
                                                        onChange={this.onChange} />
                                                </div>
                                                <div class="col col-sm-3">
                                                    <InputField
                                                        field="to"
                                                        label=""
                                                        value={to || ''}
                                                        className="form-control" placeholder="Search By To Date"
                                                        onChange={this.onChange} />
                                                </div>
                                            </div>
                                            <ButtonField className="btn btn-primary" variant="primary" type="submit" label="Search" />

                                        </div>
                                        <table id="bootstrap-data-table" className="table table-striped table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>Program Version</th>
                                                    <th>Requested Branch</th>
                                                    <th>Requested By</th>
                                                    <th>Description</th>
                                                    <th>TechnicianId</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {deploymentRequest && deploymentRequest.map((item, index) => (
                                                    <tr>
                                                        <td>{item.program_version}</td>
                                                        <td>{item.requested_branch.new_version}</td>
                                                        <td>{item.requested_by}</td>
                                                        <td>{item.description}</td>
                                                        <td>{item.technician_id.name}</td>
                                                        <td>
                                                            <select onChange={(event) => {
                                                                this.updateStatusForDeploymentRequest(item.id, event);
                                                            }} name="deploymentStatus" id="deploymentStatus"
                                                                value={item.status} class="form-control">
                                                                <option value="open">Open</option>
                                                                <option value="wait">In Progress</option>
                                                                <option value="hold">Hold</option>
                                                                <option value="done">Done</option>
                                                                <option value="not done">Not Done</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                ))};
                                </tbody>
                                        </table>
                                        <Pagination items={deploymentRequest} onChangePage={(pageOfItems) => {
                                            // update state with new page of items
                                            this.setState({ pageOfItems: pageOfItems });
                                        }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

}

export default DeploymentRequest;
