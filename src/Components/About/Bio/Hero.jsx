import React, { Component } from "react";
import Headshot from "./Headshot.png";

export default class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <section className="headShotContainer">
          <div className="circle">
            <img
              src={Headshot}
              className="mainHeadShot"
              alt="Cam Corrado Headshot"
              loading="lazy"
            />
          </div>
        </section>
        <section className="bio">
          <p>
            As a technically-minded professional with over a decade of
            experience, my career has centered on bridging the digital divide by
            leveraging technology and storytelling.
          </p>
          <p>
            A Bachelor of Arts in Film & Media Studies from SUNY Purchase laid
            the foundation for my career, equipping me with a deep understanding
            of the technical and creative aspects of video production. My work
            ranges from providing expert IT support with an empathic approach at
            Helpt, the end-to-end production of educational children’s music
            videos with Music with Miss Merry, and supporting LGBTQ+ creators
            through TIM Global; always focusing on the effective use of video
            and technology to create impactful content.
          </p>
          <p>
            Currently, I’m pursuing IT certifications, including Google’s IT
            Support Professional certification and CompTIA’s A+, Network+, and
            Security+ certifications, to further expand my knowledge and skills.
          </p>
          <p>
            My technical expertise also extends into Full-Stack Web Development,
            where I’ve built user-friendly, interactive apps and websites with
            HTML, CSS, JavaScript, React, and SQL - including this very site
            you’re visiting today! I am also passionate about preserving analog
            media through digitization, ensuring endangered formats like VHS are
            saved for future generations.
          </p>
          <p>
            In my free time, you’ll find me playing board and video games with
            friends, relaxing in my hammock with my cat, attracting wildlife to
            my garden, treasure-hunting at yard sales, or enjoying some
            questionably good horror movies.
          </p>
          <p>
            Thanks for stopping by! I look forward to connecting and seeing how
            I can bring my skills to your team.
          </p>
        </section>
      </section>
    );
  }
}
