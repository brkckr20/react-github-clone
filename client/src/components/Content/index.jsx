import React from 'react'
import Home from '../../pages/Home';
import { Switch, Route } from 'react-router-dom'
import PullRequests from '../../pages/PullRequests';
import Issues from '../../pages/Issues';
import Marketplace from '../../pages/Marketplace';
import Explore from '../../pages/Explore';

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
                <Route path="/explore">
                    <Explore />
                </Route>
            </Switch>
        </>
    )
}

export default Content