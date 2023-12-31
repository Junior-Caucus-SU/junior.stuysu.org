import Homecoming from '../../Images/homecoming.png';
import GloriousLeaders from '../../Images/gloriousLeaders.png';
import ParallaxBackground from '../../Images/parallaxBackgound.png';
import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const images = [
  { url: Homecoming, size: 0.5, alt:"homecoming image" },
  { url: GloriousLeaders, size: 2, alt:"polaroid josephine, grace, ryan" },
  // Add more images with their respective sizes
];

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
                factor={images.length + 1}
                style={{
                    backgroundImage: `url(${ParallaxBackground})`,
                    backgroundSize: 'cover',
                }}
            />
            {images.map((image, index) => (
                <ParallaxLayer offset = {index * 0.5} speed={image.size * 0.5}>
                    <img
                        src = {image.url}
                        alt = {image.alt}
                        style={{ width: '50%', height: 'auto'}}
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