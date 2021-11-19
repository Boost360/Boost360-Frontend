
import React, {useRef, useEffect} from 'react'
import lottie from 'lottie-web'

function LoadingAnimation() {
    const container = useRef(null);
    useEffect(()=> {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: false,
            autoplay: true,
            path: 'https://assets7.lottiefiles.com/packages/lf20_q8cu0znb.json',
            speed: 0.5,
          });
    },[]);
    const backdropStyle = {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'var(--primary)',
        zIndex: '-1',
    };

    const lottieStyle = {
        width: '100%',
        height: '100%',
    }
    return (
        <div style={backdropStyle}>
            <div ref={container} className="lottie" style={lottieStyle}>
            </div>
        </div>
    )
}

export default LoadingAnimation
