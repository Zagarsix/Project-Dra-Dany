import React, {useState, useEffect} from "react";

const ScrollToTopButton = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() =>{
        window.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    const onScrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth'});
    };

    return (
        <div className="scroll-to-top-button-container">
            {showButton && (
                <button className="scroll-to-top-button" onClick={onScrollTop}>
                    <i className="fa-solid fa-chevron-up fa-fade"></i>
                </button>
            )}
        </div>
    );
};

export default ScrollToTopButton;