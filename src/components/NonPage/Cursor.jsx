import React, { useState, useEffect, useRef } from 'react';
import './Cursor.css';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const pInner = useRef({ x: 0, y: 0 });
    const pOuter = useRef({ x: 0, y: 0 });
    const cInner = useRef();
    const cOuter = useRef();
    const requestRef = useRef();

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.pageX, y: e.pageY });
        };

        const animate = () => {
            pInner.current = {
                x: pInner.current.x + (mousePosition.x - pInner.current.x) / 5,
                y: pInner.current.y + (mousePosition.y - pInner.current.y) / 5
            };
            pOuter.current = {
                x: pOuter.current.x + (mousePosition.x - pOuter.current.x) / 10,
                y: pOuter.current.y + (mousePosition.y - pOuter.current.y) / 10
            };

            cInner.current.style.left = `${pInner.current.x}px`;
            cInner.current.style.top = `${pInner.current.y}px`;
            cOuter.current.style.left = `${pOuter.current.x}px`;
            cOuter.current.style.top = `${pOuter.current.y}px`;

            requestRef.current = requestAnimationFrame(animate);
        };

        document.addEventListener('mousemove', updateMousePosition);
        requestRef.current = requestAnimationFrame(animate);
        return () => {
            document.removeEventListener('mousemove', updateMousePosition);
            cancelAnimationFrame(requestRef.current);
        };
    }, [mousePosition]);

    return (
        <>
            <div ref={cInner} id="cursor-inner"/>
            <div ref={cOuter} id="cursor-outer"/>
        </>
    );
};

export default CustomCursor;