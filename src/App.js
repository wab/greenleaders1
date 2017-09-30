import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Header from './components/Header';

import routes from './routes';

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
const RouteWithSubRoutes = (route) => (
  <Route path={route.path} excat={route.excat} render={props => (
    // pass the sub-routes down to keep nesting
    <route.component {...props} routes={route.routes}/>
  )}/>
)

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <main className="mainwrapper">
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
      </main>
    </div>
  </Router>
)

export default App