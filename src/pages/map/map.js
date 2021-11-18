import React, { Component } from "react";
import mustBeAuthenticated from "../../redux/hoc/mustBeAuthenticated";
import Header from "../../components/header/Header";
import GoogleMapReact from 'google-map-react';
import Table from 'react-bootstrap/Table';
import { handleResponseErrors } from "../../utils/handleResponseErrors";

import { Link } from "react-router-dom";

//TODO: Turn the logic into a component

class Map extends Component {

  state = {
    hubs: [],
    clinics: []
  };

  //When component mounts (displays on the screen) calls the get clinic method to get all the clinics
  componentDidMount() {
    this.getHubs()
    this.getClinics()
  }

  searchByClinics = (searchString) => {
    const apiURL = process.env.REACT_APP_API_URL

    let query = "";

    if (searchString) {
      query = `?searchTerm=${searchString}`
    }

    fetch(`${apiURL}/api/clinics/${query}`)
      .then(handleResponseErrors)
      .then((response) => response.json())
      //on success of turnig the response into JSON (data we can work with), lets add that data to state
      .then((data) => {
        this.setState({
          clinics: data
        });
      })
      .catch((error) => {
        console.log(error)
      });
  }

  searchByHubs = (searchString) => {
    const apiURL = process.env.REACT_APP_API_URL

    let query = "";

    if (searchString) {
      query = `?searchTerm=${searchString}`
    }

    fetch(`${apiURL}/api/hubs/${query}`)
      .then(handleResponseErrors)
      .then((response) => response.json())
      //on success of turnig the response into JSON (data we can work with), lets add that data to state
      .then((data) => {
        this.setState({
          hubs: data
        });
      })
      .catch((error) => {
        console.log(error)
      });
  }

  // handleChangeClinics = (event) => {
  //     this.searchByClinics(event.target.value)
  // }

  // handleChangeHubs = (event) => {
  //     this.searchByHubs(event.target.value)
  // }

  handleChangeHubsClinics = (event) => {
    this.searchByHubs(event.target.value)
    this.searchByClinics(event.target.value)

  }


  getHubs = () => {
    const apiURL = process.env.REACT_APP_API_URL
    //fetch request to the API that gets all the clinics.
    fetch(`${apiURL}/api/hubs`)
      .then(handleResponseErrors)
      //on success of the fetch request, turn the response that came back into JSON
      .then((response) => response.json())
      //on success of turnig the response into JSON (data we can work with), lets add that data to state
      .then((data) => {
        //update state with the data from the API causing the page to re-render
        this.setState({
          hubs: data
        });
      })
      //handle any errors/failures with getting data from the API
      .catch((error) => {
        console.log(error.message)
      });
  }

  getClinics = () => {
    const apiURL = process.env.REACT_APP_API_URL
    //fetch request to the API that gets all the clinics.
    fetch(`${apiURL}/api/clinics`)
      .then(handleResponseErrors)
      //on success of the fetch request, turn the response that came back into JSON
      .then((response) => response.json())
      //on success of turnig the response into JSON (data we can work with), lets add that data to state
      .then((data) => {
        //update state with the data from the API causing the page to re-render
        this.setState({
          clinics: data
        });
      })
      //handle any errors/failures with getting data from the API
      .catch((error) => {
        console.log(error.message)
      });
  }

  //TODO: Possibly get the field updated.
  handleInfoClick = (event) => {
    alert("I was clicked")
  };


  render() {

    const clinicTable = this.state.clinics.map((clinic, index) => {
      return (

        <tr key={index}>
          <td>{clinic.clinic}</td>
          <td>{clinic.doctor}</td>
          <td>{clinic.specialty}</td>
          <td>{clinic.phoneNumber}</td>
          <td>{clinic.faxNumber}</td>
          <td>{clinic.address}</td>
          <td><Link to={{ pathname: `https://${clinic.website}` }} target="_blank">{clinic.website}</Link></td>
          <td>{clinic.area}</td>
          {/* <td>{clinic.alternatePhoneNumbers}</td>
          <td>{clinic.caseCoordinator}</td>
          <td>{clinic.email}</td> */}
          <td>{clinic.notes}</td>
          <td>
            <Link to={`/update/clinic/${clinic._id}`}>View/Update</Link> &nbsp;&nbsp;
          </td>

        </tr>

      );
    });

    const hubTable = this.state.hubs.map((hub, index) => {
      return (
        <tr key={index}>

          <td>{hub.upsHubName}</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>{hub.address}</td>
          <td></td>
          <td>{hub.upsRiskManager}</td>
          {/* <td></td>
          <td></td>
          <td></td> */}
          <td></td>
          <td></td>

        </tr>
      );
    });



    const ClinicPin = ({ text, pinColor }) =>
      <div className="marker" style={{
        backgroundImage: `url(./plus-${pinColor}-24.png)`,
        // backgroundColor: pinColor, 
        cursor: 'pointer'
      }}
        onClick={this.handleInfoClick} >
        {text}
      </div>;

    const HubPin = ({ text, pinColor }) =>
      <div className="marker" style={{
        backgroundImage: `url(./pin-${pinColor}-24.png)`,
        // backgroundColor: pinColor, 
        cursor: 'pointer'
      }}
        onClick={this.handleInfoClick} >
        {text}
      </div>;


    return (
      <div className="Map">
        <Header isAuthenticated={this.props.isAuthenticated} />
        <div className="container">
          {/* <h2>Map Page</h2> */}
        </div>
        {/*Adding Google Map React page */}
        <div style={{ height: '60vh', width: '90%', margin: 'auto' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_GMAPS_KEY }}
            defaultCenter={{
              lat: 37.7749,
              lng: -122.4194
            }}
            defaultZoom={11}
          >


            {this.state.hubs.map((hub) => {
              // console.log(hub);
              let color = "";
              switch (hub.upsRiskManager) {
                case "Andy":
                  color = "blue"
                  break;
                case "Sylvia":
                  color = "green"
                  break;
                case "Barbara":
                  color = "red"
                  break;
                case "Edgar":
                  color = "yellow"
                  break;
                default:
                  color = "black"
              }

              return (
                <HubPin
                  lat={hub.latitude}
                  lng={hub.longitude}
                  text={hub.upsHubName}
                  pinColor={color}
                />
              )
            })}
            {this.state.clinics.map((clinic) => {
              // console.log(clinic);
              let color = "";
              switch (clinic.area) {
                case "Andy":
                  color = "blue"
                  break;
                case "Sylvia":
                  color = "green"
                  break;
                case "Barbara":
                  color = "red"
                  break;
                case "Edgar":
                  color = "yellow"
                  break;
                default:
                  color = "black"
              }
              return (
                <ClinicPin
                  lat={clinic.latitude}
                  lng={clinic.longitude}
                  text={clinic.clinic}
                  pinColor={color}
                />
              )
            })}
          </GoogleMapReact>
        </div>

        <div className="searchMap mb-3 mt-3 container-fluid">
          <input style={{width: "300px"}} type="text" onChange={this.handleChangeHubsClinics} placeholder="Search" />
          <br />
        </div>
        <div className="container-fluid">
          <Table striped bordered hover size className="table-style">
            <thead>
              <tr>
                <th>Facility Name</th>
                <th>Doctor Name</th>
                <th>Specialty</th>
                <th>Phone Number</th>
                <th>Fax Number</th>
                <th>Address</th>
                <th>Website</th>
                <th>Risk Manager</th>
                {/* <th>Alternate Phone # </th>
                <th>Case Coordinator</th>
                <th>E-mail</th> */}
                <th>Notes</th>
                <th>Manage</th>
              </tr>
            </thead>
            <tbody>
              {clinicTable}
              {hubTable}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default mustBeAuthenticated(Map);