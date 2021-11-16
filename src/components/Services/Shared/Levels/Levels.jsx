// author @sarah-hao
import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react'
import './Levels.css'


export default function Levels({ data }) {
    // ---------------------------- SET UP -------------------------------
    const [scrollY, setScrollY] = useState(0);
    // 0. define the final position of all children elements at the end of scroll
    //    these numbers are chosen by experiment
    const levels = data.levels;
    const temp = [70, 200];
    const children_final = temp.concat(Object.keys(levels).map((key, i) => i * 100 + 250));
    // 1. get reference of the container and children
    const container = useRef();
    // 2. set container height to (number of children) * viewport height, plus an additional viewport
    const viewport = 1500;
    const container_height = viewport * children_final.length + viewport;
    // 3. set children start position, evenly distributed with a half-viewport-offset
    const children_init = children_final.map((final, i) => viewport * (i + 0.5));
    // simple function to optimise calculation
    const clamp = (a, value, b) => {
        if (value < a) { return a; }
        else if (value > b) { return b; }
        else { return value; }
    };













    // -------------------------------- MAIN LOGIC --------------------------------
    // 6. let children watch scrollY, and update themself accrodingly
    //   now = max(initial, scrollY + final)
    const children_now = useMemo(
        () => {
            return children_final.map((final, i) => clamp(children_init[i], scrollY + final), container_height);
        },
        [scrollY],
    )
    const handleScroll = () => {
        // 5.set scrollY state in eventhandler (If it passes the 2nd-last viewport. don't update!)
        try {
            setScrollY(clamp(0, -container.current.getBoundingClientRect().top, container_height - viewport));
        } catch (e) {
            console.log('JuniorGolf/Levels [handleScroll]:', e);
        }
    };

    useEffect(() => {
        // 7. bind handleScroll to the scroll eventlistener of container
        document.addEventListener('scroll', handleScroll);
        return () => {
            // 8. remove event listeners before unmount
            document.removeEventListener('scroll', handleScroll);
        }
    }, []);









    // -------------------------------- INNER COMPOENNT --------------------------------
    const Level = ({ heading, description, index }) => {
        return (
            <div className='level' style={{top: children_now[index].toString() + 'px'}}>
                <h2>{heading}</h2>
                <p>{description}</p>
            </div>
        )
    }

    
    return (
        <div className="levels" ref={container} style={{ height: container_height.toString() + 'px' }}>
            <h1 style={{ top: children_now[0].toString() + 'px' }}>{data.h0}</h1>
            <p style={{ top: children_now[1].toString() + 'px' }}>{data.p0}</p>
            {Object.values(levels).map((value, i) =>
                <Level  heading={value.h0} 
                        description={value.p0} 
                        key={i + 2} 
                        index ={i + 2}/>
            )}
        </div>
    )
}

