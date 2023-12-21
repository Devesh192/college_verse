import React, { useEffect, useState } from 'react';
import './type1.css'; // Create a CSS file for styling

const TypewriterEffect = ({ text }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            if (currentIndex < text.length) {
                setDisplayText((prevText) => prevText + text[currentIndex]);
                setCurrentIndex((prevIndex) => prevIndex + 1);
            } else {
                clearInterval(timer);
            }
        }, 100); // Adjust the speed by changing the interval (in milliseconds)
        return () => {
            clearInterval(timer);
        };
    }, [currentIndex, text]);

    return <div className="typewriter">{displayText}</div>;
};

export default TypewriterEffect;
