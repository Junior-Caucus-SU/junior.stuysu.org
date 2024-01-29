import Homecoming from '../../Images/homecoming.png';
import GloriousLeaders from '../../Images/gloriousLeaders.png';
import ParallaxBackground from '../../Images/parallaxBackgound.png';
import Battle from '../../Images/battle.png';
import PhotoCapture from '../../Images/photoCapture.png'
import React from 'react';
import { ParallaxProvider, ParallaxBanner, ParallaxBannerLayer, Parallax } from 'react-scroll-parallax';

const images = [
  { url: GloriousLeaders, scrollspeed: 5, alt: "polaroid josephine, grace, ryan" },
  { url: Battle, scrollspeed: 10, alt: "battle" },
  { url: PhotoCapture, scrollspeed: 40, alt: "photocapture" },
];

const offsets = [10, 64, 10];

const ParallaxImages = () => {

  return (
    <div>
      <ParallaxProvider>
        <ParallaxBanner
          className="parallaxView"
          layers={[
            {
              image: ParallaxBackground,
              amount: 0.5,
              slowerScrollRate: true,
            },
          ]}
          style={{
            height: '80vw',
          }}
        >
          <ParallaxBannerLayer speed={-20}>
            <img
              src={Homecoming}
              alt="homecoming"
              style={{
                width: "60vw",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto"
              }}
            />
          </ParallaxBannerLayer>
          {images.map((image, index) => {
            let translateY;
            if (image.url === PhotoCapture) {
              translateY = [-75, -300];
            } else {
              translateY = [50, -50];
            }
            return (
              <Parallax
                key={index}
                easing={[1, -0.2, 0.5, 5]}
                translateY={translateY}
                translateX={[offsets[index], offsets[index]]}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  style={{
                    position: 'inherit',
                    width: '40%',
                  }}
                />
              </Parallax>
            );
          })}
        </ParallaxBanner>
      </ParallaxProvider>
    </div>
  );
};

export default ParallaxImages;