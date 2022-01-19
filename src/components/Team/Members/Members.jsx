
import React from 'react'
import Member from './Member'
import '../Team.css'

function Members({members}) {
    return (
        <div className="members">
            {Object.values(members).map((member) => 
                <Member member={member}/>
            )}
        </div>        
    )
}


export default Members
