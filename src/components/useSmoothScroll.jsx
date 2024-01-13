import { useRef, useEffect } from 'react';

const useSmoothScroll = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;

    let targetScroll = 0;
    let currentScroll = 0;
    let rafId = null;

    const lerp = (start, end, factor) => {
      return (1 - factor) * start + factor * end;
    };

    const animate = () => {
      currentScroll = lerp(currentScroll, targetScroll, 0.05);
      element.style.transform = `translate3d(0, -${currentScroll}px, 0)`;

      if (Math.abs(currentScroll - targetScroll) > 0.1) {
        rafId = requestAnimationFrame(animate);
      }
    };

    const onScroll = () => {
      targetScroll = window.scrollY;
      if (!rafId) {
        rafId = requestAnimationFrame(animate);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return scrollRef;
};
export default useSmoothScroll;
