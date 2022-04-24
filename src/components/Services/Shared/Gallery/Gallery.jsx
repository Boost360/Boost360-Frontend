import React from 'react';
import { Carousel } from 'react-carousel-minimal';


function Gallery({images}) {
    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'normal',
        display: 'none'
      }
      const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
      }
      const containerStyle = {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh'
      }
      return (
        <div style={containerStyle}>
          <Carousel
            data={images}
            time={3000}
            width="100vw"
            height="100vh"
            captionStyle={captionStyle}
            radius="0px"
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={false}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={false}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxHeight: "100%"
            }}
          />
        </div>
      );
}

export default Gallery;