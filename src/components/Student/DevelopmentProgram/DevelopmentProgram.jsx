import * as React from 'react';
import './DevelopmentProgram.css';
import Checkbox from '@mui/material/Checkbox';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import {devProgramStudent} from '../../../api/dev-program/devProgramStudent';


const DevelopmentProgram = ({user}) => {
    const student_id = user._id;

    const [rows, setRow] = React.useState([
        {
            session: '',
            date: '',
            topic: '',
            learningReference: '',
            file: '',
            complete: false
        }
    ]);

    const [loading, setLoading] = React.useState(true)

    React.useEffect(async () => {
        let devData = await devProgramStudent(student_id);
        setRow(devData.data);
        setLoading(false);
    }, []);

    return (
        <div className='development_program_container'>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Session</TableCell>
                            <TableCell align="center">Date</TableCell>
                            <TableCell align="center">Topic</TableCell>
                            <TableCell align="center">Learning Reference</TableCell>
                            <TableCell align="center">Training PDF</TableCell>
                            <TableCell align="center">Completed</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                className={row.completed? 'development_gray_row' : ''}
                            >
                                <TableCell component="th" scope="row" align="center">
                                    {row.session}
                                </TableCell>
                                <TableCell align="center">{row.date.substring(0, 10)}</TableCell>
                                <TableCell align="center">{row.topic}</TableCell>
                                <TableCell align="center">{row.learningReference}</TableCell>
                                <TableCell align="center"><a href={row.file} className='development_program_file_icon'><InsertDriveFileIcon/></a></TableCell>
                                <TableCell align="center">{row.completed?<Checkbox disabled checked /> : <Checkbox  disabled />}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

    );
};
export default DevelopmentProgram;