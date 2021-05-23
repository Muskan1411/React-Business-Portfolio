import React from 'react';
import AboutImg from "../Images/About.svg";
import CommonContent from './CommonContent';

const About = () => {
    return (
        <>
            <CommonContent img={AboutImg} heading='Welcome to About Page' redirectLink='/contactus' buttonName='Contact Us' />
        </>
    )
}

export default About;