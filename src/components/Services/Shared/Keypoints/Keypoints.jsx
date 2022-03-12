import React from 'react'
import './Keypoints.css'
import { useTranslation } from 'react-i18next';
// -----------------------------ICONS-------------------------------
import { AiOutlineDollarCircle, AiTwotoneCalendar, AiOutlineLaptop, AiOutlineFundProjectionScreen, AiOutlineFieldTime, AiOutlineLogin, AiOutlineMobile } from 'react-icons/ai';
import { HiOutlineBadgeCheck } from 'react-icons/hi';
import { IoIosPeople } from 'react-icons/io';
import { FaSchool, FaToolbox } from 'react-icons/fa';
import { GoPackage, GoLocation } from 'react-icons/go';
import { BiBookBookmark, BiVideo, BiUserPlus } from  'react-icons/bi';
import { BsCardChecklist } from 'react-icons/bs';

const icons = {
    0: <span className='icon' style={{ font: "normal normal 500 50px 'Montserrat'" }}> 20 </span>,
    1: <AiOutlineFieldTime className='icon' />,
    2: <AiTwotoneCalendar className='icon' />,
    3: <IoIosPeople className='icon' />,
    4: <GoLocation className='icon' />,
    5: <BsCardChecklist className='icon' />,
    6: <AiOutlineLogin className='icon' />,
    7: <AiOutlineLaptop className='icon' />,
    8: <FaToolbox className='icon' />,
    9: <AiOutlineFundProjectionScreen className='icon' />,
    10: <FaSchool className='icon' />,
    11: <HiOutlineBadgeCheck className='icon' />,
    12: <GoPackage className='icon' />,
    13: <BiUserPlus className='icon' />,
    14: <AiOutlineDollarCircle className='icon' />,

    15: <AiOutlineFieldTime className='icon' />,
    16: <AiOutlineLogin className='icon' />,
    17: <BiBookBookmark className='icon' />,
    18: <BiVideo className='icon'/>,
    19: <AiOutlineFundProjectionScreen className='icon' />,
    20: <AiOutlineMobile className='icon'/>,
    21: <span className='icon' style={{ font: "normal normal 700 50px 'Montserrat'" }}> % </span>,
    22: <AiOutlineDollarCircle className='icon' />,
};

const Keypoint = ({ title, description, icon }) => {
    return (
        <div className='keypoint'>
            {icon}
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

// PROPS
// heading : accepts a string
// select  : accepts
//     - an array of numbers, represents the indices of which keypoint to display (full list is defined in i18n translation file).
//     - an empty array, display no keypoint.
//     - null, by default it display all the available keypoints.
// price   : accepts a json which contians a 'description' and a 'title' attribute.
function Keypoints({heading=null, select=null, price=null }) {
    const list = select ? select : Object.keys(icons);
    const {t} = useTranslation();
    const keypoints = t('keypoints', {returnObjects: true });
    return (
        <div className="keypoints">
            <h1>{heading}</h1>
            {
                list.map((key) => 
                (<Keypoint  icon={icons[key]} 
                            title={keypoints[key].title}
                            description={keypoints[key].description} 
                            key={key}/>)
                )
            }
            
            {price == null ? null : (
                <div className="price">
                    <h2>{price.title}</h2>
                    <p>{price.description}</p>
                </div>)
            }
        </div>
    )
}

export default Keypoints
