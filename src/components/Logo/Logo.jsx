import React from "react";
// import LogoIcon from "../../logo.svg";
import LogoIcon from "../../images/flower-svgrepo-com.svg";
import "./Logo.scss";

import { Avatar } from "antd";

function Logo() {
  return (
    <>
      <div className="LogoSet">
        <Avatar size={44} src={LogoIcon} />{" "}
        <span ellipsis={true}>R-Dashboard</span>
      </div>
    </>
  );
}

export default Logo;
