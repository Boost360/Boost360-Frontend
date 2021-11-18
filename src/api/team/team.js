import axios from "axios";


const url = process.env.REACT_APP_API;


export async function retrieveAllTeams() {
    // since we don't need to login to check team, no need header like login
    const status = await axios.get(`${url}/team`)
    // check route from backend(routes/api/index), here is /users not /profile
        .then(response => {
            return response.data
        }).catch(error => {
            return error;
        });

    return status

}