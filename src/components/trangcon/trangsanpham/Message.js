import React, { Component } from 'react';

class Message extends Component {
    render() {
        var { message } = this.props;
        return (
            <div>
                <h3 className="btn btn-success">
                    {message}
                </h3>
            </div>
        );
    }
}

export default Message;