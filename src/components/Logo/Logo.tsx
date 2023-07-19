import React from "react";
import { Image } from "@mantine/core";
import logo from "../../assets/images/logo.svg";

function Logo() {
  return <Image radius="md" src={logo} alt="logo" height={55} width={35} />;
}
export default Logo;
