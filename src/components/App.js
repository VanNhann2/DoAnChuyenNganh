
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
//import firebaseConnect from '../connectdb/ConnectFirebase.js'
//import firebase from 'firebase'
//import '../css/App.css';
import Menu from './trangchu/Menu';
import Footer from './trangchu/Footer';
import DieuHuongURL from '../router/DieuHuongURL';
import '../css/style1.css'
import firebase from '../connectdb/firebase'

export default function App() {

  const [firebaseInitialized, setFirebaseInitialized] = useState(false)

  useEffect(() => {
    firebase.isInitialized().then(val => {
      setFirebaseInitialized(val)
    })
  })

  return firebaseInitialized !== false ? (
    <Router>
      <Menu />
      <DieuHuongURL />
      <Footer />
    </Router>
  ) : <div>Load Load Load</div>

}

;

