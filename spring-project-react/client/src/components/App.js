import React, {useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import store from '../store/store';
import { loadUser } from '../store/actions/auth';
import axios from 'axios';

import PrivateRoute from './Routes/PrivateRoute';
import Home from './Home/Home';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import PageNotFound from './PageNotFound/PageNotFound';

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET, POST';
axios.defaults.headers.common['Access-Control-Allow-Headers'] = '*';

const App = () => {
    useEffect(() => {
        store.dispatch(loadUser());
    }, []);

    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <PrivateRoute exact path='/login' component={Login} />
                    <PrivateRoute exact path='/signup' component={SignUp} />
                    <Route path='*' component={PageNotFound}/>
                </Switch>
            </Router>
        </div>
    );
};

export default App;
