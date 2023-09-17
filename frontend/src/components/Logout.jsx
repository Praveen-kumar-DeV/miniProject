import React from "react";

const Logout = () => {
  return (
    <div>
      <button
        onClick={() => {
          localStorage.removeItem("isLogin");

          window.location.href = "/";
        }}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
