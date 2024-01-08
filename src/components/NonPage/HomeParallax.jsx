import Homecoming from '../../Images/homecoming.png';
import GloriousLeaders from '../../Images/gloriousLeaders.png';
import ParallaxBackground from '../../Images/parallaxBackgound.png';
import Battle from '../../Images/battle.png';
import PhotoCapture from '../../Images/photoCapture.png'
import React from 'react';
import { ParallaxProvider, ParallaxBanner, Parallax } from 'react-scroll-parallax';

const images = [
  { url: Homecoming, scrollspeed: -10, alt: "homecoming image" },
  { url: GloriousLeaders, scrollspeed: 5, alt: "polaroid josephine, grace, ryan" },
  { url: Battle, scrollspeed: 10, alt: "battle" },
  { url: PhotoCapture, scrollspeed: 15, alt: "photocapture" },
  // Add more images with their respective strengths
];

const offsets = [50, 25, 75, 36];

const ParallaxImages = () => {

  return (
    <div>
      <ParallaxProvider>
        <ParallaxBanner
          className="your-banner-class" // obvious chatGPT
          layers={[
            {
              image: ParallaxBackground,
              amount: 0.5,
              slowerScrollRate: true,
            },
          ]}
          style={{
            height: '300vh',
          }}
        >
          {images.map((image, index) => (
            <Parallax
              easing={[1, -0.2, 0.5, 1.34]}
              translateY={[90, -90]}
              translateX={[offsets[index], offsets[index]]}
            >
              <img
                key={index}
                src={image.url}
                alt={image.alt}
                style={{
                  position: 'inherit',
                  width: '25%',
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