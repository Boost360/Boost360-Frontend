import './App.css';
import Team from './components/Team/Team'
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
      
                <Route path="/">
                    <Team />
                </Route>
      
                <Route path="/site">
                    <Site></Site>
                </Route>
      
            </Switch>
        </div>
    );
}

export default App;