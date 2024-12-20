import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abhijeet Bhosale </span>
            from <span className="purple"> Mumbai, India.</span>
            <br />
            I am currently Intern as a Full Stack developer at Bookeventz.com.
            <br />
            I develop java Applications, PHP Laravel Applications, Web Applications and Database Management.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Social Work
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Drawing
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Abhijeet Bhosale</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
