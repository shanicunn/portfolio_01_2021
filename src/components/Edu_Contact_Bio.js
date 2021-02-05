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
                <p>SHANI CUNNINGHAM <br />
                    <email>shanicunn@gmail.com</email>
                </p>
                <h3 id="Logos-contact">
                <img src={email} alt="email"/>
                <img src={linkedIn} alt="linkedin"/>
                <img src={github} alt="github"/>
                <img src={instagram} alt="instagram"/>
            </h3>
            </section>

            <section className="bio">
                <h2 class="section-title" id="main-bio">About Me:</h2>
                <img src={headshot} alt="headshot" id="headshot"/>
                <aside id="blurb">Welcome to my site! 
                    My name is Shani (shaw-nee). I am an Atlanta transplant born and raised in Boston, MA with a love for the marrying of technology and creativity.<br/>
                    


                </aside>
            
            </section>
        </main>
    );
  }
  
  export default Edu_Contact_Bio;