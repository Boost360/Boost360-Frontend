import React, {useState} from "react";
import { Route, useRouteMatch, useHistory } from "react-router";
import Login from "./Login/Login";


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
                Student Home Page
            </Route>
            <Route path={`${path}/login`} exact>
                <Login></Login>
            </Route>

        </div>


    )

}




export default Student;