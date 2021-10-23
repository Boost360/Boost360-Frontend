import React, {useState, useRef, useEffect, useCallback, useMemo} from 'react'
import './ProgramOverview.css'




export default function ProgramOverview() {
    const clamp = (a, value, b) => {
        if (value < a) {return a;}
        else if (value > b) {return b;}
        else {return value;}
    };
    const [scrollY, setScrollY] = useState(0);
    
    // 1. get reference of the container and children
    const container = useRef();
    // const children = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];
    // 2. set children final positions
    const children_final = [200, 300, 350, 400, 450, 500, 550, 600];
    // 3. set container height to (number of children) * viewport height, plus an additional viewport
    const viewport = 1500; //todo
    const container_height = viewport * children_final.length + viewport;
    // 4. set children start position, evenly distributed with a half-viewport-offset
    const children_init = children_final.map((final, i) => viewport*(i+0.5));
    // 7.let children watch scrollY, and update themself accrodingly
    //   now = max(initial, scrollY + final)
    const children_now = useMemo(
        () => {
            return children_final.map( (final, i) => clamp(children_init[i], scrollY + final), container_height);
        },
        [scrollY],
    )
    const handleScroll = () => {
        // 6.set scrollY state in eventhandler (If it passes the 2nd last viewport. don't update!)
        try {
            setScrollY(clamp(0, -container.current.getBoundingClientRect().top, container_height - viewport));
        }catch(e){
            console.log('JuniorGolf/ProgramOverview [handleScroll]:', e);
        }
    };

    useEffect(()=> {
        // 5. bind handleScroll to the scroll eventlistener of container
        document.addEventListener('scroll', handleScroll);
        return () => {
            // 8. remove event listeners before unmount
            document.removeEventListener('scroll', handleScroll);
        }
    }, []);
    
    
    
    return (
        <div className="container" ref={container} style={{height: container_height.toString()+'px'}}>
            <h1 style={{top: children_now[0].toString()+'px'}}>Program Overview</h1>
            <h2 style={{top: children_now[1].toString()+'px'}}>The junior academy student are being evaluated on : </h2>
            <p style={{top: children_now[2].toString()+'px'}}>1. Golf swing techniques</p>
            <p style={{top: children_now[3].toString()+'px'}}>2. Playing skills and performance statics</p>
            <p style={{top: children_now[4].toString()+'px'}}>3. Physical movement proficiency</p>
            <p style={{top: children_now[5].toString()+'px'}}>4. Social and mental development</p>
            <p style={{top: children_now[6].toString()+'px'}}>5. Rules and etiquette</p>
            <p style={{top: children_now[7].toString()+'px'}}>6. Tactical and decision making</p>
        </div>
    )
}

