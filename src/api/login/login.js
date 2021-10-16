import axios from "axios";


const url = process.env.REACT_APP_API;

/**
 * This method use to call login endpoint
 * @author Zach Wang
 * 
 * @param {emaile,password} loginPayload 
 * @returns response
 */
export async function login(loginPayload) {

    const status = await axios.post(`${url}/login`, loginPayload)
        .then(response => {
            return { data: response.data, status: response.status }
        }).catch(error => {
            return error;
        });;

    return status

}



/**
 * This method use to call self endpoint
 * @author Zach Wang
 * 
 * @param {token} token
 * @returns user
 */

export async function getSelf(token) {
    const headers = {
        'x-access-token': token
    }

    const self = await axios.get(`${url}/login/self`, { 'headers': headers }).then(response => {
        return response.data
    }).catch(error => {
        return error;
    });

    return self


}



