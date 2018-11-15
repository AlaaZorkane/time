/* Libraries */
import React, { Component } from 'react'
import { BrowserRouter as Router, Route} from "react-router-dom"

/* Components */
// import AppContainer from './components/AppContainer'
// import Journey from './components/Journey'
import Main from './components/Main'
import Header from './components/Header'
import MusicControl from './components/MusicControl'
import Footer from './components/Footer'


/* CSS & Assets */
import './css/general/App.css'

/* App - Handling routes & paths and loading into the dom */
class App extends Component {
  render() {
    return (
      <div className="Container">
        <Header />
        <Main />
        <MusicControl />
        <Footer />
      </div>
    )
  }
}

export default App
