import * as React from 'react';
import './Lesson.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {lesson} from '../../../api/lesson/lesson';
import Skeleton from '@mui/material/Skeleton';

const Lesson = ({user}) => {
    const student_id = user._id;
    const [program, setProgram] = React.useState({
        type : '',
        EnrolDate : '',
        Quantity: 0
    });
    // Display 6 empty rows by default
    const emptyRow = {
        lessonNumber: '',
        type: '',
        duration: '',
        date: '',
        location: '',
        notes: ''
    };
    const [rows, setRows] = React.useState(Array(6).fill(emptyRow)); 



    const [loading, setLoading] = React.useState(true)

    React.useEffect(async () => {
        let devData = await lesson(student_id);
        setProgram(devData.data.program);
        // Use default empty rows if no content present
        if (devData.data.rows.length > 0) setRows(devData.data.rows); 
        setLoading(false);
    }, []);
    


    const stringifyDate = (date) => {
        if  (date) {
            const option = {day: '2-digit', month: 'short', year: 'numeric'};
            return date.toLocaleString('en-AU', option).substring(0, 20);
        }
    }

    return (
        <div>
            {
                loading?(
                    <div className='lesson_container'>
                        <Skeleton variant="rectangular" height={800} />
                    </div>

                ):(
                    <div className='lesson_container'>
                        <div className="lesson_program">
                            <h1>{`Program : ${program.type ? program.type : ''}`}</h1>
                            <h2>{`Enroled on : ${program.enrolDate ? stringifyDate(program.enrolDate) : ''}`}</h2>
                            <h2>{`Lessons paid : ${program.quantity ? program.quantity : ''}`}</h2>
                        </div>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow className='lesson_header'>
                                        <TableCell align="left">Lesson Number</TableCell>
                                        <TableCell align="left">Type</TableCell>
                                        <TableCell align="left">Duration</TableCell>
                                        <TableCell align="left">Date</TableCell>
                                        <TableCell align="left">Location</TableCell>
                                        <TableCell align="left">Notes</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody className='lesson_table'>
                                    {rows.map((row, index) => (
                                        <TableRow
                                            key={index}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            className={'lesson_row'}
                                        >
                                            <TableCell component="th" scope="row" align="left">
                                                {row.lessonNumber}
                                            </TableCell>
                                            <TableCell align="left">{row.type}</TableCell>
                                            <TableCell align="left">{row.duration ? `${row.duration} Hours` : ''}</TableCell>
                                            <TableCell align="left">{row.date ? stringifyDate(row.date) : ''}</TableCell>
                                            <TableCell align="left">{row.location}</TableCell>
                                            <TableCell align="left">{row.notes}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                    
                )
            }
        </div>

    );
};
export default Lesson;