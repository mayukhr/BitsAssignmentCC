import "./styles.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const routeChange = () => {
    let path = `newPath`;
    let history = useHistory();
    history.push(path);
  };
  const setUserNameField = (e, field) => {
    console.log(e.target.value);
    setUsername(e.target.value);
  };

  const setPasswordField = (e) => {
    setPassword(e.target.value);
  };

  const checkUserNameAndPassword = () => {
    const val = username && password ? false : true;
    setShowErrorMessage(val);
    if (!val) {
      let path = `newPath`;
      // let history = useHistory();
      // history.push(path);
    }
  };

  return (
    <div className="App">
      <div className="wrapper">
        <img src="logo.svg" className="logo" alt="Mayukh's Assignment" />
        <h1 className="title">Log in form</h1>
        <p className="description">Cloud Computing Assignment</p>
        <div className="form-group">
          <label for="username" className="form-label">
            Username
          </label>
          <input
            className="form-input"
            type="text"
            id="username"
            placeholder="Enter your username"
            onChange={setUserNameField}
            value={username}
          />
        </div>
        <div className="form-group">
          <label for="password" className="form-label">
            Password
          </label>
          <input
            className="form-input"
            type="password"
            id="password"
            placeholder="Enter your password"
            onChange={setPasswordField}
            value={password}
          />
        </div>
        <div className="error-message">
          {showErrorMessage ? "Incorrect Username OR Password" : ""}
        </div>

        <button className="btn-primary" onClick={checkUserNameAndPassword}>
          {" "}
          Login{" "}
        </button>
      </div>
    </div>
  );
}
