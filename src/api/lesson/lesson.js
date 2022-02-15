import axios from "axios";

// TO BE DELETED
const mockData = {
    program : {
        type: 'Junior Golf',
        enrolDate: new Date('01 Jan 2022 00:00:00 GMT'),
        quantity: 5
    },
    rows : [
        {
            lessonNumber: '1',
            type: 'Remote',
            duration: 1,
            date: new Date('01 Jan 2022 00:00:00 GMT'),
            location: '-',
            notes: ''
        },
        {
            lessonNumber: '2',
            type: 'Remote',
            duration: 1,
            date: new Date('03 Jan 2022 00:00:00 GMT'),
            location: '-',
            notes: ''
        },
        {
            lessonNumber: '3',
            type: 'Offline',
            duration: 1.5,
            date: new Date('07 Jan 2022 00:00:00 GMT'),
            location: 'Waitakere Golf Club',
            notes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quidem quibusdam voluptate unde rerum amet consequuntur quasi commodi nisi obcaecat'
        },
        {
            lessonNumber: '4',
            type: 'Offline',
            duration: 1.5,
            date: new Date('10 Jan 2022 00:00:00 GMT'),
            location: 'Waitakere Golf Club',
            notes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quidem quibusdam voluptate unde rerum amet consequuntur quasi commodi nisi obcaecat'
        },
        {
            lessonNumber: '5',
            type: 'Offline',
            duration: 1.5,
            date: new Date('14 Jan 2022 00:00:00 GMT'),
            location: 'Waitakere Golf Club',
            notes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quidem quibusdam voluptate unde rerum amet consequuntur quasi commodi nisi obcaecat'
        },
    ]
};

const url = process.env.REACT_APP_API;


export async function lesson(id) {
    // const headers = {
    //     'x-access-token': localStorage.getItem('token')
    // }

    // const status = await axios.get(`${url}/lesson/${id}`, { 'headers': headers })
    // // check route from backend(routes/api/index), here is /users not /profile
    //     .then(response => {
    //         return { data: response.data, status: response.status }
    //     }).catch(error => {
    //         return error;
    //     });;

    // return status


    // TO BE DELETED
    return {data: {program: {type: '', enrolDate: null, quantity: null}, rows: []}, status: 200}

}