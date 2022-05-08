import React, { useState } from "react";
import { Route, useRouteMatch, useHistory } from "react-router";
import NavBar from '../NavBar/NavBar';
import Home from "./Home/StudentHome"
import Schedule from "./Schedule/Schedule";
import Module from "./Modules/StudentModules"
import DevelopmentProgram from "./DevelopmentProgram/DevelopmentProgram";
import Profile from "./Profile/Profile";
import VideoLibrary from "./VideoLibrary/VideoLibrary";
import Result from "./Result/Result";
import PageTransition from "../PageTransition/PageTransition";
import Lesson from "./Lesson/Lesson";


/**
 * This is the entry point of Student Home.
 * @Author Zach
 */
const Student = ({ user, setUser }) => {
    let { path, url } = useRouteMatch();
    const history = useHistory();

    return (
        <div>

            <Route path={`${path}/home`} exact>
                    <NavBar page='Student-home' user={user}></NavBar>
                    <Home setUser={setUser}></Home>
            </Route>

            <Route path={`${path}/schedule`} exact>
                <PageTransition>
                    <NavBar page='Schedule' user={user}></NavBar>
                    <Schedule user={user}></Schedule>
                </PageTransition>
            </Route>

            <Route path={`${path}/modules`} exact>
                <PageTransition>
                    <NavBar page='Modules' user={user}></NavBar>
                    <Module></Module>
                </PageTransition>
            </Route>

            <Route path={`${path}/results`} exact>
                <PageTransition>
                    <NavBar page='Results' user={user}></NavBar>
                    <Result user={user}></Result>
                </PageTransition>
            </Route>

            <Route path={`${path}/development-program`} exact>
                <PageTransition>
                    <NavBar page='Development-Program' user={user}></NavBar>
                    <DevelopmentProgram user={user}></DevelopmentProgram>
                </PageTransition>
            </Route>


            <Route path={`${path}/profile`} exact>
                <PageTransition>
                    <NavBar page='Profile' user={user}></NavBar>
                    <Profile user={user} setUser={setUser}></Profile>
                </PageTransition>
            </Route>


            <Route path={`${path}/video-library`} exact>
                <PageTransition>
                    <NavBar page='Video-library' user={user}></NavBar>
                    <VideoLibrary user={user}></VideoLibrary>
                </PageTransition>
            </Route>

            <Route path={`${path}/lesson`} exact>
                <PageTransition>
                    <NavBar page='Lessons' user={user}></NavBar>
                    <Lesson user={user}></Lesson>
                </PageTransition>
            </Route>

        </div>


    )

}




export default Student;