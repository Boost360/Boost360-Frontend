import React, {useState} from "react";
import NavBar from "../NavBar/NavBar";
import AboutUs from "../AboutUs/AboutUs"
import { Route, useRouteMatch, useHistory, useLocation } from "react-router";
import Partner from "../Partner/Partner"
import Team from "../Team/Team"
import HomePage from "../HomePage/HomePage"
import Blog from "../Blog/Blog"
import ContactUs from "../ContactUs/ContactUs";
import Student from "../Student/Student";
import StudentModules from "../StudentModules/StudentModules";


/**
 * This is the entry point of front site.
 * @Author Zach
 */
const Site = () => {
    let { path, url } = useRouteMatch();
    const history = useHistory();
    return (
        <div>
            <NavBar path={useLocation().pathname} goToPage={(path)=>history.push(path)}></NavBar> 

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
            <Route path={`${path}/blog`}>
                <Blog></Blog>
            </Route>

            <Route path={`${path}/contact`}>
                <ContactUs></ContactUs>
            </Route>

            <Route path={`${path}/student`}>
                <Student></Student>
            </Route>

            <Route path={`${path}/student/modules`}>
                <StudentModules></StudentModules>
            </Route>

        </div>


    )

}




export default Site;