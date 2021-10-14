import './App.css';
import './Icon.css';
import Site from './components/Site/Site';
import LandingPage from './components/LandingPage/LandingPage';
import Scheduler from './components/Schedule/Schedule';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import DevelopmentProgram from './components/DevelopmentProgram/DevelopmentProgram'



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

                <Route path='/test'>
                <Scheduler></Scheduler>
            </Route>
      
            </Switch>

            <DevelopmentProgram />

        </div>
    );
}

export default App;