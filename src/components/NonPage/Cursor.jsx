import React, { useState, useEffect, useRef } from 'react';
import './Cursor.css';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isInteractableHovered, setIsInteractableHovered] = useState(false);
    const pInner = useRef({ x: 0, y: 0 });
    const pOuter = useRef({ x: 0, y: 0 });
    const cInner = useRef();
    const cOuter = useRef();
    const requestRef = useRef();

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.pageX, y: e.pageY });
        };

        const addInteractableListeners = () => {
            const interactables = document.querySelectorAll('a, .interactable');
            interactables.forEach(el => {
                el.addEventListener('mouseenter', () => setIsInteractableHovered(true));
                el.addEventListener('mouseleave', () => setIsInteractableHovered(false));
            });
        };
        addInteractableListeners();

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
            const interactables = document.querySelectorAll('a, .interactable');
            interactables.forEach(el => {
                el.removeEventListener('mouseenter', () => setIsInteractableHovered(true));
                el.removeEventListener('mouseleave', () => setIsInteractableHovered(false));
            });
        };
    }, [mousePosition]);

    useEffect(() => {
        if (isInteractableHovered) {
            cInner.current.style.width = '30px';
            cInner.current.style.height = '30px';
            cOuter.current.style.opacity = '0';
        } else {
            cInner.current.style.width = '5px';
            cInner.current.style.height = '5px';
            cOuter.current.style.opacity = '1';
        }
    }, [isInteractableHovered]);


    return (
        <>
            <div ref={cInner} id="cursor-inner" />
            <div ref={cOuter} id="cursor-outer" />
        </>
    );
};

export default CustomCursor;