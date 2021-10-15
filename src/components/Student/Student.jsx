import React, {useState} from "react";
import { Route, useRouteMatch, useHistory } from "react-router";
import Login from "./Login/Login";
import Home from "./Home/StudentHome"
import Schedule from "./Schedule/Schedule";
import Module from "./Modules/StudentModules"
import DevelopmentProgram from "./DevelopmentProgram/DevelopmentProgram";
import Profile from "./Profile/Profile";

/**
 * This is the entry point of Student Home.
 * @Author Zach
 */
const Student = () => {
    let { path, url } = useRouteMatch();
    const history = useHistory();
    
    return (
        <div>
            <Route path={`${path}/home`} exact>
                <Home></Home> 
            </Route>

            <Route path={`${path}/login`} exact>
                <Login></Login>
            </Route>

            <Route path={`${path}/schedule`} exact>
                <Schedule></Schedule>
            </Route>

            <Route path={`${path}/modules`} exact>
                <Module></Module>
            </Route>

            <Route path={`${path}/result`} exact>
                <Module></Module>
            </Route>
            
            <Route path={`${path}/development-program`} exact>
                <DevelopmentProgram></DevelopmentProgram>
            </Route>

            <Route path={`${path}/profile`} exact>
                <Profile></Profile>
            </Route>

        </div>


    )

}




export default Student;