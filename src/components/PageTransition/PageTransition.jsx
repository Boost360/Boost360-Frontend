import React, {useEffect} from 'react';
import './PageTransition.css';

function PageTransition({children}) {
    return (
        <div className="cover-enter">
            {children}
        </div>
    )
}

export default PageTransition
