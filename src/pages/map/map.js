import React, { Component } from "react";
import mustBeAuthenticated from "../../redux/hoc/mustBeAuthenticated";
import Header from "../../components/header/Header";

class Map extends Component {

    render() {
        return (
            <div className="Map">
                <Header isAuthenticated={this.props.isAuthenticated} />
                <div className="container">
                    <h2>Map Page</h2>
                </div>
            </div>
        );
    }
}

export default mustBeAuthenticated(Map);