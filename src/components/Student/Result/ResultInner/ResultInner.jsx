import * as React from 'react';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import FileDownloadOffIcon from '@mui/icons-material/FileDownloadOff';
import {resultStudent} from '../../../../api/result/result';
import Skeleton from '@mui/material/Skeleton';

const ResultInner = (props) => {

    const expr = props.resultType;
    const student = props.user_id;
    // Display 6 empty rows by default
    const[data, setData] = React.useState(Array(6).fill({
        fileName: '-',
        fileUrl: '',
        date: 'xx/xx/xxxx'
    }));

    const [loading, setLoading] = React.useState(true);

    React.useEffect(async () => {
        let resultData = await resultStudent(student);
        const listData = [];
        for (let i=0; i < resultData.data.length; i++){
            if(resultData.data[i].type==expr){
                listData.push(resultData.data[i])
            }
        }
        // If there is no content, we DONT update rows and use default empty rows
        if (listData.length > 0) setData(listData);
        setLoading(false);
    }, []);


    return (
        <div>
            {
                loading ?(
                    <div className='result_inner_container'>
                        <Skeleton variant="rectangular" height={400} />
                    </div>

                ):(
                    <div className='result_inner_container'>
                    {data.map((row) => (
                        <div className='result_inner_row'>
                            <div className='result_inner_file_icon'>
                                <InsertDriveFileIcon sx={{width: '30px'}}/>
                            </div>
                            <div className='result_inner_file_name'>
                                {row.fileName}
                            </div>
                            <div className='result_inner_file_date'>
                                {row.date.substring(0, 10)}
                            </div>
                            <div className='result_inner_file_download'>
                                {row.fileUrl ? 
                                    <a href={row.fileUrl}><FileDownloadIcon/></a>
                                    :
                                    <span><FileDownloadOffIcon/></span>
                                }
                            </div>
                        </div>
                    ))}
                    </div>
                )
            }
        </div>
       
    );
};
export default ResultInner;



