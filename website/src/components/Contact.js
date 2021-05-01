import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="cards">
      <h1>Contact</h1> <br />
      <div className="cards__container">
        <h3>
          email: <t />
          <a id="link" href="mailto:hab8@mcmaster.ca" target="_blank">
            hab8@mcmaster.ca{" "}
          </a>{" "}
        </h3>
        <h3>
          linkedin: <t />
          <a
            id="link"
            href="https://www.linkedin.com/in/quinn-ha/"
            target="_blank"
          >
            {" "}
            /in/quinn-ha
          </a>
        </h3>
        <h3>
          github:{" "}
          <a id="link" href="https://github.com/quinnha" target="_blank">
            {" "}
            quinnha
          </a>
        </h3>
      </div>
      <h1>
        {" "}
        <br />
        <a
          id="link"
          href="https://docs.google.com/document/d/1YTxMZde4Gpqwwjoo6V-IoAvldpWYAWeJuWrYemFB2jw/edit"
          target="_blank"
        >
          {" "}
          Resume{" "}
        </a>
      </h1>
    </div>
  );
}

export default Contact;
