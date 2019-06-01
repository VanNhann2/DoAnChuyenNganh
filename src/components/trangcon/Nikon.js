import React, { Component } from 'react';
import Menu2 from './Menu2';
import PrNikon from './trangsanpham/PrNikon'
class Nikon extends Component {
    render() {
        return (
            <div>
                <Menu2/>
                <PrNikon/>
            </div>
        );
    }
}

export default Nikon;