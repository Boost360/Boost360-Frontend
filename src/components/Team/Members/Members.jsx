
import React from 'react'
import Member from './Member'
import '../Team.css'

function Members({members,lang}) {
    return (
        <div className="members" >
            {Object.values(members).map((member) => 
                <Member member={member} lang={lang}/>
            )}
        </div>        
    )
}


export default Members
