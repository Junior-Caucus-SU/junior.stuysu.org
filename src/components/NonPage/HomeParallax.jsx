import Homecoming from '../../Images/homecoming.png';
import GloriousLeaders from '../../Images/gloriousLeaders.png';
import ParallaxBackground from '../../Images/parallaxBackgound.png';
import Battle from '../../Images/battle.png';
import PhotoCapture from '../../Images/photoCapture.png'
import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const images = [
  { url: Homecoming, size: 0.5, alt:"homecoming image" },
  { url: GloriousLeaders, size: 2, alt:"polaroid josephine, grace, ryan" },
  { url: Battle, size: 2.5, alt:"battle" },
  { url: PhotoCapture, size: 3, alt:"photocapture" },
  // Add more images with their respective sizes
];

const offsets = [50, 25, 75, 36];

const backgroundStyle = {
  backgroundImage: ParallaxBackground,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  zIndex: -1,
};

const ParallaxImages = () => {

  return (
    <div>
        <Parallax pages = {images.length + 1}>
            <ParallaxLayer
                offset={0}
                speed={1}
                factor={images.length * 0.25}
                style={{
                    backgroundImage: `url(${ParallaxBackground})`,
                    backgroundSize: 'cover',
                    height: '100vh',
                }}
            />
            {images.map((image, index) => (
                <ParallaxLayer offset = {index * 0.25 + 0.1} speed={image.size * 0.5} style={{justifyContent: 'flex-end'}}>
                    <img
                        src = {image.url}
                        alt = {image.alt}
                        style={{
                            position:'absolute', 
                            width: '25%', 
                            height: 'auto', 
                            right: `${offsets[index]}%`,
                        }}
                    />
                </ParallaxLayer>
            ))}
        </Parallax>
    </div>
  )
//   return (
//     <div>
//       <animated.div style={{ ...backgroundStyle, transform: xy.interpolate(trans) }}></animated.div>
//       <div
//         style={{ height: '1000vh', overflowY: 'scroll' }}
//         onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y, 10) })}
//       >
//         {images.map((image, index) => (
//           <animated.div
//             key={index}
//             style={{
//               transform: xy.interpolate((x, y) => trans(x / image.size, y / image.size)),
//             }}
//           >
//             <img
//               src={image.url}
//               alt={image.alt}
//               style={{ width: '50%', height: 'auto', display: 'block' }}
//             />
//           </animated.div>
//         ))}
//       </div>
//     </div>
//   );
};

export default ParallaxImages;