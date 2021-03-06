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
import Skeleton from '@mui/material/Skeleton';


const DevelopmentProgram = ({user}) => {
    const student_id = user._id;
    // Display 6 empty rows by default
    const [rows, setRow] = React.useState(Array(6).fill(
        {
            session: '',
            date: '',
            topic: '',
            learningReference: '',
            file: '',
            complete: false
        }
    ));

    const [loading, setLoading] = React.useState(true)

    React.useEffect(async () => {
        let devData = await devProgramStudent(student_id);
        // If there is no content, we DONT update rows and use default empty rows
        if (devData.data.length > 0) setRow(devData.data);
        setLoading(false);
    }, []);

    return (
        <div>
            {
                loading?(
                    <div className='development_program_container'>
                        <Skeleton variant="rectangular" height={800} />
                    </div>

                ):(
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
                                            <TableCell align="center">
                                                {row.file ? 
                                                    <a href={row.file} className='development_program_file_icon'><InsertDriveFileIcon/></a>
                                                    :
                                                    ''
                                                }
                                            </TableCell>
                                            <TableCell align="center">{row.completed?<Checkbox disabled checked /> : <Checkbox  disabled />}</TableCell>
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
export default DevelopmentProgram;