import axios from "axios";


const url = process.env.REACT_APP_API;

export async function sendContactEmail(data) {

    const status = await axios.post(`${url}/mailer/contact`, data)
        .then(response => {
            return response.status
        }).catch(error => {
            return error;
          });;

    return status

}



