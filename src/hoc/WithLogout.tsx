import React from "react";
import { useHistory } from "react-router-dom";

const WithLogout = ({ children, ...rest }) => {
  const history = useHistory();
  const handleLogout = () => {
    localStorage.removeItem("user");
    history.push("/");
  };

  return (
    <div style={{ display: "flex" }}>
      {children}
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default WithLogout;
