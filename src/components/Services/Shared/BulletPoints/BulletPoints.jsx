import React from 'react';
import './BulletPoints.css'

function BulletPoints({data}) {
  return (
      <div>
          {Object.values(data ? data : {}).map((line, i) => 
            <span className="bulletPoint">
                <span>•</span>
                {line}
                <br/>
            </span>
          )}
      </div>
  );
}

export default BulletPoints;
