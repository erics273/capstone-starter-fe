import React, { Component } from "react";
import mustBeAuthenticated from "../../redux/hoc/mustBeAuthenticated";
import Header from "../../components/header/Header";
import GoogleMapReact from 'google-map-react';
import Table from 'react-bootstrap/Table';

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
        const apiURL = "http://localhost:5000"

   
        let query = "";

        if(searchString){
            query = `?searchTerm=${searchString}`
                }
     
        
      

        fetch(`${apiURL}/api/clinics/${query}`)
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
        const apiURL = "http://localhost:5000"

   
        let query = "";

        if(searchString){
            query = `?searchTerm=${searchString}`
                }
     
        
      

        fetch(`${apiURL}/api/hubs/${query}`)
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
        //fetch request to the API that gets all the clinics.
        fetch("http://localhost:5000/api/hubs")
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
        //fetch request to the API that gets all the clinics.
        fetch("http://localhost:5000/api/clinics")
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
                    <td>{clinic.website}</td>
                    <td>{clinic.area}</td>
                    <td>{clinic.alternatePhoneNumbers}</td>
                    <td>{clinic.caseCoordinator}</td>
                    <td>{clinic.email}</td>             
                    <td>{clinic.notes}</td>     
                    

                   
                   
                </tr>
            );
        });

        const hubTable = this.state.hubs.map((hub, index) => {
            return (
                <tr key={index}>
                  
                   <td>{hub.name}</td>
                   <td></td>
                   <td></td>
                    <td></td> 
                    <td></td>
                    <td>{hub.address}</td>
                    <td></td>
                    <td>{hub.upsRiskManager}</td>
                    <td></td>
                    <td></td>
                    <td></td>             
                    <td></td>     
                    

                   
                   
                </tr>
            );
        });
       

        const PinComponent = ({ text, pinColor }) => <div className="marker" style={{ backgroundColor: pinColor, cursor: 'pointer' }}>{text}</div>;
        
        return (
            <div className="Map">
                <Header isAuthenticated={this.props.isAuthenticated} />
                <div className="container">
                    <h2>Map Page</h2>
                </div>
                {/*Adding Google Map React page */}
                <div style={{ height: '80vh', width: '80%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: process.env.REACT_APP_GMAPS_KEY }}
                        defaultCenter={{
                            lat: 37.7749,
                            lng: -122.4194
                        }}
                        defaultZoom={11}
                    >

                     

              
                        {this.state.hubs.map((hub) => {
                            console.log(hub);
                            let color = "black";

                            return (
                                <PinComponent
                                    lat={hub.latitude}
                                    lng={hub.longitude}
                                    text={hub.upsHubName}
                                    pinColor={color}
                                />
                            )
                        })}
                        {this.state.clinics.map((clinic) => {
                            console.log(clinic);
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
                                <PinComponent
                                    lat={clinic.latitude}
                                    lng={clinic.longitude}
                                    text={clinic.clinic}
                                    pinColor={color}
                                />
                            )
                        })}



                    </GoogleMapReact>
                    
            <div className="searchMap">
                <br/>
                {/* Search by Clinic: <input type="text" onChange={this.handleChangeClinics} />
                <br/>
                Search by Hub: <input type="text" onChange={this.handleChangeHubs} /> */}
                Search: <input type="text" onChange={this.handleChangeHubsClinics} />
              


              
                <Table striped bordered hover size>
                    <thead>
                        <tr >
                            <th>Clinic Name</th>
                            <th>Doctor Name</th>
                            <th>Specialty</th>
                            <th>Phone Number</th>
                            <th>Fax Number</th>
                            <th>Address</th>
                            <th>Website</th>
                            <th>Risk Manager</th>
                            <th>Alternate Phone # </th>
                            <th>Case Coordinator</th>
                            <th>E-mail</th>
                            <th>Notes</th>

                            
                        </tr>
                    </thead>
                    <tbody>
                    {clinicTable}
                    </tbody>
                </Table>


                {this.state.clinics.map((clinic, index) => {
                   
               
                  
                   return (
                       <div>
                        
                   
                            {/* Clinic Name: {clinic.clinic}
                            <br/>
                            Risk Manager: {clinic.area}
                            <br/>
                            Risk address: {clinic.address} */}

                       </div>
                        //JSON.stringify(this.state.clinics)
                     )
                })}
            </div>
        )
                                

                </div>

            </div>

            
        );
    }
}

export default mustBeAuthenticated(Map);