import React, { Component } from 'react';
import { Modal, Button} from 'react-bootstrap';

import InputField from '../../component/inputField';
import TextAreaField from '../../component/textAreaField'
import ButtonField from '../../component/button';
import axios from 'axios';
import { REACT_APP_IMG_URL } from '../../utils/constants';

class NormalRequest extends Component {
    constructor(props) {
        super(props);
        this.state = {
          title: '',
          description: '',
          attachment: '',
          showModal: false,
          searchJson:{
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

    onChangeFiles = event => {
        this.setState({
          [event.target.name]: event.target.files[0]
        });
    };
    componentDidMount() {
        const { getNormalRequestInfo, LoginStore: {user}} = this.props;
        axios.defaults.headers.common['Authorization'] = `Bearer ${user && user.token}`;
        getNormalRequestInfo(this.state.searchJson);
    }
    submitNormalRequest = () => {
        const { addNormalRequestInfo, getNormalRequestInfo } = this.props;
        const { title, description, attachment } = this.state;
        if(this.state.title=="" || this.state.description=="") {
            alert('Please fill required fields!');
        } else {
            addNormalRequestInfo({ title, description, attachment });
            this.onCloseModal();
            getNormalRequestInfo(this.state.searchJson);
        }
    }
    searchNormalRequest = () => {

    }

    onCloseModal = () => {
        this.setState({
            showModal: false 
        })
    }
    
    render() {
        const { showModal, title, description, attachment } = this.state;
        const { NormalRequestStore:{normalRequest}} = this.props;
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
                        New Normal Request
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div className="form-group">
                        <InputField
                        field="title"
                        label="Title*"
                        value={title || ''}
                        className="form-control" placeholder="Title"
                        onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                            <TextAreaField  
                            field="description"
                            label="Description*"
                            value={description || ''}
                            type="text"
                            onChange={this.onChange} 
                            className="form-control" placeholder="Description"
                            />
                        </div>
                        <div className="form-group">
                        <input type="file" name="attachment" onChange={this.onChangeFiles}/>
                        </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button type="button" className="btn btn-secondary" onClick={this.onCloseModal}>Cancel</Button>
                    <Button type="button" onClick={this.submitNormalRequest} className="btn btn-primary">Confirm</Button>
                </Modal.Footer>
                </Modal>
        <div id="left-panel" className="left-panel">
            
        <div className="content">
            <div className="animated fadedIn">
            <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <strong className="card-title">Manage Normal Requests</strong>
                            </div>
                            <div className="card-body">
                            <button type="button" onClick={ () => {
                                this.setState({
                                    showModal: true
                                })
                            }} className="btn btn-primary mb-1" >
                            ADD Normal Request
                            </button>
                            <div class="row form-group">
                                <div class="col col-sm-3">
                                    <InputField
                                    field="search"
                                    label=""
                                    value={title || ''}
                                    className="form-control" placeholder="Search By Title"
                                    onChange={this.onChange}/>
                                </div>
                                <div class="col col-sm-3">
                                <InputField
                                    field="from"
                                    label=""
                                    value={title || ''}
                                    className="form-control" placeholder="Search By From Date"
                                    onChange={this.onChange}/>
                                </div>
                                <div class="col col-sm-3">
                                <InputField
                                    field="to"
                                    label=""
                                    value={title || ''}
                                    className="form-control" placeholder="Search By To Date"
                                    onChange={this.onChange}/>
                                </div>
                            </div>
                            <ButtonField className="btn btn-primary" variant="primary" type="submit" label="Search"/>
                              
                            </div>
                           
                            
                            <table id="bootstrap-data-table" className="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Description</th>
                                        <th>STATUS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {normalRequest ? ( normalRequest.map((item,index) => (
                                    <tr>
                                        <td>{item.title}</td>
                                        <td>{item.description}</td>
                                        <td>{item.status}</td>
                                    </tr>
                                ))) : (
                                    <td colSpan="4">No Records Found!</td>
                                )}
                                </tbody>
                            </table>
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


  

export default NormalRequest;
