import axios from "axios";


const url = process.env.REACT_APP_API;


export async function getBlog() {
    const status = await axios.get(`${url}/blog`)
    // check route from backend(routes/api/index), here is /users not /profile
        .then(response => {
            return response.data
        }).catch(error => {
            return error;
        });

    return status

}