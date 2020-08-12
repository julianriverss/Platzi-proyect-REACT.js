import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './Layout';
import Badges from '../pages/Badges';
import BadgesNew from '../pages/BadgeNew';
import BadgeDetailsContainer from  '../pages/BadgeDetailsContainer';
import BadgeEdit from '../pages/BadgeEdit';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';



function App() {
    return (
        <BrowserRouter>
        <Layout>
        <Switch>
        <Route exact path="/badges" component={Badges} />
        <Route exact path="/badges/new" component={BadgesNew} />
        <Route exact path="/badges/:badgeId" component={BadgeDetailsContainer} />
        <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
        </Switch>
        </Layout>
        </BrowserRouter>
    )
}

export  default App;