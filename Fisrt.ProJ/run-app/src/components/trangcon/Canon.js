import React, { Component } from 'react';
import Menu2 from './Menu2'
import PrCanon from './trangsanpham/PrCanon'
class Canon extends Component {
    render() {
        return (
            <div>
                <Menu2/>
                <PrCanon/>     
            </div>
        );
    }
}

export default Canon;