import React from 'react';
import HomeImg from "../Images/Home.svg";
import CommonContent from './CommonContent';

const Home = () => {
    return (
        <>
            <CommonContent img={HomeImg} heading='Grow your business with' redirectLink='/services' buttonName='Get Started' />
        </>
    )
}

export default Home;