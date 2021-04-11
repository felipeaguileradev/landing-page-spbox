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

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <Switch>
          <Route exact path="/proyectos" component={ProjectsScreen} />
          <Route exact path="/" component={HomeScreen} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter
