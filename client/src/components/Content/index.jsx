import React from 'react'
import Home from '../../pages/Home';
import { Switch, Route } from 'react-router-dom'
import PullRequests from '../../pages/PullRequests';
import Issues from '../../pages/Issues';
import Marketplace from '../../pages/Marketplace';

const Content = () => {
    return (
        <>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/pulls">
                    <PullRequests />
                </Route>
                <Route path="/issues">
                    <Issues />
                </Route>
                <Route path="/marketplace">
                    <Marketplace />
                </Route>
            </Switch>
        </>
    )
}

export default Content