import * as React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';


const VideoLibraryItem = (props) => {
    const id = props.videoLibraryItem.id;
    const image_url = props.videoLibraryItem.image_url;
    const title = props.videoLibraryItem.title;
    const date = props.videoLibraryItem.date;

    return (
        <div className='video_library_item_container_inner'>
            <div className='video_library_image_container' style={{backgroundImage: 'url('+ image_url +')'}}>
                <PlayArrowIcon/>
            </div>
            <div className='video_library_title_container'>
                <div className='video_library_title_left_col'>Title</div>
                <div className='video_library_title_right_col'>{title}</div>
            </div>
            <div className='video_library_date_container'>
                <div className='video_library_date_left_col'>Date</div>
                <div className='video_library_date_right_col'>{date}</div>
            </div>
        </div>
    );
};
export default VideoLibraryItem;