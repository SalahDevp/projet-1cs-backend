import React, { useEffect, useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import LoginBtn from "./home/LoginBtn";
import logo from "../assets/logo.svg";

function NavBar({
  loginBtnVisible,
  homeVisible,
  aboutVisible,
  contactVisible,
}) {
  const selectedStyle = "underline underline-offset-4 decoration-4";
  const [openNav, setOpenNav] = useState(false);
  const [transNav, setTransNav] = useState(true);
  const [selected, setSelected] = useState("home");

  const changeNavColor = () => {
    if (window.scrollY === 0) setTransNav(true);
    else setTransNav(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavColor);
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  useEffect(() => {
    if (homeVisible) setSelected("home");
    else if (aboutVisible && !contactVisible) setSelected("about");
    else setSelected("contact");
  }, [homeVisible, aboutVisible, contactVisible]);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:justify-between">
      <Typography
        as="li"
        variant="h5"
        color="white"
        className={`p-1 font-sans ${selected === "home" ? selectedStyle : ""}`}
      >
        <a href="#home">Home</a>
      </Typography>
      <Typography
        as="li"
        variant="h5"
        color="white"
        className={`p-1 font-sans ${selected === "about" ? selectedStyle : ""}`}
      >
        <a href="#about">About us</a>
      </Typography>
      <Typography
        as="li"
        variant="h5"
        color="white"
        className={`p-1 font-sans ${
          selected === "contact" ? selectedStyle : ""
        }`}
      >
        <a href="#contact">Contact</a>
      </Typography>
    </ul>
  );

  return (
    <Navbar
      color="transparent"
      fullWidth
      className={`fixed z-50 top-0 left-0 right-0 ${
        !transNav || openNav
          ? "bg-darkBlue-100 shadow-2xl shadow-darkBlue-100"
          : ""
      } py-2 px-4 lg:px-8 lg:py-4`}
    >
      <div className="flex items-center justify-between">
        <img src={logo} alt="logo" className="w-32 mr-2 lg:h-20 lg:w-auto" />
        <div className="w-2/4 hidden lg:block">{navList}</div>
        <div className="h-full w-36">{!loginBtnVisible && <LoginBtn />}</div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>{navList}</MobileNav>
    </Navbar>
  );
}

export default NavBar;
