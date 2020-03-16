import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Home/Home';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import PageNotFound from './PageNotFound/PageNotFound';

const App = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/signup' component={SignUp} />
                    <Route path='*' component={PageNotFound}/>
                </Switch>
            </Router>
        </div>
    );
};

export default App;
