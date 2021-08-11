import { useState } from "react";
import SocialMedia from "../SocialMedia/SocialMedia.component";

const ContactMe = () => {
  const [emptyFields, setEmptyFields] = useState(false)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const saveInput = (e) => {
    const { name, value } = e.target;
    if (name === "firstName") {
      setName(value);
      setEmptyFields(false)
    } else if (name === "email") {
      setEmail(value);
      setEmptyFields(false)
    } else if (name === "subject") {
      setSubject(value);
      setEmptyFields(false)
    } else if (name === "message") {
      setMessage(value);
      setEmptyFields(false)
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    if(name.length < 1 || email.length < 1 || subject.length < 1 || message.length < 1) return setEmptyFields(true)

    
    let details = {
      name,
      email,
      subject,
      message,
    };
    let response = await fetch("https://my-portfolio-contact.herokuapp.com/sendMail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    console.log(response.status);
    if (response.status === 200) {
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  return (

      <div className="contact-me-grid contact-me-container" id="contact">
        <div className="contact-me-form">
          <div className="contact-me-title">
            <span className="text-like-html">{"<h2>"}</span>
            <h2>Contact Me</h2>
            <span className="text-like-html">{"</h2>"}</span>
          </div>
          <span className="text-like-html">{"<form>"}</span>
            {emptyFields ? <p className="empty-fields">All fields are required *</p> : null}
          <form action="">
            <div className="form-name-email">
              <input
                type="text"
                placeholder="Name"
                id="name"
                name="firstName"
                onChange={saveInput}
                value={name}
              />
              <input
                type="text"
                placeholder="Email"
                id="email"
                name="email"
                onChange={saveInput}
                value={email}
              />
            </div>
            <div className="form-subject">
              <input
                type="text"
                placeholder="Subject"
                id="subject"
                name="subject"
                onChange={saveInput}
                value={subject}
              />
            </div>
            <div className="form-textarea">
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Message"
                onChange={saveInput}
                value={message}
              ></textarea>
            </div>
            <div className="form-btn">
              <span className="text-like-html">
                {
                  "if ( ready ) { btn.addEventListener('click', () => { console.log ('Sending...') } ) }"
                }
              </span>
              <button
                type="submit"
                className="btn-send-message"
                onClick={sendEmail}
              >
                Send Message
              </button>
            </div>
          </form>
          <span className="text-like-html">{"</form>"}</span>
        </div>
        <SocialMedia />
      </div>
  );
};

export default ContactMe;
