import React, { Component } from "react";
import mustBeAuthenticated from "../../redux/hoc/mustBeAuthenticated";
import Header from "../../components/header/Header";
import GoogleMapReact from 'google-map-react';

class Protected extends Component {

    state = {
        bunchOfPlaces: [{
            "_id": {
              "$oid": "618aaaf0b1776cc3da637f6f"
            },
            "area": "Andy",
            "clinic": "St Francis",
            "doctor": [
              "Dr. Remy Ardizzone"
            ],
            "address": "770 Tamalpais Dr, Corte Madera, CA 94925",
            "phoneNumber": "415-927-1900",
            "faxNumber ": "",
            "website": "www.saintfrancismemorial.org",
            "specialty": "Foot/Ankle Specialist",
            "notes": "not accepting patients",
            "email": "",
            "caseCoordinator": "",
            "alternatePhoneNumbers": "",
            "latitude": 37.926227,
            "longitude": -122.473744
          },{
            "_id": {
              "$oid": "618aaaf0b1776cc3da637f70"
            },
            "area": "Andy",
            "clinic": "UCSF",
            "doctor": [
              "Dr. Shane Burch"
            ],
            "address": "400 Parnassus Ave Third Floor, San Francisco, CA 94143",
            "phoneNumber": "866-817-7463",
            "faxNumber ": "",
            "website": "www.ucsfhealth.org",
            "specialty": "spine ortho",
            "notes": "",
            "email": "",
            "caseCoordinator": "john smith",
            "alternatePhoneNumbers": "555-555-555 ext 1",
            "latitude": 37.763864,
            "longitude": -122.458392
          },{
            "_id": {
              "$oid": "618aaaf0b1776cc3da637f71"
            },
            "area": "Andy",
            "clinic": "Concentra- SF",
            "doctor": [
              ""
            ],
            "address": "3 S Linden Ave, South San Francisco, CA 94080",
            "phoneNumber": "650-238-1500",
            "faxNumber ": "650 238 0508",
            "website": "www.concentra.com",
            "specialty": "",
            "notes": "",
            "email": "",
            "caseCoordinator": "",
            "alternatePhoneNumbers": "",
            "latitude": 0.00000,
            "longitude": 0.00000
          },{
            "_id": {
              "$oid": "618aaaf0b1776cc3da637f72"
            },
            "area": "Andy",
            "clinic": "Concentra- Downtown SF",
            "doctor": [
              ""
            ],
            "address": "26 California St, San Francisco, CA 94111",
            "phoneNumber": "415-781-7077",
            "faxNumber ": "415.781.7099",
            "website": "www.concentra.com",
            "specialty": "",
            "notes": "",
            "email": "",
            "caseCoordinator": "",
            "alternatePhoneNumbers": "",
            "latitude": 37.793896,
            "longitude": -122.396969
          },{
            "_id": {
              "$oid": "618aaaf0b1776cc3da637f73"
            },
            "area": "Andy",
            "clinic": "Concentra- Potrero Hill",
            "doctor": [
              ""
            ],
            "address": "2 Connecticut St, San Francisco, CA 94107",
            "phoneNumber": "415-621-5055",
            "faxNumber ": "415.621.0611",
            "website": "www.concentra.com",
            "specialty": "",
            "notes": "",
            "email": "",
            "caseCoordinator": "",
            "alternatePhoneNumbers": "",
            "latitude": 37.766014,
            "longitude": -122.398085
          },{
            "_id": {
              "$oid": "618aaaf0b1776cc3da637f74"
            },
            "area": "Andy",
            "clinic": "Concentra- South SF",
            "doctor": [
              ""
            ],
            "address": "192 Beacon St, South San Francisco, CA 94080",
            "phoneNumber": "650-589-6500",
            "faxNumber ": "661.678.4564",
            "website": "www.concentra.com",
            "specialty": "",
            "notes": "",
            "email": "",
            "caseCoordinator": "",
            "alternatePhoneNumbers": "",
            "latitude": 37.639355,
            "longitude": -122.402337
          },{
            "_id": {
              "$oid": "618aaaf0b1776cc3da637f75"
            },
            "area": "Andy",
            "clinic": "Concentra- San Carlos",
            "doctor": [
              ""
            ],
            "address": "125 Shoreway Rd Suite A, San Carlos, CA 94070",
            "phoneNumber": "650-556-9420",
            "faxNumber ": "661.678.2779",
            "website": "www.concentra.com",
            "specialty": "",
            "notes": "",
            "email": "",
            "caseCoordinator": "",
            "alternatePhoneNumbers": "",
            "latitude": 37.500429,
            "longitude": -122.26094
          },{
            "_id": {
              "$oid": "618aaaf0b1776cc3da637f76"
            },
            "area": "Andy",
            "clinic": "Dignity Health Medical Group / St. Francis / St. Mary's",
            "doctor": [
              "Dr. Zacharewicz"
            ],
            "address": "24 Willie Mays Plaza, San Francisco, CA 94107",
            "phoneNumber": "415-947-3096",
            "faxNumber ": "415-947-3099",
            "website": "locations.dignityhealth.org",
            "specialty": "",
            "notes": "",
            "email": "",
            "caseCoordinator": "",
            "alternatePhoneNumbers": "555-555-555 ext 1",
            "latitude": 37.777372,
            "longitude": -122.391169
          },{
            "_id": {
              "$oid": "618aaaf0b1776cc3da637f77"
            },
            "area": "Andy",
            "clinic": "Bay Aera Orthopedic Sports Medicine",
            "doctor": [
              "Dr. Jeffrey Halbrecht"
            ],
            "address": "2100 Webster St #331, San Francisco, CA 94115",
            "phoneNumber": "415-230-3667",
            "faxNumber ": "415-923-5896",
            "website": "www.iasm.com",
            "specialty": "knee ortho",
            "notes": "",
            "email": "",
            "caseCoordinator": "",
            "alternatePhoneNumbers": "",
            "latitude": 37.790526,
            "longitude": -122.43214
          },{
            "_id": {
              "$oid": "618aaaf0b1776cc3da637f78"
            },
            "area": "Andy",
            "clinic": "NEOMA",
            "doctor": [
              "Dr. Jonathan Rutchik"
            ],
            "address": "35 Miller Ave, Mill Valley, CA 94941",
            "phoneNumber": "415-381-3133",
            "faxNumber ": "415-381-3131",
            "website": "www.neoma.com",
            "specialty": "neurologist",
            "notes": "does not do surgery",
            "email": "",
            "caseCoordinator": "",
            "alternatePhoneNumbers": "",
            "latitude": 37.905203,
            "longitude": -122.546905
          },{
            "_id": {
              "$oid": "618aaaf0b1776cc3da637f79"
            },
            "area": "Andy",
            "clinic": "Daly City Podiatry",
            "doctor": [
              "Dr. James W. Stavosky"
            ],
            "address": "1800 Sullivan Ave, Daly City, CA 94015",
            "phoneNumber": "650-756-8194",
            "faxNumber ": "",
            "website": "dalycitypodiatry.com",
            "specialty": "podiatry",
            "notes": "",
            "email": "",
            "caseCoordinator": "",
            "alternatePhoneNumbers": "",
            "latitude": 37.680937,
            "longitude": -122.474707
          },{
            "_id": {
              "$oid": "618aaaf0b1776cc3da637f7a"
            },
            "area": "Andy",
            "clinic": "KOJ- Redwood City",
            "doctor": [
              ""
            ],
            "address": "1100 Veterans Blvd, Redwood City, CA 94063",
            "phoneNumber": "650-299-2000",
            "faxNumber ": "650-299-4789",
            "website": "thrive.kaiserpermanente.org",
            "specialty": "",
            "notes": "",
            "email": "",
            "caseCoordinator": "",
            "alternatePhoneNumbers": "",
            "latitude": 37.680937,
            "longitude": -122.474707
          },{
            "_id": {
              "$oid": "618aaaf0b1776cc3da637f7b"
            },
            "area": "Andy",
            "clinic": "KOJ- SF",
            "doctor": [
              ""
            ],
            "address": "601 Van Ness Ave UNIT 2008, San Francisco, CA 94102",
            "phoneNumber": "415-833-9600",
            "faxNumber ": "415-833-9650",
            "website": "thrive.kaiserpermanente.org",
            "specialty": "",
            "notes": "",
            "email": "",
            "caseCoordinator": "",
            "alternatePhoneNumbers": "555-555-555 ext 1",
            "latitude": 0.00000,
            "longitude": 0.00000
          },{
            "_id": {
              "$oid": "618aaaf0b1776cc3da637f7c"
            },
            "area": "Andy",
            "clinic": "KOJ - South Sf/ Bay Hill",
            "doctor": [
              "Dr. Sandra Lee"
            ],
            "address": "801 Traeger Ave, San Bruno, CA 94066",
            "phoneNumber": "650-742-7110",
            "faxNumber ": "650-742-5961",
            "website": "",
            "specialty": "",
            "notes": "",
            "email": "",
            "caseCoordinator": "",
            "alternatePhoneNumbers": "",
            "latitude": 37.627301,
            "longitude": -122.422906
          },{
            "_id": {
              "$oid": "618aaaf0b1776cc3da637f7d"
            },
            "area": "Sylvia",
            "clinic": "Peninsula Orthopedic Associates",
            "doctor": [
              "Dr. Barber",
              "Dr. Jones",
              "Dr. Khan"
            ],
            "address": "1850 Sullivan Ave #330, Daly City, CA 94015",
            "phoneNumber": "650-756-5630",
            "faxNumber ": "650-756-1964",
            "website": "www.poadocs.com",
            "specialty": "",
            "notes": "",
            "email": "",
            "caseCoordinator": "",
            "alternatePhoneNumbers": "",
            "latitude": 37.680945,
            "longitude": -122.473744
          },{
            "_id": {
              "$oid": "618aaaf0b1776cc3da637f7e"
            },
            "area": "Andy",
            "clinic": "Dignity Health",
            "doctor": [
              "Dr. Steimnitz"
            ],
            "address": "1580 Valencia St #210, San Francisco, CA 94110",
            "phoneNumber": "415-641-8631",
            "faxNumber ": "415-970-9576",
            "website": "www.jps.yourmd.com",
            "specialty": "",
            "notes": "",
            "email": "infor@yourmd.com",
            "caseCoordinator": "",
            "alternatePhoneNumbers": "",
            "latitude": 37.747487,
            "longitude": -122.42063
          },{
            "_id": {
              "$oid": "618aaaf0b1776cc3da637f7f"
            },
            "area": "Andy",
            "clinic": "St. Francis Memorial Hospital",
            "doctor": [
              "Dr. Israel Rosales"
            ],
            "address": "900 Hyde St. San Francisco, CA 94109",
            "phoneNumber": "415-353-6464",
            "faxNumber ": "415-353-6462",
            "website": "",
            "specialty": "psychologist",
            "notes": "",
            "email": "",
            "caseCoordinator": "",
            "alternatePhoneNumbers": "",
            "latitude": 37.747487,
            "longitude": -122.416776
          }]
    }


    render() {

        const AnyReactComponent = ({ text, pinColor }) => <div className="marker" style={{ backgroundColor: pinColor, cursor: 'pointer'}}>{text}</div>;  

        return (
            <div className="Protected">
                <Header isAuthenticated={this.props.isAuthenticated} />
                <div className="container">
                    <h2>Protected Content</h2>
                </div>

                <div style={{ height: '100vh', width: '80%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{key: process.env.REACT_APP_GMAPS_KEY}}
                    defaultCenter={{
                        lat: 37.7749,
                        lng: -122.4194
                      }}
                    defaultZoom={11}
                >

                    {this.state.bunchOfPlaces.map((place) => {

                        let color = "";
                        switch(place.area){
                            case "Andy":
                                color = "red"
                                break;
                            case "Sylvia":
                                color = "yellow"
                                break;
                            default:
                                color = "green"
                        }

                        return (
                            <AnyReactComponent
                            lat={place.latitude}
                            lng={place.longitude}
                            text={place.clinic}
                            pinColor={color}
                            />
                        )
                    })}

                    {/* <AnyReactComponent
                        lat={37.659810}
                        lng={-122.381500}
                        text="Some UPS Hub"
                    />
                    <AnyReactComponent
                        lat={37.819927}
                        lng={-122.478256}
                        text="GG Bridge"
                    /> */}
                </GoogleMapReact>
                </div>

            </div>
        );
    }
}

export default mustBeAuthenticated(Protected);