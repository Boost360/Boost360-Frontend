import React, {useState} from "react";
import NavBar from "../NavBar/NavBar";
import AboutUs from "../AboutUs/AboutUs"
import { Route, useRouteMatch, useHistory} from "react-router";
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
    return (
        <div>
            <Route path='/index' exact>
                <NavBar page='Home'></NavBar>
                <HomePage></HomePage>
            </Route>

            <Route path='/about'>
                <NavBar page='About'></NavBar>
                <AboutUs></AboutUs>
            </Route>

            <Route path='/partner'>
                <NavBar page='Partners'></NavBar>
                <Partner></Partner>
            </Route>

            <Route path='/team'>
                <NavBar page='Team'></NavBar>
                <Team></Team>
            </Route>

            <Route path='/membership'>
                <NavBar page='Membership'></NavBar>
                TBD
            </Route>

            <Route path='/junior-golf'>
                <NavBar page='Junior golf'></NavBar>
                TBD
            </Route>

            <Route path='/blog'>
                <NavBar page='Blog'></NavBar>
                <Blog></Blog>
            </Route>

            <Route path='/contact'>
                <NavBar page='Contact'></NavBar>
                <ContactUs></ContactUs>
            </Route>

            <Route path='/student'>
                <Student></Student>
            </Route>
        </div>


    )

}




export default Site;