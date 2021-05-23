import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <footer className="bg-light text-center">
                <p>© {currentYear} | Muskan Agarwal | All Rights Reserved.</p>
            </footer>
        </>
    )
}

export default Footer;