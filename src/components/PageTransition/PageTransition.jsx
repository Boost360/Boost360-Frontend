import React, {useEffect} from 'react';
import './PageTransition.css';

function PageTransition({children}) {
    // useEffect(() => {
    //     document.querySelectorAll('.cover-exit').className = 'cover-enter';
    //     return () => {
    //         const timeout = setTimeout(()=>{
    //             document.querySelectorAll('.cover-enter').className = 'cover-exit';
    //         }, 3000);
    //         clearTimeout(timeout);
    //     }
    // }, [])
    return (
        <div className="cover-enter">
            {children}
        </div>
    )
}

export default PageTransition
