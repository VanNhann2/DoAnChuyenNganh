import React, { Component } from 'react';
import Menu2 from './Menu2';
import PrSamsung from './trangsanpham/PrSamsung';

class Samsung extends Component {
    render() {
        return (
            <div>
                <Menu2/>
                <PrSamsung/>
            </div>
        );
    }
}

export default Samsung;