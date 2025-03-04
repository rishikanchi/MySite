import { React } from 'react';
import Intro from '../components/sections/Intro';
import AboutMe from '../components/sections/AboutMe';
import Programming from '../components/sections/Programming';
import Research from '../components/sections/Research';
import Outreach from '../components/sections/Outreach';
import ContactMe from '../components/sections/ContactMe';
import Navbar from '../components/sections/Navbar';

function MainPage() {
    return (
        <>
            <Navbar />
            <Intro />
            <AboutMe />
            <Programming />
            <Research />
            <Outreach />
            <ContactMe />
        </>
    );
}

export default MainPage;