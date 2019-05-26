import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";
//import '../css/App.css';
//import '../css/style1.css'
import Menu from './trangchu/Menu';
//import Home from './trangchu/Home';
import Footer from './trangchu/Footer';
import DieuHuongURL from '../router/DieuHuongURL';
import '../css/style1.css'
function App() {
  return (
    
    <Router>
      <div className="App">
        <Menu/>
          <DieuHuongURL/>
        <Footer/>
        
      </div>
    </Router>
  );
}

export default App;
