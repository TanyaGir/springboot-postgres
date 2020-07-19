import React, { Component } from 'react';
import StudentsDataService from '../service/StudentsDataService';

class ListStudentsComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            students: [],
            message : null
        }
        this.refreshCourses = this.refreshCourses.bind(this)
        this.deleteStudentClicked = this.deleteStudentClicked.bind(this)
        this.updateStudentClicked = this.updateStudentClicked.bind(this)
        this.addStudentClicked = this.addStudentClicked.bind(this)

    }
    componentDidMount() {
        this.refreshCourses();
    }
    refreshCourses() {
        StudentsDataService.retrieveAllStudents()//HARDCODED
            .then(
                response => {
                    console.log(response);
                    this.setState({ students: response.data })
                }
            )
    }

    deleteStudentClicked(id) {
        console.log(id)
        StudentsDataService.deleteStudent(id)
            .then(
                    response => {
                    this.setState({ message: `Delete of course ${id} Successful` })
                    this.refreshCourses()
                }
            )
    
    }

    updateStudentClicked(id) {
        console.log('update ' + id)
        this.props.history.push(`/students/${id}`)
    } 
    
    addStudentClicked() {
        this.props.history.push(`/addstudent`)
    }

    render() {
        return (
            <div className="container">
                <h3>All Students</h3>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Contact Email</th>
                                <th>Contact Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.students.map((student)=>(
                                    <tr key = {student.student_id}>
                                        <td>{student.student_id}</td>
                                        <td>{student.first_name}</td>
                                        <td>{student.last_name}</td>
                                        <td>{student.contact_email}</td>
                                        <td>{student.contact_phone}</td>
                                        <td><button className="btn btn-warning" onClick={() => this.deleteStudentClicked(student.student_id)}>Delete</button></td>
                                        <td><button className="btn btn-success" onClick={() => this.updateStudentClicked(student.student_id)}>Update</button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addStudentClicked}>Add</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListStudentsComponent