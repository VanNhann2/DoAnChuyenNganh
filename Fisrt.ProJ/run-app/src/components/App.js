import React from 'react';
import '../css/App.css';
//import '../css/style1.css'
import Menu from './trangchu/Menu';
import Footer from './trangchu/Footer'
import Register from './trangdangki/Register'
function App() {
  return (
    <div className="App">
      <Menu/>
      {/* <Home/> */}
      <Register/>
      <Footer/>
    </div>
  );
}

export default App;
