import React, {Component} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './DevelopmentProgram.css';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const rows = [
    {
        id: 1,
        col1: '#',
        col2: '2021-03-24',
        col3: 'Hit the ball',
        col4: 'Hole in one',
        col5: 'PDF',
        col6: <Checkbox {...label} disabled checked />,
    },

];

const columns = [
    { field: 'col1', headerName: 'Session', width: 150 },
    { field: 'col2', headerName: 'Date', width: 150 },
    { field: 'col3', headerName: 'Topic', width: 150 },
    { field: 'col4', headerName: 'Learning Reference', width: 250 },
    { field: 'col5', headerName: 'Training PDF', width: 150 },
    { field: 'col6', headerName: <Checkbox disabled checked />, width: 150 },
];

const DevelopmentProgram = () => {
    return (
        <div style={{ height: 300, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} />
        </div>
    );
};
export default DevelopmentProgram;