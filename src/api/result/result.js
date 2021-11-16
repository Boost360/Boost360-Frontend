import axios from "axios";


const url = process.env.REACT_APP_API;


export async function resultStudent(id) {
    const headers = {
        'x-access-token': localStorage.getItem('token')
    }

    const status = await axios.get(`${url}/resultStudent/${id}`, { 'headers': headers })
    // check route from backend(routes/api/index), here is /users not /profile
        .then(response => {
            return { data: response.data, status: response.status }
        }).catch(error => {
            return error;
        });;

    return status

}