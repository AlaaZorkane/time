/* Libraries */
import React, { Component } from 'react'
import { BrowserRouter as Router, Route} from "react-router-dom"

/* Components */
// import AppContainer from './components/AppContainer'
// import Journey from './components/Journey'
import Main from './components/body/Main'
import Header from './components/body/Header'
import MusicControl from './components/ui/MusicControl'
import Footer from './components/body/Footer'


/* CSS & Assets */
import './css/general/App.css'

/* App - Handling routes & paths and loading into the dom */
class App extends Component {
  render() {
    return (
      <div className="container">
        <Main />
        <Header />
        <MusicControl />
        <Footer />
      </div>
    )
  }
}

export default App
