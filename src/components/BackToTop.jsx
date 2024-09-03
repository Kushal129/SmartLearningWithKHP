import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const BackToTop = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className="fixed bottom-4 right-4">
            {visible && (
                <button
                    onClick={scrollToTop}
                    className="bg-purple-500 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition-colors duration-300"
                >
                    <FaArrowUp />
                </button>
            )}
        </div>
    );
};

export default BackToTop;
