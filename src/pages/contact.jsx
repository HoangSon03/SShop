import React from "react";
import product1 from "../assets/products/shopping.jpg";

export const Contact = () => {
  const clearContact = (e) => {
    e.preventDefault();
  };
  return (
    <div className="contact">
      <div
        className="leftSide"
       style={{ backgroundImage: `url(${product1})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button onClick={clearContact} type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  );
};
