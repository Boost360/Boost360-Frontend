import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Partner from "./components/Partner/Partner";
import './Icon.css';
import NavBar from './components/NavBar/NavBar';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


function App() {
    return (
        <div className="App" >
            <Switch>
                <Route path="/">
                    <Partner />
                </Route>
            </Switch>
        </div>
    );
}

export default App;