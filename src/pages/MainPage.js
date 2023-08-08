import { React } from 'react';
import Navbar from '../components/Navbar';
import Intro from '../components/Intro';
import AboutMe from '../components/AboutMe';

function MainPage() {
    return (
        <>
            <Navbar />
            <Intro />
            <AboutMe />
        </>
    );
}

export default MainPage;