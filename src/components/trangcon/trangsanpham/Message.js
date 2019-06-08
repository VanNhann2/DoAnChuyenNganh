import React, { Component } from 'react';
import { BrowserRouter as Router, withRouter, Link } from "react-router-dom";  //Route,
class Message extends Component {
    render() {
        var { message } = this.props;
        return (
            <div>
                <h3 className="btn btn-success" >
                  {message}
                   
                </h3>
            </div>
        );
    }
}

export default Message;