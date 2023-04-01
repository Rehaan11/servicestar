import React from "react";

const Contact = () => {
  return (
  <div className="contact">

    <main>

      <h1>Contact Us</h1>

      <form >

      <div>
        <lebel>Name</lebel>
        <input type="text" required placeholder="Abc" />
      </div>

      <div>
        <lebel>Email</lebel>
        <input type="text" required placeholder="Abc@xyz.com" />
      </div>

      <div>
        <lebel>Message</lebel>
        <input type="text" required placeholder="Tell us about your query..." />
      </div>

      <button type="submit">Send</button>
      </form>

    </main>

  </div>
  );
};

export default Contact;