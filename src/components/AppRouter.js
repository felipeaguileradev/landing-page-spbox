import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { Navbar } from './Navbar'
import { HomeScreen } from '../pages/HomeScreen'
import { ProjectsScreen } from '../pages/ProjectsScreen'
import Footer from './Footer'

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <div>
        <Switch>
          <Route exact path="/proyectos" component={ProjectsScreen} />
          <Route exact path="/" component={HomeScreen} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default AppRouter
