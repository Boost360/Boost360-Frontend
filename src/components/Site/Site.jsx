import React from "react";
import NavBar from "../NavBar/NavBar";
import AboutUs from "../AboutUs/AboutUs"
import { Route, useRouteMatch, Redirect } from "react-router";
import Partner from "../Partner/Partner"
import Team from "../Team/Team"
import HomePage from "../HomePage/HomePage"
import Blog from "../Blog/Blog"
import ContactUs from "../ContactUs/ContactUs";
import Student from "../Student/Student";
import Login from "../Student/Login/Login"


/**
 * This is the entry point of front site.
 * @Author Zach
 */
const Site = ({ user,setUser }) => {
    let { path, url } = useRouteMatch();
    return (
        <div>
            <Route path='/index' exact>
                <NavBar page='Home' user={user}></NavBar>
                <HomePage></HomePage>
            </Route>

            <Route path='/about'>
                <NavBar page='About' user={user}></NavBar>
                <AboutUs></AboutUs>
            </Route>

            <Route path='/partners'>
                <NavBar page='Partners' user={user}></NavBar>
                <Partner></Partner>
            </Route>

            <Route path='/team'>
                <NavBar page='Team' user={user}></NavBar>
                <Team></Team>
            </Route>

            <Route path='/membership'>
                <NavBar page='Membership' user={user}></NavBar>
                TBD
            </Route>

            <Route path='/junior-golf'>
                <NavBar page='Junior golf' user={user}></NavBar>
                TBD
            </Route>

            <Route path='/blog'>
                <NavBar page='Blog' user={user}></NavBar>
                <Blog></Blog>
            </Route>

            <Route path='/contact'>
                <NavBar page='Contact' user={user}></NavBar>
                <ContactUs></ContactUs>
            </Route>

            <Route path='/student'>
                {user ? <Student user={user}></Student> : <Redirect to="/login" />}
            </Route>

            <Route path='/login' exact>
                {user ? <Redirect to="/student/home" /> :
                    <div>
                        <NavBar page='Student login' user={user}></NavBar>
                        <Login setUser={setUser}></Login>
                    </div>}

            </Route>
        </div>


    )

}




export default Site;