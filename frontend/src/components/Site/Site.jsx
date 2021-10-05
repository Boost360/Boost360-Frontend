import React, {useState} from "react";
import NavBar from "../NavBar/NavBar";
import AboutUs from "../AboutUs/AboutUs"
import { Route, useRouteMatch, useHistory } from "react-router";
import Partner from "../Partner/Partner"
import Team from "../Team/Team"
import HomePage from "../HomePage/HomePage"
import ContactUs from "../ContactUs/ContactUs";



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

            <Route path={`${path}/contactus`}>
                <ContactUs></ContactUs>
            </Route>



        </div>


    )

}




export default Site;