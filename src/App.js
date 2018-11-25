/* Libraries */
import React, { Component } from 'react'
import { BrowserRouter, Route, Switch} from "react-router-dom"

/* Components */
import Main from './components/layout/Main'
import Header from './components/layout/Header'
import MusicControl from './components/ui/MusicControl'
import About from './components/ui/About'


import Journey from './components/journey/Journey'
import Final from './components/journey/Final'
import Admin from './components/Admin'


/* Static js */

/* CSS & Assets */
import './css/general/App.css'

/* App - Handling routes & paths and loading into the dom */
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Switch>
            <Route exact path='/'component={Main}/>
            <Route path='/journey/:id'component={Journey}/>
            <Route path='/end'component={Final}/>
            <Route path='/admin'component={Admin}/>
          </Switch>
          <MusicControl />
          <About />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
