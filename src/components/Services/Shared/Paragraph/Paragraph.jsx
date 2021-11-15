import React from 'react'

function Paragraph({ json, gap = 1, prefix = null }) {
    console.log('[Paragraph]json:', json);
    return (
        <p>
            {
                Object.keys(json ? json : {}).map(key => (
                    <span>
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

