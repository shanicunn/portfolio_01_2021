import React from 'react';
import email from '../assets/email-32.png';
import linkedIn from '../assets/linkedin-5-32.png';
import github from '../assets/github-10-32.png';
import instagram from '../assets/instagram-32.png';
import headshot from '../assets/shaniedits-1.jpg';

function Edu_Contact_Bio() {
    return (
        <main className="Edu_Contact_Bio">
            <section className="education">
                <h2 class="section-title" id="main-education">Education:</h2>
                <article>DEAN COLLEGE<br/>
                Associate of Arts, Psychology</article>
                <br/>
                <article>PER SCHOLAS<br/>
                Software Engineering</article>
            </section>

            <section className="contact">
                <h2 class="section-title" id="main-contact">Contact Me:</h2>
                <article>
                     <p>SHANI CUNNINGHAM <br />
                    <email>shanicunn@gmail.com</email>
                </p>
                <h3 id="Logos-contact">
                <img src={email} alt="email"/>
                <img src={linkedIn} alt="linkedin"/>
                <img src={github} alt="github"/>
                <img src={instagram} alt="instagram"/>
            </h3>
                </article>
               
            </section>

            <section className="bio">
                <h2 class="section-title" id="main-bio">About Me:</h2>
                <img src={headshot} alt="headshot" id="headshot"/>
                <aside id="blurb">Welcome to my site! 
                Originally from Boston, but currently residing just outside of Atlanta, I am a junior software developer with a strong interest in creating innovative programs. <br /> <br />

Out of high school, I went into a Psychology program and graduated Cum Laude with an Associate of Arts. I was introduced to software development while taking Introduction to Programming, a general required course for a baccalaureate program, and was instantly intrigued. My new interest became a hobby as I drowned myself in Linkedin Learning videos/Codecademy videos and then I realized this is something I could proudly do everyday as a professional. <br /> <br />

After two years of software engineering exploration, I was lucky to be accepted into Per Scholas where I was able to specifically sharpen my skills in JavaScript, Java, and CSS. I loved the experience, and I am in search of a role that will enable me to utilize these skills professionally. 
                    


                </aside>
            
            </section>
        </main>
    );
  }
  
  export default Edu_Contact_Bio;