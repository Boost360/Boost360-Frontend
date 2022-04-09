import { useState, useEffect, useMemo } from 'react';
import './Lesson.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { lesson, student } from '../../../api/lesson/lesson';
import Skeleton from '@mui/material/Skeleton';
import { Snackbar, Alert } from "@mui/material";
import { parseDate, diffInHours } from '../../../util/date';

const Lesson = ({ user }) => {
    const student_id = user._id;
    const [rows, setRows] = useState([]);
    const [program, setProgram] = useState();
    const [enroledOn, setEnroledOn] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const quantity = useMemo(() => rows.length, [rows]);
    const handleClose = () => setError(null);
    const getDate = (string) => parseDate(string).substring(0, 10);

    useEffect(async () => {
        // Get student lesson rows.
        let res = await lesson(student_id);
        res.status === 200 ? setRows(res.data) : setError(res);
        // Get student program and enrol date.
        res = await student(student_id);
        if (res.status === 200) {
            setProgram(res.data.program && res.data.program);
            setEnroledOn(res.data.enroledOn && getDate(res.data.enroledOn));
        } else {
            setError(res);
        }
        setLoading(false);
    }, []);

    return (
        <div>
            {
                loading ? (
                    <div className='lesson_container'>
                        <Skeleton variant="rectangular" height={800} />
                    </div>

                ) : (
                    <div className='lesson_container'>
                        <div className="lesson_program">
                            <h1>{`Program : ${program ? program : ''}`}</h1>
                            <h2>{`Enroled on : ${enroledOn ? enroledOn : ''}`}</h2>
                            <h2>{`Lessons paid : ${quantity ? quantity : ''}`}</h2>
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
                                            <TableCell align="left">{row.isRemote ? 'remote' : 'onsite'}</TableCell>
                                            <TableCell align="left">{row.endDate && `${diffInHours(row.startDate, row.endDate)} Hours`}</TableCell>
                                            <TableCell align="left">{row.startDate && getDate(row.startDate)}</TableCell>
                                            <TableCell align="left">{row.location && row.location}</TableCell>
                                            <TableCell align="left">{row.notes && row.notes}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>

                )
            }
            <Snackbar anchorOrigin={{ 'vertical': 'bottom', 'horizontal': 'center' }} open={error} autoHideDuration={20000} onClose={handleClose} >
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    {error}
                </Alert>
            </Snackbar>
        </div>

    );
};
export default Lesson;