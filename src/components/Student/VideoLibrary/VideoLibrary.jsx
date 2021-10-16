import * as React from 'react';
import './VideoLibrary.css';
import VideoLibraryItem from "./VideoLibraryItem/VideoLibraryItem";



const data = [
    {
        id:1,
        image_url:'http://snackforest.online/wp-content/uploads/2021/10/background5-1.jpg',
        title: 'title',
        date: '2021/10/03'
    },
    {
        id:2,
        image_url:'http://snackforest.online/wp-content/uploads/2021/10/background5-1.jpg',
        title: 'title',
        date: '2021/10/03'
    },
    {
        id:3,
        image_url:'http://snackforest.online/wp-content/uploads/2021/10/background5-1.jpg',
        title: 'title',
        date: '2021/10/03'
    },
    {
        id:4,
        image_url:'http://snackforest.online/wp-content/uploads/2021/10/background5-1.jpg',
        title: 'title',
        date: '2021/10/03'
    },
    {
        id:5,
        image_url:'http://snackforest.online/wp-content/uploads/2021/10/background5-1.jpg',
        title: 'title',
        date: '2021/10/03'
    },
    {
        id:6,
        image_url:'http://snackforest.online/wp-content/uploads/2021/10/background5-1.jpg',
        title: 'title',
        date: '2021/10/03'
    },
    {
        id:7,
        image_url:'http://snackforest.online/wp-content/uploads/2021/10/background5-1.jpg',
        title: 'title',
        date: '2021/10/03'
    },
    {
        id:8,
        image_url:'http://snackforest.online/wp-content/uploads/2021/10/background5-1.jpg',
        title: 'title',
        date: '2021/10/03'
    },
    {
        id:9,
        image_url:'http://snackforest.online/wp-content/uploads/2021/10/background5-1.jpg',
        title: 'title',
        date: '2021/10/03'
    },
    {
        id:10,
        image_url:'http://snackforest.online/wp-content/uploads/2021/10/background5-1.jpg',
        title: 'title',
        date: '2021/10/03'
    },
];

const VideoLibrary = () => {

    return (
       <div className='video_library_container'>
           {data.map((item, key)=>{
               return <div className='video_library_item_container'>
                   <VideoLibraryItem videoLibraryItem={item}/>
               </div>
           })}

       </div>
    );
};
export default VideoLibrary;