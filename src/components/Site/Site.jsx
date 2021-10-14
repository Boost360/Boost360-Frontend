import React, {useState} from "react";
import NavBar from "../NavBar/NavBar";
import AboutUs from "../AboutUs/AboutUs"
import { Route, useRouteMatch } from "react-router";
import Partner from "../Partner/Partner"
import Team from "../Team/Team"
import HomePage from "../HomePage/HomePage"
import Blog from "../Blog/Blog"
import ContactUs from "../ContactUs/ContactUs";
import Student from "../Student/Student";
import Scheduler from "../Schedule/Schedule";


/**
 * This is the entry point of front site.
 * @Author Zach
 */
const Site = () => {
    let { path, url } = useRouteMatch();
    return (
        <div>
            <Route path={path} exact>
                <NavBar page='Home'></NavBar> 
                <HomePage></HomePage>
            </Route>

            <Route path={`${path}/about`}>
                <NavBar page='About'></NavBar> 
                <AboutUs></AboutUs>
            </Route>

            <Route path={`${path}/partners`}>
                <NavBar page='Partners'></NavBar> 
                <Partner></Partner>
            </Route>

            <Route path={`${path}/team`}>
                <NavBar page='Team'></NavBar> 
                <Team></Team>
            </Route>

            <Route path={`${path}/blog`}>
                <NavBar page='Blog'></NavBar> 
                <Blog></Blog>
            </Route>

            <Route path={`${path}/contact`}>
                <NavBar page='Contact'></NavBar> 
                <ContactUs></ContactUs>
            </Route>

            <Route path={`${path}/student`}>
                <Student></Student>
            </Route>

        </div>


    )

}




export default Site;