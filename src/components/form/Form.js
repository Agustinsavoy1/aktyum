import React from "react";
import "./Form.css";

const Form = () => {
  return (
      <div className="">
          <div className="text-container">
              <h3>Contact me</h3>
          </div>
    <div class="form-container">
      <form action="https://formsubmit.co/your@email.com" method="POST" />
      <input type="text" name="name" required />
      <input type="email" name="email" required />
      <button type="submit" className="btn btn-primary">Send</button>
    </div>
    </div>
  );
};

export default Form;
