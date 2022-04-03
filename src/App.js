import './App.css';
import Site from './components/Site/Site';
import LandingPage from './components/LandingPage/LandingPage';
import React from 'react'
import { getSelf } from './api/login/login'


import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";




function App() {

    const [user, setUser] = React.useState(null);
    const token = localStorage.getItem("token");

    React.useEffect(async () => {
        if (token) {
            const self = await getSelf(token)
            if (self._id) {
                setUser(self)
            }
        }


    }, []);

    return (
        <div className="App" >
            <Switch>

                <Route path="/" exact>
                    <LandingPage user={user} ></LandingPage>
                </Route>

                <Site user={user} setUser={setUser}></Site>



            </Switch>


        </div>
    );
}

export default App;