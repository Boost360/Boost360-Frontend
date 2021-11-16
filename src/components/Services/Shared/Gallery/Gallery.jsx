import React, { useState } from 'react'
import './Gallery.css'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';


function Gallery({images}) {
    const [imageIndex, setImageIndex] = useState(0);
    const [imageClass, setImageClass] = useState('image');
    const nextImage = () => {
        let newIndex = (imageIndex + 1) % images.length;
        setImageClass('image slide_out_right');
        setTimeout(() => {
            setImageIndex(newIndex);
            setImageClass('image slide_in_left');
        }, 800);
    }
    const lastImage = () => {
        let newIndex = (imageIndex - 1) % images.length;
        newIndex = (newIndex < 0) ? newIndex + images.length : newIndex;
        setImageClass('image slide_out_left');
        setTimeout(() => {
            setImageIndex(newIndex);
            setImageClass('image slide_in_right');
        }, 800);
    }

    return (
        <div className="gallery">
            <img src={images[imageIndex]} alt={images[imageIndex]} className={imageClass} />
            <MdKeyboardArrowLeft id='lastImage_Btn' onClick={lastImage} />
            <MdKeyboardArrowRight id='nextImage_Btn' onClick={nextImage} />
        </div>
    )
}

export default Gallery
