import { React } from 'react';
import Navbar from '../components/Navbar';
import Intro from '../components/Intro';
import AboutMe from '../components/AboutMe';
import Programming from '../components/Programming';
import DigitalScholars from '../components/DigitalScholars';

function MainPage() {
    return (
        <>
            <Intro />
            <AboutMe />
            <Programming />
        </>
    );
}

export default MainPage;