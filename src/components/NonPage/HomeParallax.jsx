import Homecoming from '../../Images/homecoming.png';
import GloriousLeaders from '../../Images/gloriousLeaders.png';
import ParallaxBackground from '../../Images/parallaxBackgound.png';
import Battle from '../../Images/battle.png';
import PhotoCapture from '../../Images/photoCapture.png'
import React from 'react';
import { ParallaxProvider, ParallaxBanner, ParallaxBannerLayer, Parallax } from 'react-scroll-parallax';

const images = [
    { url: PhotoCapture, scrollspeed: 15, alt:"photocapture" },
    { url: Battle, scrollspeed: 10, alt:"battle" },
    { url: GloriousLeaders, scrollspeed: 10, alt:"polaroid josephine, grace, ryan" },
  // Add more images with their respective strengths
];

const offsets = [0, 60, 10];

const ParallaxImages = () => {

  return (
    <div>
      <ParallaxProvider>
        <ParallaxBanner
          className="your-banner-class"
          layers={[
            {
              image: ParallaxBackground,
              amount: 0.5,
              slowerScrollRate: true,
            },
          ]}
          style={{
            height: '88vw',
          }}
        >
            <ParallaxBannerLayer speed={-20}>
                <img
                src={Homecoming}
                alt="homecoming"
                style={{
                    width: "60vw",
                    display: "block",
                    "margin-left": "auto",
                    "margin-right": "auto"
                }}
                />
            </ParallaxBannerLayer>
          {images.map((image, index) => (
            <Parallax
                easing={[1, -0.2 , 1, 1]} 
                speed={image.scrollspeed}
                translateY={[50 - index * 50, -50 - index*100]} 
                translateX={[offsets[index],offsets[index]]}
            >
                <img
              key={index}
              src={image.url}
              alt={image.alt}
              style={{
                position: 'inherit',
                height: '50vh',
              }}
            />
            </Parallax>
          ))}
        </ParallaxBanner>
      </ParallaxProvider>
    </div>
  );
};

export default ParallaxImages;