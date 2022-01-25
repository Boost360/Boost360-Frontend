import * as React from 'react';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import FileDownloadOffIcon from '@mui/icons-material/FileDownloadOff';
import Skeleton from '@mui/material/Skeleton';

const ResultInner = (props) => {
    const data = props.data;
    const loading = props.loading;

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
                                <InsertDriveFileIcon sx={{width: '30px'}} />
                            </div>
                            <div className='result_inner_file_name'>
                                {row.fileName}
                            </div>
                            <div className='result_inner_file_date'>
                                {row.fileUrl ? row.createdAt.substring(0, 10):'xx/xx/xxxx'}
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