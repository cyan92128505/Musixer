import { Link } from "react-router-dom";
import { isAuth } from "./Auth";
import React from "react";

export const AppNavigation: React.FC = () => {
  if (!isAuth()) {
    return <></>;
  }
  return (
    <nav>
      <Link to={"/"}>
        <li>Home</li>
      </Link>
      <Link to={"/profile"}>
        <li>Profile</li>
      </Link>
    </nav>
  );
};

export default AppNavigation;