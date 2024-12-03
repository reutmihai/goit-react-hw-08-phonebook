import React from "react";

const UserMenu = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload(); 
  };

  return (
    <div>
      <p>{localStorage.getItem("email")}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserMenu;
