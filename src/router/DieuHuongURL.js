import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from '../components/trangchu/Home';
import Canon from '../components/trangcon/Canon';
import Checkout from '../components/trangcon/Checkout';
import Detail from '../components/trangcon/Detail';
import Nikon from '../components/trangcon/Nikon';
import Sony from '../components/trangcon/Sony';
import Samsung from '../components/trangcon/Samsung';
import Login from "../components/trangcon/Login";
import Register from "../components/trangcon/Register";
import '../connectdb/firebase'

class DieuHuongURL extends Component {
    render() {
        return (
            
                <div>
                    <Route exact path="/" component={Login} />
                    <Route path='/home' component = {Home}/>
                    <Route path="/canon" component={Canon}/>
                    <Route path="/nikon" component={Nikon}/>
                    <Route path="/samsung" component={Samsung}/>
                    <Route path="/sony" component={Sony} />
                    <Route path="/detail" component={Detail} />
                    <Route path="/checkout" component={Checkout}/>
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />

                </div>
            
        );
    }
}

export default DieuHuongURL;