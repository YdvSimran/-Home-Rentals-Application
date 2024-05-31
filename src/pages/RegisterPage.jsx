import React from "react";
import "../style/Register.scss";

function RegisterPage() {
  return (
    <div className="register">
      <div className="register_content">
        <form className="register_content_form">
          <input placeholder="First Name" name="firstname" required />
          <input placeholder="Last Name" name="lastname" required />
          <input placeholder="Email" name="email" type="email" required />
          <input
            placeholder="password"
            name="password"
            type="password"
            required
          />
          <input
            placeholder="Confirm the Password"
            name="confirmpassword"
            type="password"
            required
          />
          <input
            id="image"
            type="file"
            name="profileimage"
            accept="image/*"
            required
            style={{ display: "none" }}
          />
          <label htmlFor="image">
            <img src="/assets/addImage.png" alt="add profile picture" />
            <p>Upload Your Photos</p>
          </label>
          <button type="submit">REGISTER</button>
        </form>
        <a href="/login"> Already have an account? Log In Here</a>
      </div>
    </div>
  );
}

export default RegisterPage;
