import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import Routes from './routers/routes';
import NoFound from './components/nofound/noFound';

function App() {
  return (
    <Provider className="App" store={store}>
        <Router>
            <Switch>
                {
                    Routes.map((route, key) => {
                        if (route.exact) {
                            return <Route exact path={route.path} component={route.component} key={key} />
                        }
                        // else if(route.path == '/loginContorl'){
                        //     return <Route path={`${route.path}/:id?`} component={route.component} key={key}  />
                        // }
                        else {
                            return <Route path={route.path} component={route.component} key={key} />
                        }
                    })
                }
                <Route component={NoFound} />
            </Switch>
        </Router>
    </Provider>
  );
}

export default App;
