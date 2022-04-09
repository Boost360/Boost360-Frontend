import { useState, useMemo } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';


const VideoLibraryItem = (props) => {
    const title = props.title;
    const date = props.updatedAt.substring(0, 10);
    const videoUrl = props.videoUrl;

    const [videoOpen, setVideoOpen] = useState(false);
    const videoProps = useMemo(() => {
        return videoOpen ? { controls: true, className: 'player' } : {};
    }, [videoOpen]);
    const handleVideoOpen = () => setVideoOpen(true);
    const handleVideoClose = () => setVideoOpen(false);

    return (
        <div className='video_library_item_container_inner'>
            <div className='video_library_image_container'>
                {videoOpen && <div className='backdrop' onClick={handleVideoClose} />}
                <video src={videoUrl} {...videoProps} />
                <PlayArrowIcon onClick={handleVideoOpen} />
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