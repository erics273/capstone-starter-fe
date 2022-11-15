
import React, { Component } from "react";
import Header from "../../components/header/Header";
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';



class Analytics extends Component {

    state = {
        usermedia:[] 
    }

    //perfect opportunity to reachout to an api and get data because
    //this runs when the component shows
    componentDidMount(){
        console.log("this just ran")
        this.getTrendingSearches()
    }

    getTrendingSearches = () => {

        console.log("calling getTrendingSearches")
        //get API url from the environment variables http://localhost:2727
        const apiURL = process.env.REACT_APP_API_URL
        
        fetch(`${apiURL}/api/media/getAllMedia`)
            .then((results) => results.json())
            .then((mediaFromTheAPI) => {
                console.log("mediafromapi " + mediaFromTheAPI)
                this.setState(
                    {
                        usermedia: mediaFromTheAPI
                    }
                )
            })
            .catch((error) => {
                console.log(error)
            });
    }

render() {
    console.log("inside render ")
    console.log(this.state.usermedia.map)
    console.log("inside render - printed usermedia.map ")

    return (
        <div className="Analytics">

        <Header/>

    <h3 className="text-center" >Trending Searches - JSON.stringify</h3>
       {JSON.stringify(this.state.usermedia)}

       <h3 className="text-center" >Trending Searches - ListGroup Numbered</h3>
       <ListGroup as="ul"> 
       <ListGroup.Item as="li" active list-group-numbered>
            {this.state.usermedia.map((usermedia, idx) => {
                       return <li key={idx}>{usermedia.email} - {usermedia.mediaName}</li>
              })
             }
        </ListGroup.Item>
        </ListGroup>

        <h3 className="text-center" >Trending Searches - Table</h3>
      
        <Table hover striped>
        <thead>
        <tr>
        <th>User</th>
        <th>Media Name</th>
        <th>Media Rating</th>
        </tr>
        </thead>
         <tbody>
         {this.state.usermedia.map((usermedia, idx) =>{
    return(
    <tr>
      <td>{usermedia.email}</td>
      <td>{usermedia.mediaName}</td>
      <td>{usermedia.mediaRating}</td>
    </tr>
    )
    }
    )}
         </tbody>
        </Table>
        </div>
    )
}

}


export default Analytics