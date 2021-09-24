import './App.css';
import Team from './components/Team/Team'
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
                    <Team />
                </Route>
            </Switch>

        </div>
    );
}

export default App;