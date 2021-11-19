import React from 'react'

function Paragraph({ json, gap = 1, prefix = null }) {
    return (
        <p>
            {
                Object.keys(json ? json : {}).map(key => (
                    <span key={key}>
                        {prefix}
                        {json[key]}
                        {gap >= 1 ? (<br />) : null}
                        {gap >= 2 ? (<br />) : null}
                        {gap >= 3 ? (<br />) : null}
                    </span>
                ))
            }
        </p>
    )
}

export default Paragraph

