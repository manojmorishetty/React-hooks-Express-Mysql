import React from 'react'
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom'
import AthleteRoutes from 'containers/Athlete/Routes'

const Router = () => {

    return (
        <React.Fragment>
            <BrowserRouter>
            <Switch>
                <Redirect exact from="/" to="/athlete" />
                <Route path="/athlete" component={AthleteRoutes} />
            </Switch>
            </BrowserRouter>
        </React.Fragment >
    )
}
export default Router
