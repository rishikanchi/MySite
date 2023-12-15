import { React } from 'react';
import Intro from '../components/sections/Intro';
import AboutMe from '../components/sections/AboutMe';
import Programming from '../components/sections/Programming';
import Organizations from '../components/sections/Organizations';
import ContactMe from '../components/sections/ContactMe';
import Navbar from '../components/sections/Navbar';

function MainPage() {
    return (
        <>
            <Navbar />
            <Intro />
            <AboutMe />
            <Programming />
            <Organizations />
            <ContactMe />
        </>
    );
}

export default MainPage;