import './App.css';
import './Icon.css';
import Site from './components/Site/Site';
import LandingPage from './components/LandingPage/LandingPage';


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
                    <LandingPage></LandingPage>
                </Route>
      
                <Route path="/site">
                    <Site></Site>
                </Route>
      
            </Switch>
        </div>
    );
}

export default App;