import React from 'react'
import './ScreeningSession.css'
import BulletPoints from '../BulletPoints/BulletPoints';

function ScreeningSession({ data, logos = [] }) {
  return (
    <div className="sreeningSession">

      {data.h0 && <h1>{data.h0}</h1>}

      {data.description && <p>{data.description}</p>}

      {data.duration &&
        <div className="duration">
          <span>{data.duration.label}</span>
          <span>{data.duration.time}</span>
        </div>
      }

      {data.outcome &&
        <div className="outcome">
          <p>{data.outcome.h0}</p>
          <BulletPoints data={data.outcome.points}></BulletPoints>
        </div>
      }
      <br />

      {data.summary && <p>{data.summary}</p>}
    
      <div className="bottom_container">
        <div className="logos">
          {logos && logos.map((logo, i) => <img src={logo} alt={logo}/>)}
        </div>
        <div className='price'>{data.price}</div>
      </div>
    </div>
  );
}

export default ScreeningSession;
