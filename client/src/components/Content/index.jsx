import React from 'react'
import Home from '../../pages/Home';
import { Switch, Route } from 'react-router-dom'
import PullRequests from '../../pages/PullRequests';

const Content = () => {
    return (
        <>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/pull">
                    <PullRequests />
                </Route>
            </Switch>
        </>
    )
}

export default Content