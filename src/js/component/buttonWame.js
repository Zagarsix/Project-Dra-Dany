import React from "react";
import what1 from "../../img/what1.png";

const ButtonWame = () => {
    return (
        <div className="fixed-button-container">
            <div className="tooltip-container">
                <a className="fiex-button" target="_blank" rel="noopener noreferrer" href="https://wa.me/56973655180/">
                    <img className="Wame"
                        src={what1}
                        alt="logo-brand"
                        width="60"
                        height="60"
                    />
                </a>
                <div className="tooltip-text">¿Tienes alguna pregunta?</div>
            </div>
        </div>
    );
}

export default ButtonWame;