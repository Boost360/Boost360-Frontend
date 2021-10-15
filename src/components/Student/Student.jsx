import React, {useState} from "react";
import { Route, useRouteMatch, useHistory } from "react-router";
import NavBar from '../NavBar/NavBar';
import Login from "./Login/Login";
import Home from "./Home/StudentHome"
import Schedule from "./Schedule/Schedule";
import Module from "./Modules/StudentModules"
import DevelopmentProgram from "./DevelopmentProgram/DevelopmentProgram";

/**
 * This is the entry point of Student Home.
 * @Author Zach
 */
const Student = () => {
    let { path, url } = useRouteMatch();
    const history = useHistory();
    console.log(path)

    return (
        <div>
            <Route path={`${path}/home`} exact>
                <NavBar page='Student home'></NavBar>
                <Home></Home> 
            </Route>

            <Route path={`${path}/login`} exact>
                <NavBar page='Student login'></NavBar>
                <Login></Login>
            </Route>

            <Route path={`${path}/schedule`} exact>
                <NavBar page='Schedule'></NavBar>
                <Schedule></Schedule>
            </Route>

            <Route path={`${path}/modules`} exact>
                <NavBar page='Modules'></NavBar>
                <Module></Module>
            </Route>

            <Route path={`${path}/results`} exact>
                <NavBar page='Results'></NavBar>
                <Module></Module>
            </Route>
            
            <Route path={`${path}/development-program`} exact>
                <NavBar page='Development program'></NavBar>
                <DevelopmentProgram></DevelopmentProgram>
            </Route>

        </div>


    )

}




export default Student;