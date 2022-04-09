import React from 'react';
import './BulletPoints.css'

function BulletPoints({data}) {
  return (
      <div>
          {Object.values(data ? data : {}).map((line, i) => 
            <div className="bulletPoint" key={i}>
                <span>•</span>
                {`${line}\n\n`}
            </div>
          )}
      </div>
  );
}

export default BulletPoints;