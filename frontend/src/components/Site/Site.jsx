import React from "react";
import NavBar from "../NavBar/NavBar";
import AboutUs from "../AboutUs/AboutUs"
import { Route, useRouteMatch } from "react-router";
import Partner from "../Partner/Partner"
import Team from "../Team/Team"
import HomePage from "../HomePage/HomePage"



/**
 * This is the entry point of front site.
 * @Author Zach
 */
const Site = () => {
    let { path, url } = useRouteMatch();
    return (
        <div>
            <NavBar></NavBar>
            
            <Route path={path} exact>
                <HomePage></HomePage>
            </Route>

            <Route path={`${path}/about`}>
                <AboutUs></AboutUs>
            </Route>

            <Route path={`${path}/partner`}>
                <Partner></Partner>
            </Route>

            <Route path={`${path}/team`}>
                <Team></Team>
            </Route>



        </div>


    )

}




export default Site;