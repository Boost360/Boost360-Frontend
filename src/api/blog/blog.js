import axios from "axios";


const url = process.env.REACT_APP_API;


export async function getBlog() {
    // since we don't need to login to check blog, no need header like login
    const status = await axios.get(`${url}/blog`)
    // check route from backend(routes/api/index), here is /users not /profile
        .then(response => {
            return response.data
        }).catch(error => {
            return error;
        });

    return status

}


export async function getTheBlog(id) {
    const status = await axios.get(`${url}/blog/${id}`)
        .then(response => {
            return response.data
        }).catch(error => {
            return error;
        });

    return status

}