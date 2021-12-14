import React, { useState } from "react";
import { Route, useRouteMatch, useHistory } from "react-router";
import NavBar from '../NavBar/NavBar';
import Home from "./Home/StudentHome"
import Schedule from "./Schedule/Schedule";
import Module from "./Modules/StudentModules"
import DevelopmentProgram from "./DevelopmentProgram/DevelopmentProgram";
import Profile from "./Profile/Profile";
import VideoLibrary from "./VideoLibrary/VideoLibrary";
import Result from "./Result/Result"


/**
 * This is the entry point of Student Home.
 * @Author Zach
 */
const Student = ({ user,setUser }) => {
    let { path, url } = useRouteMatch();
    const history = useHistory();

    return (
        <div>

            <Route path={`${path}/home`} exact>
                <NavBar page='Student-home' user={user}></NavBar>
                <Home setUser={setUser}></Home>
            </Route>

            <Route path={`${path}/schedule`} exact>
                <NavBar page='Schedule' user={user}></NavBar>
                <Schedule></Schedule>
            </Route>

            <Route path={`${path}/modules`} exact>
                <NavBar page='Modules' user={user}></NavBar>
                <Module></Module>
            </Route>

            <Route path={`${path}/results`} exact>
                <NavBar page='Results' user={user}></NavBar>
                <Result user={user}></Result>
            </Route>

            <Route path={`${path}/development-program`} exact>
                <NavBar page='Development-program' user={user}></NavBar>
                <DevelopmentProgram user={user}></DevelopmentProgram>
            </Route>


            <Route path={`${path}/profile`} exact>
                <NavBar page='Profile' user={user}></NavBar>
                <Profile user={user} setUser={setUser}></Profile>
            </Route>


            <Route path={`${path}/video-library`} exact>
                <NavBar page='Video-library' user={user}></NavBar>
                <VideoLibrary></VideoLibrary>
            </Route>

        </div>


    )

}




export default Student;