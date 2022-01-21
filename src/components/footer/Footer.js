import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h5>CONTACT</h5>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes.
          </p>
          <p>bridgetmary.@gmail.com Tel: 080 7890 8982</p>
        </div>
        <div className="footer-right">
          <form>
            <div className="form-names">
              <input className="input-name" type="text" placeholder="Name" />
              <input className="input-email" type="email" placeholder="Email" />
            </div>
            <input className="input-phone" type="text" placeholder="Phone" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
            <button type="button">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
