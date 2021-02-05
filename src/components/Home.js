import React from 'react';
import email from '../assets/email-32.png';
import linkedIn from '../assets/linkedin-5-32.png';
import github from '../assets/github-10-32.png';
import instagram from '../assets/instagram-32.png';

function Home() {
    return (
        <div className="Home">
            <h1 id="Title">Front End <span id="Shani">Shani</span></h1>
            <h2 id="Title-Secondary">  Innovative. Efficient. Responsive.</h2>
            <h3 id="Logos">
                <img src={email} alt="email"/>
                <img src={linkedIn} alt="linkedin"/>
                <img src={github} alt="github"/>
                <img src={instagram} alt="instagram"/>
            </h3>
        </div>
    );
}

export default Home;