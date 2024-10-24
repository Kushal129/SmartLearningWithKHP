    import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronUp } from 'react-icons/fa';

const BackToTop = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
        setVisible(window.pageYOffset > 300);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    className="fixed bottom-4 right-4"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.2 }}
                >
                    <motion.button
                        onClick={scrollToTop}
                        className="bg-purple-950 text-white p-2 rounded-full shadow-md hover:bg-purple-900 transition-all duration-200 transform hover:scale-105"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaChevronUp className="text-sm" />
                    </motion.button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default BackToTop;
