import * as React from 'react';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import GetAppIcon from '@mui/icons-material/GetApp';
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Checkbox from "@mui/material/Checkbox";


const ResultInner = (props) => {

    const expr = props.resultType;
    const data = [
        {
          fileName: 'file1.pdf',
          downloadLink: 'http://cloverville.co.nz/wp-content/uploads/2021/09/Guide-to-order_curtain.pdf',
          fileDate: '2020-10-21'
        },
        {
            fileName: 'file2.pdf',
            downloadLink: 'http://cloverville.co.nz/wp-content/uploads/2021/09/Guide-to-order_curtain.pdf',
            fileDate: '2020-10-21'
        },
        {
            fileName: 'file3.pdf',
            downloadLink: 'http://cloverville.co.nz/wp-content/uploads/2021/09/Guide-to-order_curtain.pdf',
            fileDate: '2020-10-21'
        },
        {
            fileName: 'file4.pdf',
            downloadLink: 'http://cloverville.co.nz/wp-content/uploads/2021/09/Guide-to-order_curtain.pdf',
            fileDate: '2020-10-21'
        },
        {
            fileName: 'file5.pdf',
            downloadLink: 'http://cloverville.co.nz/wp-content/uploads/2021/09/Guide-to-order_curtain.pdf',
            fileDate: '2020-10-21'
        },
        {
            fileName: 'file6.pdf',
            downloadLink: 'http://cloverville.co.nz/wp-content/uploads/2021/09/Guide-to-order_curtain.pdf',
            fileDate: '2020-10-21'
        },
        {
            fileName: 'file7.pdf',
            downloadLink: 'http://cloverville.co.nz/wp-content/uploads/2021/09/Guide-to-order_curtain.pdf',
            fileDate: '2020-10-21'
        },
        {
            fileName: 'file8.pdf',
            downloadLink: 'http://cloverville.co.nz/wp-content/uploads/2021/09/Guide-to-order_curtain.pdf',
            fileDate: '2020-10-21'
        },
        {
            fileName: 'file9.pdf',
            downloadLink: 'http://cloverville.co.nz/wp-content/uploads/2021/09/Guide-to-order_curtain.pdf',
            fileDate: '2020-10-21'
        },
        {
            fileName: 'file10.pdf',
            downloadLink: 'http://cloverville.co.nz/wp-content/uploads/2021/09/Guide-to-order_curtain.pdf',
            fileDate: '2020-10-21'
        },

    ]
    switch (expr) {
        case 'notice':
            console.log('notice');
            break;
        case 'swingData':
            console.log('swingData');
            break;
        case 'equipments':
            console.log('equipments');
            break;
        case 'yardages':
            console.log('yardages');
            break;
        case 'progressReports':
            console.log('progressReports');
            break;
        case 'physicalDevelopment':
            console.log('physicalDevelopment');
            break;
        case 'psychologyDevelopment':
            console.log('psychologyDevelopment');
            break;
        default:
            console.log('no match');
    }


    return (
        <div className='result_inner_container'>
            {data.map((row) => (
                <div className='result_inner_row'>
                    <div className='result_inner_file_icon'>
                        <InsertDriveFileIcon/>
                    </div>
                    <div className='result_inner_file_name'>
                        {row.fileName}
                    </div>
                    <div className='result_inner_file_date'>
                        {row.fileDate}
                    </div>
                    <div className='result_inner_file_download'>
                        <a href={row.downloadLink}>
                            <GetAppIcon/>
                        </a>
                    </div>
                </div>
            ))}





        </div>
    );
};
export default ResultInner;



