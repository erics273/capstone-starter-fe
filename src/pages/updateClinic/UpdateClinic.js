import React, { Component } from "react";
import mustBeAuthenticated from "../../redux/hoc/mustBeAuthenticated";
import { generateAuthHeader } from "../../utils/authHelper";

import Alert from 'react-bootstrap/Alert';

import Header from "../../components/header/Header";

import ClinicForm from "../../components/clinicForm/ClinicForm";

class UpdateClinic extends Component {


  //setup state and add a formData object to help keep track of the data we collect in the form
  state = {
    formData: {
      clinic: "",
      doctor: "",
      specialty: "",
      phoneNumber: "",
      faxNumber: "",
      address: "",
      website: "",
      area: "",
      alternatePhoneNumbers: "",
      caseCoordinator: "",
      email: "",
      notes: ""
    }

  }

  //when the component mounts (displays on screen) get the student from the API
  componentDidMount() {

    //get the clinic's id from the URL to make the API call
    const clinicId = this.props.match.params.id;

    this.getClinic(clinicId)


  }

  getClinic = (clinicId) => {

    //get API url from the environment variables
    const apiURL = process.env.REACT_APP_API_URL

    //use fetch to make an API call and get a specific student (returns a promise)
    fetch(`${apiURL}/api/clinics/${clinicId}`, {
      headers: {
        ...generateAuthHeader()
      }
    })
      //on success of the fetch request, turn the response that came back into JSON
      .then((response) => response.json())
      //on success of turnig the response into JSON (data we can work with), lets add that data to state
      .then((data) => {


        //update state with the data from the API causing the page to re-render
        this.setState({
          formData: { ...this.state.formData, ...data }
        });
      })
      //handle any errors/failures with getting data from the API
      .catch((error) => {
        console.log(error)
      });
  }


  //method that handles updating the data in state that matches the data in the form
  //runs everytime a form field changes
  handleChange = (event) => {
    //create a new object from form data in state
    let formData = { ...this.state.formData };

    //take what is changed in the form and update the mathcing key in the form data object
    formData[event.target.id] = event.target.value;

    //update formData in state with the new object
    this.setState({ formData });
  }

  //run when the form is submitted
  handleSubmit = (event) => {
    const apiURL = process.env.REACT_APP_API_URL
    //prevent the form from refreshing the page
    event.preventDefault();

    const clinicId = this.props.match.params.id;

    // const newClinicData = { ...this.state.formData }

    //use fetch to make a POST request with out Data from state that has been populated from
    //the data in the form
    fetch(`${apiURL}/api/clinics/${clinicId}`, {
      method: "PUT", //make sure whe set our method to POST when creating records
      headers: {
        'content-type': 'application/json' //make sure we set the content-type headers so the API knows it is recieveing JSON data
      },
      body: JSON.stringify(this.state.formData) //send our data form state int he body of the request
    })
      .then((response) => response.json()) // on success, turn the respons into JSON so we can work with it
      .then((data) => {
        console.log(data)
        //programatically redirect to another route on success
        this.props.history.push("/map")
      })
      .catch(e => console.log(e.message)) //console.log any errors if the previous steps fail
  }



  render() {
    return (
      <div className="UpdateClinic">

        <Header isAuthenticated={this.props.isAuthenticated} />

        <div className="container">
          {this.state.errorMessage && <Alert variant="danger">{this.state.errorMessage}</Alert>}
          {this.state.successMessage && <Alert variant="info">{this.state.successMessage}</Alert>}
        </div>

        <h3 className="text-center" >Update Your Profile</h3>
        <ClinicForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          formData={this.state.formData}
          isUpdate={true}
        />


      </div>
    )
  }

}

export default mustBeAuthenticated(UpdateClinic)
