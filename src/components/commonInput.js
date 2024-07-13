import React, { useState, useEffect } from "react";


const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

const InputHandler = ({ onSubmit, editMode = false, currentUser = null }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    if (editMode && currentUser) {
      setName(currentUser.name || "");
      setEmail(currentUser.email || "");
    } else {
      setName("");
      setEmail("");
    }
  }, [editMode, currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    onSubmit({ name, email });
    setName(""); 
    setEmail(""); 
    setEmailError(""); 
  };

  return (
    <div className="input-handler">
      <div className="header-box">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailError(""); 
          }}
        />
        <button type="button" onClick={handleSubmit}>
          {editMode ? "Edit user" : "Add user"}
        </button>
      </div>
      {emailError && <p className="error-message">{emailError}</p>}
    </div>
  );
};

export default InputHandler;
