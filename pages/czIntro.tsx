import { useState } from 'react';

import Start from '../components/start';
import Greetings from '../components/greetings';
import Services from '../components/services';
import Projects from '../components/projects';
import Team from '../components/team';
import Contacts from '../components/contacts';
import About from '../components/about';
import Drafts from '../components/drafts';
import Concepts from '../components/concepts';
import NavbarMenu from '../components/navbarMenu';
import NavbarTrans from '../components/navbarTranslations';

import 'bootstrap/dist/css/bootstrap.min.css';


function CzIntro() {

    const [language, setLanguage] = useState<'en' | 'es' | 'pt'>('en');

    const handleLanguage = (lang: ('en' | 'es' | 'pt')) => setLanguage(lang);

    return <>

        <NavbarMenu language={language} />
        <NavbarTrans handleLanguage={handleLanguage} />
        <Start language={language} />
        <Greetings language={language} />
        <Services language={language} />
        <Projects language={language} />
        <Team language={language} />
        <Contacts language={language} />
        <About language={language} />
        <Drafts language={language} />
        <Concepts language={language} />

    </>;
}

export default CzIntro