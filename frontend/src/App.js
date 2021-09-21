import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import './Icon.css';
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
                    <AboutUs />
                </Route>
            </Switch>

        </div>
    );
}

export default App;