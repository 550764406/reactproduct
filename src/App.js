import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import store from './store/index';
import Routes from './routers/routes';
import NoFound from './components/nofound/noFound';
import zhCN from 'antd/es/locale/zh_CN';

function App() {
  return (
    <Provider className="App" store={store}>
        <Router>
            <ConfigProvider locale={zhCN}>
            <Switch>
                    {
                        Routes.map((route, key) => {
                            if (route.exact) {
                                return <Route exact path={route.path} component={route.component} key={key} />
                            }
                            else if(route.path.indexOf('detail')>0){
                                return <Route path={`${route.path}/:id?`} component={route.component} key={key}  />
                            }
                            else {
                                return <Route path={route.path} component={route.component} key={key} />
                            }
                        })
                    }
                    <Route component={NoFound} />
            </Switch>
            </ConfigProvider>
        </Router>
    </Provider>
  );
}

export default App;
