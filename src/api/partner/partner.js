import axios from "axios";


const url = process.env.REACT_APP_API;


export async function getPartners() {
    // since we don't need to login to check partner, no need header like login
    const status = await axios.get(`${url}/partner`)
    // check route from backend(routes/api/index), here is /users not /profile
        .then(response => {
            return response.data
        }).catch(error => {
            return error;
        });

    return status

}