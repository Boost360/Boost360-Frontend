// author @sarah-hao
import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react'
import './Levels.css'


export default function Levels({ data }) {
    // ---------------------------- SET UP -------------------------------
    const [scrollY, setScrollY] = useState(0);
    const container = useRef();
    const levels = data.levels;
    // Position for each child
    const temp = [30, 150];
    const positions = temp.concat(Object.keys(levels).map((key, i) => i * 100 + 210));
    // Container height 
    const viewport = 1500;
    const container_height = viewport * positions.length + viewport;
    // Defines the position scroller need to pass to display each child
    const pass = positions.map((final, i) => viewport * (i + 0) + 1);
    // Simple function to optimise calculation
    const clamp = (a, value, b) => {
        if (value < a) { return a; }
        else if (value > b) { return b; }
        else { return value; }
    };













    // -------------------------------- SCROLL POSITION --------------------------------
    const handleScroll = () => {
        // Set scrollY state in eventhandler (If it passes the 2nd-last viewport. don't update!)
        try {
            setScrollY(clamp(0, -container.current.getBoundingClientRect().top, container_height - viewport));
        } catch (e) {
            console.log('JuniorGolf/Levels [handleScroll]:', e);
        }
    };

    useEffect(() => {
        // Bind handleScroll to the scroll eventlistener of container
        document.addEventListener('scroll', handleScroll);
        return () => {
            // Remove event listeners before unmount
            document.removeEventListener('scroll', handleScroll);
        }
    }, []);









    // -------------------------------- INNER COMPOENNT --------------------------------
    const Level = ({show, heading, description, style}) => {
        return (
            show && <div className='level' style={style}>
                <h2>{heading}</h2>
                <p>{description}</p>
            </div>
        )
    }

    
    return (
        <div className="levels" ref={container} style={{ height: container_height.toString() + 'px' }}>
            {scrollY >= pass[0] && <h1 style={{ top: positions[0].toString() + 'px' }}>{data.h0}</h1>}
            {scrollY >= pass[1] && <p style={{ top: positions[1].toString() + 'px' }}>{data.p0}</p>}
            {Object.values(levels).map((value, i) =>
                <Level  show={scrollY >= pass[i + 2]}
                        heading={value.h0} 
                        description={value.p0} 
                        style={{top: positions[i + 2].toString() + 'px'}}
                        key={i}/>
            )}
        </div>
    )
}

