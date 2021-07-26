import React, { Component } from 'react';
import '../App.css';
import EditableForm from './EditableForm'
class ListRecord extends Component {

    constructor() {

        super()

        this.state = {
            EditFormData: "",
            EditMode: false,
            dataid: "",
        }
    }

    handleDeleteClick = (dataId) => {

        const newData = this.props.record;
        const index = this.props.record.findIndex((data) => data.id === dataId);
        newData.splice(index, 1);
        this.props.deleteRecordHandler(newData)
    };

    handleEditClick = (dataId) => {
        const EditingData = this.props.record.filter((item) => item.id === dataId)
        this.setState({ EditFormData: EditingData })
        this.setState({ EditMode: true })
        this.setState({ dataid: dataId })
    }
    handleEditSubmit = (formData) => {
        this.setState({ EditMode: false })
        this.props.EditedDataHandle(formData)
    }

    render() {
        return <div className="app-container">

            {this.props.record.length === 0 ? <h2>No records to show</h2> : (
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Date of birth</th>
                        <th>Gender</th>
                        <th>Profile Picture</th>
                        <th>Education</th>
                        <th>Password</th>
                        <th>Confirm password</th>
                        <th>Action</th>
                    </tr>
                </thead>)}
            {this.props.record !== null && this.props.record.map((data) => (
                this.state.EditMode === false ?

                    < tbody >
                        <tr>
                            <td >{data.name} </td>
                            <td>{data.email}</td>
                            <td>{data.DOB}</td>
                            <td>{data.Gender}</td>
                            <td>{data.profilePic}</td>
                            <td>{data.Education}</td>
                            <td>{data.Password}</td>
                            <td>{data.ConfirmPassword}</td>
                            <td><button type="button" onClick={() => this.handleEditClick(data.id)}>
                                Edit
                            </button>
                                <button type="button" onClick={() => this.handleDeleteClick(data.id)}>
                                    Delete
                                </button></td>
                        </tr>
                    </tbody>

                    : (data.id === this.state.dataid ?
                        <EditableForm EditFormData={this.state.EditFormData} data={this.props.data} EditedRecord={this.handleEditSubmit} EditMode={this.state.EditMode} /> :

                        < tbody >
                            <tr>
                                <td >{data.name} </td>
                                <td>{data.email}</td>
                                <td>{data.DOB}</td>
                                <td>{data.Gender}</td>
                                <td>{data.profilePic}</td>
                                <td>{data.Education}</td>
                                <td>{data.Password}</td>
                                <td>{data.ConfirmPassword}</td>
                                <td><button type="button" onClick={() => this.handleEditClick(data.id)} >
                                    Edit
                                </button>
                                    <button type="button" onClick={() => this.handleDeleteClick(data.id)}>
                                        Delete
                                    </button></td>
                            </tr>
                        </tbody>)

            ))
            }


        </div >

    }
}

export default ListRecord;
