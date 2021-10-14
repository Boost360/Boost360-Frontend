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
import Scheduler from "../Student/Schedule/Schedule";
import StudentModules from "../Student/Modules/StudentModules";

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

            <Route path='/index' exact>
                <HomePage></HomePage>
            </Route>

            <Route path='/about'>
                <AboutUs></AboutUs>
            </Route>

            <Route path='/partner'>
                <Partner></Partner>
            </Route>

            <Route path='/team'>
                <Team></Team>
            </Route>
            <Route path='/blog'>
                <Blog></Blog>
            </Route>

            <Route path='/contact'>
                <ContactUs></ContactUs>
            </Route>

            <Route path='/student'>
                <Student></Student>
            </Route>
{/* 
            <Route path={`${path}/student/modules`}>
                <StudentModules></StudentModules>
            </Route> */}


        </div>


    )

}




export default Site;