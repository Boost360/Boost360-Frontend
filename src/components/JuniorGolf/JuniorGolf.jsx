import React, { useState } from 'react';
import './JuniorGolf.css';
import Keypoint from '../Membership/Keypoint/Keypoint';
import ContactInput from '../ContactUs/Input/ContactInput';
import ProgramOverview from './ProgramOverview/ProgramOverview';
import { AiOutlineDollarCircle, AiTwotoneCalendar, AiOutlineLaptop, AiOutlineFundProjectionScreen, AiOutlineFieldTime, AiOutlineLogin } from 'react-icons/ai';
import { HiOutlineBadgeCheck, HiLocationMarker } from 'react-icons/hi';
import { IoIosPeople, IoMdThumbsUp} from 'react-icons/io';
import { FaSchool } from 'react-icons/fa';
import { GoPackage } from 'react-icons/go';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import Icon_swing from '../../static/img/Icon_swing.svg';
import Icon_irons from '../../static/img/Icon_irons.svg';
import background4 from '../../static/img/background4.png';
import background5 from '../../static/img/background5.png';
import background6 from '../../static/img/background6.png';
import background7 from '../../static/img/background7.png';
import background8 from '../../static/img/background8.png';



export default function JuniorGolf() {
    const keypoints = [
        {
            icon: <h1 className='icon' style={{ font: "var(--primary-medium)" }}> 20 </h1>,
            title: 'Class Length',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum expedita, quod saepe quibusdam porro vitae! Officia quasi beatae dolorum aut?',
        },

        {
            icon: <AiOutlineFieldTime className='icon' />,
            title: 'Class Duration',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum expedita, quod saepe quibusdam porro vitae! Officia quasi beatae dolorum aut?',
        },

        {
            icon: <AiTwotoneCalendar className='icon' />,
            title: 'Class Timetable',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum expedita, quod saepe quibusdam porro vitae! Officia quasi beatae dolorum aut?',
        },

        {
            icon: <IoIosPeople className='icon' />,
            title: 'Class Size',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum expedita, quod saepe quibusdam porro vitae! Officia quasi beatae dolorum aut?',
        },

        {
            icon: <HiLocationMarker className='icon' />,
            title: 'Course Location',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum expedita, quod saepe quibusdam porro vitae! Officia quasi beatae dolorum aut?',
        },

        {
            icon: <img src={Icon_swing} alt={Icon_swing} className='icon' />,
            title: 'Assessment Day',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum expedita, quod saepe quibusdam porro vitae! Officia quasi beatae dolorum aut?',
        },

        {
            icon: <AiOutlineLogin className='icon' />,
            title: 'BP Student Login',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum expedita, quod saepe quibusdam porro vitae! Officia quasi beatae dolorum aut?',
        },

        {
            icon: <AiOutlineLaptop className='icon' />,
            title: 'Online learning',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, adipisci? Possimus, cum optio. Consequuntur nulla modi sed nihil eaque velit temporibus autem magni suscipit beatae, eligendi, ipsa voluptatem repudiandae magnam dicta dolore similique recusandae sequi officiis ad tempore voluptas! Quos impedit ipsum explicabo placeat enim totam corrupti nobis. Magnam, iusto!',
        },

        {
            icon: <img src={Icon_irons} alt={Icon_irons} className='icon' />,
            title: 'Equipment',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit in molestias error quos eos nemo recusandae accusantium quae officia animi?',
        },

        {
            icon: <AiOutlineFundProjectionScreen className='icon' />,
            title: 'Development Plans',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit in molestias error quos eos nemo recusandae accusantium quae officia animi?',
        },

        {
            icon: <FaSchool className='icon' />,
            title: 'Holiday Program',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum expedita, quod saepe quibusdam porro vitae! Officia quasi beatae dolorum aut?',
        },

        {
            icon: <HiOutlineBadgeCheck className='icon' />,
            title: 'Rewards',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit in molestias error quos eos nemo recusandae accusantium quae officia animi?',
        },

        {
            icon: <IoMdThumbsUp className='icon' />,
            title: 'Benefits',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit in molestias error quos eos nemo recusandae accusantium quae officia animi?',
        },

        {
            icon: <GoPackage className='icon' />,
            title: 'Student Pack',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit in molestias error quos eos nemo recusandae accusantium quae officia animi?',
        },

        {
            icon: <AiOutlineDollarCircle className='icon' />,
            title: 'Price',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit in molestias error quos eos nemo recusandae accusantium quae officia animi?',
        },
    ];


    // ------------------------Sliding Images------------------------------
    const images = [background4, background5, background6, background7, background8];
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
        console.log('last image index', newIndex);
    }
    // ---------------------------------------------------------------------------------

    return (
        <div className='juniorGolf'>

            <div className="section" style={{ height: '100vh' }}>
                <div className="left">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem totam, molestiae tempore hic dolore incidunt at rerum. Exercitationem, a vitae fugiat illo ab, reprehenderit corrupti iusto eveniet ex dolor accusantium!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptatibus accusantium, porro repellat architecto sunt quia ipsam. In, atque deleniti? Consectetur magnam quos nihil voluptas sapiente optio veritatis, nisi, dolorem atque ipsa vitae perferendis! Sed laborum iusto sequi eum! Voluptatibus dolores, ullam maxime accusamus doloribus voluptate non ex dolore architecto.</p>
                </div>
                <img src={images[imageIndex]} alt={images[imageIndex]} className={imageClass} />
                <MdKeyboardArrowLeft id='lastImage_Btn' onClick={lastImage} />
                <MdKeyboardArrowRight id='nextImage_Btn' onClick={nextImage} />
            </div>

            <div className="section">
                <ProgramOverview></ProgramOverview>
            </div>

            <div className="section" style={{ justifyContent: 'center' }}>
                {keypoints.map((keypoint, i) => (<Keypoint icon={keypoint.icon} title={keypoint.title} description={keypoint.description} key={i}></Keypoint>))}
            </div>

            <div className="section flexY">
                <h2>For exporession of interests please fill in the form below</h2>
                <ContactInput></ContactInput>
            </div>
            
            <div className="section" style={{ height: '500px' }}></div>
        </div>
    )
}
