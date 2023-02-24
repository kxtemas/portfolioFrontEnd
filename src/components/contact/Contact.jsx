import React from "react";
import "./Contact.css";
import Phone from "../../img/Phone.png";
import Email from "../../img/email.png";
import Address from "../../img/Address.png";
import Github from "../../img/github.png";
import Link from "../../img/link.png";
import { useState, useContext } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { ThemeContext } from "../../context";

/**
 * Date: 02/12/22
 * @author Katie Munoz
 * @version 2.
 *
 */ 
function Contact() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

    /*
Setting up mailgun const
*/
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    /*
Error message for when something is null
*/
    if (!email || !subject || !message) {
      return toast.error('Please fill email, subject and message');
    }
    try {
      setLoading(true);
      const { data } = await axios.post(`/api/email`, {
        email,
        subject,
        message,
      });
      setLoading(false);
    /* success message for when it sents*/
      toast.success(data.message);
    } catch (err) {
      setLoading(false);
      toast.error(
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message
      );
    }
  };

  return (
      /* setting up layout for contact information*/
    <div className="c">
      <ToastContainer position="bottom-center" limit={1} />
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <a id="Contact"></a>
          <h1 className="c-title">Get in Touch</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} className="c-icon" alt="phone" />
              +1 623-238-2541
            </div>
            <div className="c-info-item">
              <img src={Email} className="c-icon" alt="email" />
              kxtemas01@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Address} className="c-icon" alt="address" />
              Surprise, AZ
            </div>
            <div className="c-info-item">
              <a href="https://github.com/kxtemas"><img src={Github} className="c-icon" alt="github" /></a>
              /kxtemas
            </div>
            <div className="c-info-item">
              <a href="https://www.linkedin.com/in/katiemunoz01/"><img src={Link} className="c-icon" alt="link" /></a>
              /Katiemunoz01
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Let's Connect</b>
            <p></p>
            Thank you for visiting my portfolio! If you would like to get in touch with me, please feel free to send an email.
            I would be happy to hear from you and answer any questions you may have. I look forward to connecting with you soon!
          </p>
          <p></p>
       
          <form onSubmit={submitHandler}>
       
            <label htmlFor="email">Email  </label>
            <br/>
            <input
              /* setting up form for contacts using mailgun*/
              id="email"
              style={{ backgroundColor: darkMode && "#333" }}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="email"
              name="email"
            />
            <p></p>
            <label htmlFor="subject">Subject  </label>
            <br/>
            <input
                /* setting up form for contacts using mailgun*/
              id="subject"
              type="text"
              onChange={(e) => setSubject(e.target.value)}
              style={{ backgroundColor: darkMode && "#333" }}
              placeholder="Subject"
              name="user_subject"
            />
            <p></p>
            <label htmlFor="message">Message</label>
            <textarea
                /* setting up form for contacts using mailgun*/
              id="message"
              onChange={(e) => setMessage(e.target.value)}
              style={{ backgroundColor: darkMode && "#333" }}
              rows="5"
              placeholder="Message"
              name="message"
            ></textarea>
            <div>
              <label></label>
           
              <button disabled={loading} type="submit">  
  
                {loading ? 'Sending...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Contact;