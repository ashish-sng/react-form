import React, { useState, useEffect } from "react";
import "./MultipleInput.css";

function MultipleInput() {
  const options = ["Option 1", "Option 2", "Option 3"];

  const [skills, setSkills] = useState([]);
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
    selected: [],
  });

  useEffect(() => {
    if (
      userDetails.name &&
      userDetails.email &&
      userDetails.password &&
      userDetails.selected.length > 0
    ) {
      console.log("Form is valid");
    } else {
      console.log("Form is invalid");
    }
  }, [userDetails]);

  const handleInput = (e) => {
    // console.log(e.target.name);
    if (e.target.name === "selected") {
      const selected = e.target.value;
      if (skills.includes(selected)) {
        setSkills(skills.filter((skill) => skill !== selected));
      } else {
        setSkills([...skills, selected]);
      }
      setUserDetails({ ...userDetails, selected: skills });
    } else {
      setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
    }
    // console.log(skills);
    // console.log(userDetails);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserDetails({ name: "", email: "", password: "", selected: "" });
    console.log(userDetails);
  };

  const isFormValid = () => {
    return true;
  };
  return (
    <div className="form">
      <form action="" onSubmit={handleSubmit}>
        <div>
          <input
            className="input"
            autoComplete="off"
            placeholder="Name"
            type="text"
            id="name"
            name="name"
            value={userDetails.name}
            onChange={handleInput}
            style={{ textTransform: "capitalize" }}
            required
          />
        </div>
        <div>
          <input
            className="input"
            autoComplete="off"
            placeholder="Email"
            type="email"
            id="email"
            name="email"
            value={userDetails.email}
            onChange={handleInput}
            required
          />
        </div>
        <div>
          <input
            className="input"
            autoComplete="off"
            placeholder="Password"
            type="password"
            id="password"
            name="password"
            value={userDetails.password}
            onChange={handleInput}
            required
          />
        </div>
        <div>
          <select
            defaultValue={"default"}
            required
            name="selected"
            onChange={handleInput}
          >
            <option value="default" disabled hidden>
              Choose a Skill
            </option>
            {options.map((option, index) => {
              return <option key={index}>{option}</option>;
            })}
          </select>
        </div>
        <div>
          <button className="button" type="submit" disabled={!isFormValid}>
            CLAIM YOUR FREE TRAIL
          </button>
        </div>
        <div className="terms">
          By clicking the button, you are agreeing to our{" "}
          <a href="#">Terms and Services</a>
        </div>
      </form>
    </div>
  );
}

export default MultipleInput;
