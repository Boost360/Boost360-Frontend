import { useEffect, useState } from 'react';
import { getVideos } from '../../../api/video/video';
import { Snackbar, Alert } from "@mui/material";
import './VideoLibrary.css';
import VideoLibraryItem from "./VideoLibraryItem/VideoLibraryItem";

// videoList Example
// [
//     {
//         _id: 1,
//         videoUrl:'https://i.niupic.com/images/2022/03/17/9WEx.png',
//         title: 'title',
//         updatedAt: '2021-10-03'
//     },
//     {
//         _id: 2,
//         videoUrl:'https://i.niupic.com/images/2022/03/17/9WEx.png',
//         title: 'title',
//         updatedAt: '2021-10-03'
//     },
//     {
//         _id: 3,
//         videoUrl:'https://i.niupic.com/images/2022/03/17/9WEx.png',
//         title: 'title',
//         updatedAt: '2021-10-03'
//     }
// ]

const VideoLibrary = ({ user }) => {
    const [videoList, setVideoList] = useState([]);
    const [error, setError] = useState(null);
    const handleClose = () => setError(null);

    useEffect(async () => {
        const res = await getVideos(user._id);
        res.status === 200 ? setVideoList(res.data) : setError(`${res}`);
    }, []);

    return (
        <div className='video_library_container'>
            {videoList.map((video, key) => {
                return <div className='video_library_item_container' key={key}>
                    <VideoLibraryItem {...video} />
                </div>
            })}
            <Snackbar anchorOrigin={{ 'vertical': 'bottom', 'horizontal': 'center' }} open={error} autoHideDuration={20000} onClose={handleClose} >
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    {error}
                </Alert>
            </Snackbar>
        </div>
    );
};
export default VideoLibrary;