import React, { useState, useEffect } from "react";
import "./MultipleInput.css";
import FormBar from "./FormBar";
import cross from "../icon/cross.png";

function MultipleInput() {
  const options = ["JS", "HTML", "CSS", "ReactJS", "NodeJS", "Python"];

  const [skills, setSkills] = useState([]);
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showDiv, setShowDiv] = useState(false);
  const [subscribe, setSubscribe] = useState(false);

  useEffect(() => {
    if (
      userDetails.name &&
      userDetails.email &&
      userDetails.password &&
      skills.length > 0
    ) {
      isFormValid(true);
    } else {
      isFormValid(false);
    }
    console.log("here");
  }, [userDetails,skills]);

  const handleInput = (e) => {
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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserDetails({ name: "", email: "", password: ""});
    setSkills([]);
  };

  const isFormValid = (flag) => {
    setShowDiv(flag);
  };

  const setSub = () => {
    setSubscribe(true);
  }
  
  const filterSkill = (e) => {
    console.log(e.target.parentElement.innerText);
    const skillChosen = e.target.parentElement.innerText;
    setSkills(skills.filter((skill) => skill !== skillChosen));
    console.log(skills);
  }

  return (
    <>
      <FormBar subscribed={subscribe} />
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
          <div className="skillDiv">
            {skills.map((skill, index) => {
              return (
                <div key={index} className="skillElement">
                  {skill}
                  <img
                    src={cross}
                    alt="cross"
                    className="crossIcon"
                    onClick={filterSkill}
                  />
                </div>
              );
            })}
          </div>
          <div>
            <button
              className={showDiv ? "button" : "disable"}
              type="submit"
              onClick={setSub}
            >
              CLAIM YOUR FREE TRAIL
            </button>
          </div>
          <div className="terms">
            By clicking the button, you are agreeing to our{" "}
            <a href="#">Terms and Services</a>
          </div>
        </form>
      </div>
    </>
  );
}

export default MultipleInput;
