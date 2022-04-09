import axios from "axios";

const url = process.env.REACT_APP_API;

export async function lesson(id) {
    const headers = {
        'x-access-token': localStorage.getItem('token')
    }

    const status = await axios.get(`${url}/lesson/${id}`, { 'headers': headers })
        // check route from backend(routes/api/index), here is /users not /profile
        .then(response => {
            return { data: response.data, status: response.status }
        }).catch(error => {
            return error;
        });;

    return status
}

export async function student(id) {
    const headers = {
        'x-access-token': localStorage.getItem('token')
    }

    const status = await axios.get(`${url}/users/${id}`, { 'headers': headers })
        // check route from backend(routes/api/index), here is /users not /profile
        .then(response => {
            return { data: response.data, status: response.status }
        }).catch(error => {
            return error;
        });;

    return status

}