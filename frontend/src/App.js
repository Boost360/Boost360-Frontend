import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import './Icon.css';
import Site from './components/Site/Site';


import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


function App() {
    return (
        <div className="App" >
            <Switch>
                <Route path="/" exact>
                    <LandingPage />
                </Route>
                <Route path="/site">
                    <Site></Site>


                </Route>
            </Switch>
        </div>
    );
}

export default App;