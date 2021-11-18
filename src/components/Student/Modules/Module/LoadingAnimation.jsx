import React, {useRef, useEffect} from 'react'
import lottie from 'lottie-web'

function LoadingAnimation() {
    const container = useRef(null);
    useEffect(()=> {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'https://assets7.lottiefiles.com/packages/lf20_Stt1R6.json',
            speed: 0.5,
          });
    },[]);
    const backdropStyle = {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'red',
        zIndex: '1000',
    };

    const lottieStyle = {
        width: '100px',
        height: '100px',
    }
    return (
        <div style={backdropStyle}>
            <div ref={container} className="lottie" style={lottieStyle}></div>
        </div>
    )
}

export default LoadingAnimation
