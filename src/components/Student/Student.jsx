import React, {useState} from "react";
import NavBar from "../NavBar/NavBar";
import { Route, useRouteMatch, useHistory } from "react-router";
import Login from "./Login/Login";
import StudentModules from "../StudentModules/StudentModules";


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
            <Route path={path} exact>
                <NavBar page='Student home'></NavBar>
                Student Home Page
            </Route>
            <Route path={`${path}/login`} exact>
                <NavBar page='Student login'></NavBar>
                <Login></Login>
            </Route>

            <Route path={`${path}/modules`}>
                <NavBar page='Modules'></NavBar>
                <StudentModules></StudentModules>
            </Route>

        </div>


    )

}




export default Student;