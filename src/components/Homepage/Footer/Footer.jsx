import React from 'react';
import './Footer.css'; // Asegúrate de crear este archivo CSS

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="footer-container">
                <div className="copyright">
                    © Copyright {new Date().getFullYear()} Nombre-De-Tu-Empresa. All rights reserved
                </div>
                <div className="footer-links">
                    <a href="/privacy-policy">Privacy Policy</a>
                    <span className="separator">|</span>
                    <a href="/terms">Terms of use</a>
                    <span className="separator">|</span>
                    <a href="/accessibility">Accessibility Statement</a>
                </div>
                <div className="credits">
                    Website By <a href="https://tudominio.com">PajaritoCantor</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;