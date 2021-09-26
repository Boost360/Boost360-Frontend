import React, {useState} from "react";
import NavBar from "../NavBar/NavBar";
import AboutUs from "../AboutUs/AboutUs"
import { Route, useRouteMatch, useHistory } from "react-router";
import Partner from "../Partner/Partner"



/**
 * This is the entry point of front site.
 * @Author Zach
 */
const Site = () => {
    let { path, url } = useRouteMatch();
    const history = useHistory();
    const [page, setPage] = useState('Home'); // Do not use inside Route compoennt! @Sarah
    return (
        <div>
            <NavBar page={page} goToPage={(path)=>history.push(path)}></NavBar>
            
            <Route path={path} exact>
                Index Page HERE
            </Route>

            <Route path={`${path}/about`}>
                <AboutUs></AboutUs>
            </Route>

            <Route path={`${path}/partner`}>
                <Partner></Partner>
            </Route>



        </div>


    )

}




export default Site;