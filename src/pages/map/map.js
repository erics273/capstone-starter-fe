import React, { Component } from "react";
import mustBeAuthenticated from "../../redux/hoc/mustBeAuthenticated";
import Header from "../../components/header/Header";
import GoogleMapReact from 'google-map-react';

//TODO: Turn the logic into a component


class Map extends Component {
    
  state = {
    clinics: [],
  };

  //When component mounts (displays on the screen) calls the get clinic method to get all the clinics
  componentDidMount() {
  this.getClinics()
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

      const PinComponent = ({ text, pinColor }) => <div className="marker" style={{ backgroundColor: pinColor, cursor: 'pointer'}}>{text}</div>;

        return (
            <div className="Map">
                <Header isAuthenticated={this.props.isAuthenticated} />
                <div className="container">
                    <h2>Map Page</h2>
                </div>
                {/*Adding Google Map React page */}
                <div style={{ height: '90vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{key: process.env.REACT_APP_GMAPS_KEY}}
                    defaultCenter={{
                        lat: 37.7749,
                        lng: -122.4194
                      }}
                    defaultZoom={11}
                >

                {this.state.clinics.map((clinic) => {

                let color = "";
                switch(clinic.area){
                    case "Andy":
                        color = "green"
                        break;
                    case "Sylvia":
                        color = "yellow"
                        break;
                    case "Barbara":
                        color = "blue"
                        break;
                    case "Edgar":
                        color = "purple"
                        break;
                    default:
                        color = "red"
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
                </div>
                <div><p>
                Clinic Data: {JSON.stringify(this.state.clinics)}
                </p></div>
            </div>
        );
    }
}

export default mustBeAuthenticated(Map);