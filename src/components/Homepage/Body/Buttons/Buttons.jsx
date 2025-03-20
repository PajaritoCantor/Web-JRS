import React from 'react';
import './Buttons.css';

const Buttons = ({text,url}) => {
    return (
        <>
            <div className="section-title">
                <a href={url} className="title-button">{text}</a>
            </div>
        </>
    );
};

export default Buttons;