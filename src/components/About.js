import React from "react";
import Links from "./Links"

function About( {image, bio, github, linkedin}) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && <p>{bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links
      github={github}
      linkedin={linkedin}
      />
    </div>
  );
}

export default About;
