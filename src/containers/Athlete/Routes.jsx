import React from 'react'
import { Route } from 'react-router-dom'
import { Switch, useRouteMatch, Redirect } from 'react-router-dom'
import Layout from 'Layout/Navbar.jsx'
import UploadAthlete from '../Athlete/UploadAthlete'
import AthleteList from '../Athlete/AthleteList'
import AthleteView from '../Athlete/AthleteView'

export default () => {
  let match = useRouteMatch()
  return (
    <div>
      <Layout />
      <div className="container__wrap">
        <Switch>
        <Route path={`${match.path}/athletelist/:athleteId`} component={AthleteView} />
          <Route path={`${match.path}/uploadathlete`} component={UploadAthlete} />
          <Route path={`${match.path}/athletelist`} component={AthleteList} />
          <Redirect exact from={`${match.path}`} to={`${match.path}/uploadathlete`} />
        </Switch>
      </div>
    </div>
  )
}
