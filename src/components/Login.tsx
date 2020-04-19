import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSignIn = () => {
    //if(!(login || password))
    if (login === "vadik" && password === "123") {
      localStorage.setItem("user", "vadik");
      history.push("/posts");
    }
  };

  return (
    <div style={{ width: "200px", marginTop: "200px" }}>
      <div
        style={{
          marginBottom: "10px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        Login:
        <input
          type="text"
          value={login}
          onChange={(event) => setLogin(event.currentTarget.value)}
        />
      </div>
      <div
        style={{
          marginBottom: "10px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        Password:
        <input
          type="text"
          value={password}
          onChange={(event) => setPassword(event.currentTarget.value)}
        />
      </div>
      <button onClick={handleSignIn}>Sign in</button>
    </div>
  );
};

export default Login;
