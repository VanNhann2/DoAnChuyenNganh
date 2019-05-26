import React, { Component } from 'react';
import Menu2 from './Menu2';
import PrDetail from './trangsanpham/PrDetail';

class Detail extends Component {
    render() {
        return (
            <div>
                <Menu2/>
                <PrDetail/>
            </div>
        );
    }
}

export default Detail;