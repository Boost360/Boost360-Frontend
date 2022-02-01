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
import Scheduler from "../Student/Schedule/Schedule";
import StudentModules from "../Student/Modules/StudentModules";
import Membership from "../Services/Membership/Membership";
import JuniorGolf from "../Services/JuniorGolf/JuniorGolf";
import RemoteLearning from "../Services/RemoteLearning/RemoteLearning";
import Screening from "../Services/Screening/Screening";
import Coaching from "../Services/Coaching/Coaching";
import Login from "../Student/Login/Login"
import PageTransition from "../PageTransition/PageTransition"

/**
 * This is the entry point of front site.
 * @Author Zach
 */
const Site = ({ user,setUser }) => {
    let { path, url } = useRouteMatch();
    return (
        <div>
            <Route path='/home' exact>
                <NavBar page='Home' user={user}></NavBar>
                <HomePage></HomePage>
            </Route>

            <Route path='/about'>
                <PageTransition>
                    <NavBar page='About' user={user}></NavBar>
                    <AboutUs></AboutUs>
                </PageTransition>
            </Route>

            <Route path='/partners'>
                <PageTransition>
                    <NavBar page='Partners' user={user}></NavBar>
                    <Partner></Partner>
                </PageTransition>
            </Route>

            <Route path='/team'>
                <PageTransition>
                    <NavBar page='Team' user={user}></NavBar>
                    <Team></Team>
                </PageTransition>
            </Route>

            <Route path='/membership'>
                <PageTransition>
                    <NavBar page='Membership' user={user}></NavBar>
                    <Membership></Membership>
                </PageTransition>
            </Route>

            <Route path='/junior-golf'>
                <PageTransition>
                    <NavBar page='Junior-golf' user={user}></NavBar>
                    <JuniorGolf></JuniorGolf>
                </PageTransition>
            </Route>

            <Route path='/remote-learning'>
                <PageTransition>
                    <NavBar page='Remote-learning' user={user}></NavBar>
                    <RemoteLearning></RemoteLearning>
                </PageTransition>
            </Route>

            <Route path='/screening'>
                <PageTransition>
                    <NavBar page='Screening' user={user}></NavBar>
                    <Screening></Screening>
                </PageTransition>
            </Route>

            <Route path='/coaching'>
                <PageTransition>
                    <NavBar page='Coaching' user={user}></NavBar>
                    <Coaching></Coaching>
                </PageTransition>
            </Route>

            <Route path='/blog'>
                <PageTransition>
                    <Blog user={user}></Blog>
                </PageTransition>
            </Route>

            <Route path='/contact'>
                <PageTransition>
                    <NavBar page='Contact' user={user}></NavBar>
                    <ContactUs></ContactUs>
                </PageTransition>
            </Route>

            <Route path='/student'>
                {user ? <Student user={user} setUser={setUser}></Student> : <Redirect to="/login" />}
            </Route>

            <Route path='/login' exact>
                {user ? <Redirect to="/student/home" /> :
                    <div>
                        <PageTransition>
                            <NavBar page='Login' user={user}></NavBar>
                            <Login setUser={setUser}></Login>
                        </PageTransition>
                    </div>}

            </Route>
        </div>


    )

}




export default Site;