import { React } from 'react';
import Intro from '../components/sections/Intro';
import AboutMe from '../components/sections/AboutMe';
import Programming from '../components/sections/Programming';
import Organizations from '../components/sections/Organizations';

function MainPage() {
    return (
        <>
            <Intro />
            <AboutMe />
            <Programming />
            <Organizations />
        </>
    );
}

export default MainPage;