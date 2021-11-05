import * as React from 'react';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import GetAppIcon from '@mui/icons-material/GetApp';
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Checkbox from "@mui/material/Checkbox";
import {resultStudent} from '../../../../api/result/result';
import Skeleton from '@mui/material/Skeleton';

const ResultInner = (props) => {

    const expr = props.resultType;
    const student = props.user_id;

    const[data, setData] = React.useState([
        {
            fileName: '',
            fileUrl: '',
            date: ''
        }
    ]);

    const [loading, setLoading] = React.useState(true);

    React.useEffect(async () => {
        let resultData = await resultStudent(student);
        const listData = [];
        for (let i=0; i < resultData.data.length; i++){
            if(resultData.data[i].type==expr){
                listData.push(resultData.data[i])
            }
        }
        setData(listData);
        setLoading(false);
    }, []);


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
                        {row.date}
                    </div>
                    <div className='result_inner_file_download'>
                        <a href={row.fileUrl}>
                            <GetAppIcon/>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default ResultInner;



