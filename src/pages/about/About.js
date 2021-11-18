import React, { Component } from "react";
import Header from "../../components/header/Header";
import mustBeAuthenticated from "../../redux/hoc/mustBeAuthenticated";



class About extends Component {

  render() {
  return (
    <div className="about" id="about">
        <Header isAuthenticated={this.props.isAuthenticated} />
        <div className="container-fluid">
        <div id="title">Welcome to the UPS Map Application! </div><br/>

        This map is intended for internal company usage only. <br/><br/>


        This map was designed for adjusters on the dedicated UPS Northern California account for Liberty Mutual. <br/><br/>

        <div id="border">
        <div id="title">Legend:</div> <br/>

        The map is comprised of 2 components: clinics and UPS hubs.<br/><br/>


        They are color coded by the areas in which our Risk Managers are assigned to. <br/><br/>
        
        
       


       <div id="blue"> Andy (SF area) = Blue<br/> </div>
       <div id="red">Barbara (Sacramento/ Nor Cal area) = Red <br/> </div>
       <div id="yellow">Edgar (San Jose / central CA) = Yellow <br/> </div>
       <div id="green">Sylvia (Bay area) = Green <br/><br/> </div>
       </div>
       <br/>
       <div id="title"> Instructions: </div><br/>

        Please make an account, this map is password protected and should not be shared outside of our organization. <br/><br/>

        If you are searching for anything specifically, type in a key word into the search box.<br/><br/>

        Example:<br/><br/>
        1. If you are looking for a hernia specialist, type in "hernia" into the serach box, any clinics where a hernia specialist is noted will return.<br/><br/>
        2. If you want to see what clinics are in Barbara's area, type in "Barbara".<br/><br/>

        The map will update based on the search criteria you imput.<br/><br/>

        You also have the option to update the information we have stored in our database. For example, if you have a new fax-number you'd like to enter in for concentra-Oakland, 
        just click on view/update, enter it in, and click submit.<br/><br/>

        Enjoy! :) Data is beautiful. <br/><br/>


       
        </div>

        <img src="https://nypost.com/wp-content/uploads/sites/2/2021/08/david-hoffman-limu.jpg?quality=80&strip=all" height="400"   alt="limu"></img>
   
    </div>
  );
}
}

export default mustBeAuthenticated(About);
