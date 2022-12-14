import React from 'react'
import Home from '../../pages/Home';
import { Switch, Route } from 'react-router-dom'
import PullRequests from '../../pages/PullRequests';
import Issues from '../../pages/Issues';
import Marketplace from '../../pages/Marketplace';
import Explore from '../../pages/Explore';
import Topics from '../../pages/Explore/tabs/Topics';
import Trending from '../../pages/Explore/tabs/Trending';
import Collections from '../../pages/Explore/tabs/Collections';
import Events from '../../pages/Explore/tabs/Events';
import Sponsors from '../../pages/Explore/tabs/Sponsors';


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
                <Route exact path="/explore">
                    <Explore />
                </Route>
                <Route exact path="/explore/topics">
                    <Topics />
                </Route>
                <Route exact path="/explore/trending">
                    <Trending />
                </Route>
                <Route exact path="/explore/collections">
                    <Collections />
                </Route>
                <Route exact path="/explore/events">
                    <Events />
                </Route>
                <Route exact path="/explore/sponsors">
                    <Sponsors />
                </Route>
            </Switch>
        </>
    )
}

export default Content