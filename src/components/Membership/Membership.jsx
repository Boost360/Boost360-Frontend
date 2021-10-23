import React from 'react';
import './Membership.css';
import Keypoint from './Keypoint/Keypoint';
import { AiOutlineDollarCircle, AiTwotoneCalendar, AiOutlineLaptop, AiOutlineBook, AiOutlineVideoCamera, AiOutlineFundProjectionScreen, AiOutlineMobile } from 'react-icons/ai';
import { HiOutlineBadgeCheck } from 'react-icons/hi';
import Icon_swing from '../../static/img/Icon_swing.svg';
import Icon_flag from '../../static/img/Icon_flag.svg';
import Icon_irons from '../../static/img/Icon_irons.svg';

const Icon = ({ file }) => {
  return (
    <img src={file} alt={file} className='icon' />
  );
}



export default function Membership() {
  const keypoints = [
    {
      icon: <AiTwotoneCalendar className='icon' />,
      title: 'Course Duration',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum expedita, quod saepe quibusdam porro vitae! Officia quasi beatae dolorum aut?',
    },

    {
      icon: <AiOutlineLaptop className='icon' />,
      title: 'Student Portal',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, adipisci? Possimus, cum optio. Consequuntur nulla modi sed nihil eaque velit temporibus autem magni suscipit beatae, eligendi, ipsa voluptatem repudiandae magnam dicta dolore similique recusandae sequi officiis ad tempore voluptas! Quos impedit ipsum explicabo placeat enim totam corrupti nobis. Magnam, iusto!',
    },


    {
      icon: <AiOutlineBook className='icon' />,
      title: 'Online Learning Modules',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit in molestias error quos eos nemo recusandae accusantium quae officia animi?',
    },

    {
      icon: <AiOutlineVideoCamera className='icon' />,
      title: 'Video Swing Analysis',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit in molestias error quos eos nemo recusandae accusantium quae officia animi?',
    },

    {
      icon: <AiOutlineFundProjectionScreen className='icon' />,
      title: 'Lessons Plans',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit in molestias error quos eos nemo recusandae accusantium quae officia animi?',
    },

    {
      icon: <AiOutlineMobile className='icon' />,
      title: 'Coach Now App',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum expedita, quod saepe quibusdam porro vitae! Officia quasi beatae dolorum aut?',
    },

    {
      icon: <Icon file={Icon_swing} />,
      title: 'Practical Learning',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit in molestias error quos eos nemo recusandae accusantium quae officia animi?',
    },

    {
      icon: <HiOutlineBadgeCheck className='icon' />,
      title: 'Rewards',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit in molestias error quos eos nemo recusandae accusantium quae officia animi?',
    },

    {
      icon: <AiOutlineDollarCircle className='icon' />,
      title: 'Price',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit in molestias error quos eos nemo recusandae accusantium quae officia animi?',
    },


  ];
  return (
    <div className='membership'>
      <div className="section" style={{ height: '100vh' }}>
        <div className="left">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem totam, molestiae tempore hic dolore incidunt at rerum. Exercitationem, a vitae fugiat illo ab, reprehenderit corrupti iusto eveniet ex dolor accusantium!</p>
          <h2>Exclusive service and keypoint</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptatibus accusantium, porro repellat architecto sunt quia ipsam. In, atque deleniti? Consectetur magnam quos nihil voluptas sapiente optio veritatis, nisi, dolorem atque ipsa vitae perferendis! Sed laborum iusto sequi eum! Voluptatibus dolores, ullam maxime accusamus doloribus voluptate non ex dolore architecto.</p>
        </div>
        <div className="image" id="background4"></div>
      </div>
      <div className="section" style={{ height: '100vh' }}>
        <div className="right">
          <h2>Screening sessions</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptatibus accusantium, porro repellat architecto sunt quia ipsam. In, atque deleniti? Consectetur magnam quos nihil voluptas sapiente optio veritatis, nisi, dolorem atque ipsa vitae perferendis! Sed laborum iusto sequi eum! Voluptatibus dolores, ullam maxime accusamus doloribus voluptate non ex dolore architecto.</p>
        </div>
        <div className="image" id="background5"></div>
      </div>
      <div className="section" style={{ backgroundColor: '#000000' }}>
        <div className="membershipOption" style={{ backgroundColor: '#DDDDDD', color: '#303030' }}>
          <h2>FOUNDATION</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas porro consequuntur magnam, eum eligendi saepe placeat dolorem, vel sint doloribus voluptatum molestias laudantium maxime facilis. Expedita at tenetur nam neque.</p>
          <h3>Content</h3>
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, doloremque!</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, doloremque!</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, doloremque!</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, doloremque!</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, doloremque!</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, doloremque!</li>
          </ul>
        </div>
        <div className="membershipOption" style={{ backgroundColor: '#AAAAAA', color: '#303030' }}>
          <h2>GROWTH</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas porro consequuntur magnam, eum eligendi saepe placeat dolorem, vel sint doloribus voluptatum molestias laudantium maxime facilis. Expedita at tenetur nam neque.</p>
          <h3>Content</h3>
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, doloremque!</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, doloremque!</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, doloremque!</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, doloremque!</li>
          </ul>
        </div>
        <div className="membershipOption" style={{ backgroundColor: '#000000', color: '#EEEEEE' }}>
          <h2>PERFORMANCE</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas porro consequuntur magnam, eum eligendi saepe placeat dolorem, vel sint doloribus voluptatum molestias laudantium maxime facilis. Expedita at tenetur nam neque.</p>
          <h3>Content</h3>
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, doloremque!</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, doloremque!</li>

          </ul>
        </div>
      </div>
      <div className="section flexY" style={{ backgroundColor: '#000000', height: '100vh' }}>
        <h2>Tuition options</h2>
        <div className="optionTable">
          <div className="column" style={{ width: '100px' }}>
            <div className="cell"></div>
            <div className="cell">Guest Student</div>
            <div className="cell">Academy Member Student</div>
          </div>
          <div className="column">
            <div className="cell">1 Hour</div>
            <div className="cell">$140</div>
            <div className="cell">$110</div>
          </div>
          <div className="column">
            <div className="cell">5 Hour</div>
            <div className="cell">$650</div>
            <div className="cell">$500</div>
          </div>
          <div className="column">
            <div className="cell">10 Hour</div>
            <div className="cell">$1200</div>
            <div className="cell">$900</div>
          </div>
          <div className="column">
            <div className="cell">Flight scope</div>
            <div className="cell">$140</div>
            <div className="cell">$110</div>
          </div>
        </div>
        <ul>
          <li>For an additional student please add 20%</li>
          <li>Only one member required to qualify for the member's price</li>
          <li>Student ages between 5 - 17 years old please refer to the Junior pricing</li>
        </ul>
      </div>

      <div className="section" style={{ justifyContent: 'center' }}>
        {keypoints.map((keypoint, i) => (<Keypoint icon={keypoint.icon} title={keypoint.title} description={keypoint.description} key={i}></Keypoint>))}
      </div>

      <div className="section"></div>

    </div>
  )
}
