import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import StudentsDataService from '../service/StudentsDataService';

class StudentsComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: this.props.match.params.id,
      firstname: '',
      lastname:'',
      contactemail:'',
      contactphone:'',
      pgemail:'',
      contactmedium:''    
    }
    this.onSubmit = this.onSubmit.bind(this)
  
  }


  componentDidMount() {

    console.log('covid-19 '+ this.state.id)

    // eslint-disable-next-line
     if (this.state.id == -1) {
      return
    }

    StudentsDataService.retrieveStudent(this.state.id)
      .then(response => this.setState({
          firstname:response.data.first_name,
          lastname:response.data.last_name,
          contactemail: response.data.contact_email,
          contactphone:response.data.contact_phone,
          pgemail:response.data.parent_guardian_email,
          contactmedium:response.data.contact_medium
        }))       
  }

  onSubmit(values) {
    
    let student = {
      id: this.state.id,
      first_name:values.firstname,
      last_name:values.lastname,
      contact_email: values.contactemail,
      contact_phone:values.contactphone,
      parent_guardian_email:values.pgemail,
      contact_medium:values.contactmedium
  }

   console.log(student)

  if (!this.state.id ) {
    console.log('insidesubmit and student below')
    console.log(student)
      StudentsDataService.createStudent(student)
          .then(() => this.props.history.push('/students'))
  } else {
       
      StudentsDataService.updateStudent( this.state.id, student)
          .then(() => this.props.history.push('/students'))
  }


  }



  render() {
   return (
     <div>
        <div>
            <h3>Course</h3>
            <div className="container">
                <Formik
                    enableReinitialize
                    initialValues={{
                      id:this.state.id,
                      firstname:this.state.firstname,
                      lastname:this.state.lastname,
                      contactemail:this.state.contactemail,
                      contactphone:this.state.contactphone,
                      pgemail:this.state.pgemail,
                      contactmedium:this.state.contactmedium}}
                      onSubmit={this.onSubmit}
                  >
                    {
                        (props) => (
                            <Form >
                              <ErrorMessage name="description" component="div"
                                        className="alert alert-warning" />
                                <fieldset className="form-group">
                                    <label>Id</label>
                                    <Field className="form-control" type="text" name="id" disabled/>
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Firstname</label>
                                    <Field className="form-control" type="text" name="firstname" />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Lastname</label>
                                    <Field className="form-control" type="text" name="lastname" />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Contactemail</label>
                                    <Field className="form-control" type="text" name="contactemail" />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Contactphone</label>
                                    <Field className="form-control" type="text" name="contactphone" />
                                </fieldset>    
                                <fieldset className="form-group">
                                    <label>Parent/Guardianemail</label>
                                    <Field className="form-control" type="text" name="pgemail" />
                                </fieldset>                                
                                <fieldset className="form-group">
                                    <label>Contactmedium</label>
                                    <Field className="form-control" type="text" name="contactmedium" />
                                </fieldset>
                                <button className="btn btn-success" type="submit">Save</button>
                            </Form>
                        )
                    }
                </Formik>

            </div>
         </div>
       
      </div>
    )
  }
 
}

export default StudentsComponent