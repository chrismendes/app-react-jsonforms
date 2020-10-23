/** @jsx jsx */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import FormFactory from './formviewer/factories/FormFactory';
import URLHelper from './formviewer/helpers/url';
import userData from './formviewer/services/userData';

import AppBar from './formviewer/components/AppBar';
import SideMenu from './formviewer/components/SideMenu';
import ClientAppContainer from './formviewer/components/ClientAppContainer';
import MaterialToolbar from '@material-ui/core/Toolbar';
import { css, jsx } from '@emotion/core';

function App() {

  const clientApps = userData.apps;
  const routePrefix = '/app/';
  const appLinks = clientApps.map((app) => {
    return {
      text: app.name,
      url: routePrefix + URLHelper.stringToURL(app.name)
    }
  });

  return (
    <Router>
      <div css={css`display: flex;`}>

        <AppBar title="JSON Forms" />
        <SideMenu links={appLinks} />

        <ClientAppContainer>
          <MaterialToolbar />

          <Switch>
            <Route
              key="0"
              path="/"
              exact
            >
              <h1 css={css`margin-top: 0;`}>
                Select Application
              </h1>
              <p>Select a JSON-defined application from the sidebar.</p>
            </Route>

            {clientApps.map((app, i) => (
              <Route
                key={i+1}
                path={routePrefix + URLHelper.stringToURL(app.name)}
                exact
              >
                <FormFactory config={app} />
              </Route>
            ))}
          </Switch>

        </ClientAppContainer>
      </div>
    </Router>
  );
}

export default App;