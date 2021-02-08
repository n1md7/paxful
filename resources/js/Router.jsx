import React from 'react';
import {BrowserRouter, Link, Route, Switch, Redirect} from 'react-router-dom';
import Sell from './views/sell';
import Buy from './views/buy';
import Wallet from './views/wallet';
import Support from './views/support';
import Account from './views/account';
import NotFound from './views/not-found/NotFound'

const Main = props => (
    <Switch>
        <Route exact path='/'>
            <Redirect to="/sell"/>
        </Route>
        <Route path='/sell' component={Sell}/>
        <Route path='/buy' component={Buy}/>
        <Route path='/support' component={Support}/>
        <Route path='/account' component={Account}/>
        <Route path='/wallet' component={Wallet}/>
        <Route component={NotFound}/>
    </Switch>
);
export default Main;
