import React from 'react';
import { Switch, Route, useLocation, useHistory } from 'react-router-dom';
import {
    HomePage,
    NotFound404
} from '../../pages';
import {SettingsPage} from '../../pages/settings';
import {HistoryPage} from '../../pages/history';

function Routes() {
    let history = useHistory();
    let location = useLocation();

    const background = history.action === 'PUSH' &&  location.state && location.state.background;

    return (
        <>
            <Switch location={background || location}>
                <Route path="/" exact={true}>
                    <HomePage />
                </Route>
                <Route path="/settings" exact={true}>
                    <SettingsPage />
                </Route>
                <Route path="/history" exact={true}>
                    <HistoryPage />
                </Route>
                <Route>
                    <NotFound404 />
                </Route>
            </Switch>
        </>
    );
}

export default Routes;