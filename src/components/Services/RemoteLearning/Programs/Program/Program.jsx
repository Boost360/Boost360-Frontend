import React from 'react'
import './Program.css'
import BulletPoints from '../../../Shared/BulletPoints/BulletPoints'

function Program({ data, img = '', logos = []}) {
  return (
    <div className="program">
      <div className="container">
        <img src={img && img} alt={data.title} />
        <div className='text_container'>
          {data.modules && <p>{data.modules}</p>}
          {data.outcome &&
            <div className="outcome">
              <h1>{data.outcome.h0}</h1>
              {data.outcome.h1 && <p>{data.outcome.h1}</p>}
              <BulletPoints data={data.outcome.points}></BulletPoints>
            </div>
          }
        </div>
      </div>

      <div className="bottom_container">
        <div className="logos">
          {logos && logos.map((logo, i) => <img src={logo} alt={logo}/>)}
        </div>
        {data.price && <div className='price'><hr/>{data.price}</div>}
      </div>
      <br />
    </div>
  );
}

export default Program;
