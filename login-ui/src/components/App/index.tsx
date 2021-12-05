import React from 'react';
import { Login } from '@components';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const App = () => {
    const history = useHistory();
    return (
        <div className="d-flex flex-column">
            <Login />
            <Switch>
                <Route path="/"> <Redirect to="/login" /></Route>
                <Route path="/login" component={Login} />
            </Switch>
        </div>
    )
}

export default App;