import './App.css';
import './Icon.css';
import Blog from './components/Blog/Blog';


import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


function App() {
    return (
        <div className="App" >
            <Blog/>
        </div>
    );
}

export default App;