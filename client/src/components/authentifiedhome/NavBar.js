import React,{useEffect,useState} from 'react'
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton
} from "@material-tailwind/react"

function NavBar() {
  const [openNav,setOpenNav] = useState(false);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
   
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:justify-between">
      <Typography
        as="li"
        variant="h5"
        color="white"
        className="p-1 font-sans"
      >
        <a href="#">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="h5"
        color="white"
        className="p-1 font-sans"
      >
        <a href="#">
           About us
          </a>
        </Typography>
        <Typography
          as="li"
          variant="h5"
          color="white"
          className="p-1 font-sans"
        >
          <a href="#">
            Contact
          </a>
        </Typography>
      </ul>
    );
   
    return (
      <Navbar 
        color='transparent'
        fullWidth
        className="fixed z-50 top-0 left-0 right-0 bg-darkBlue-100 shadow-2xl shadow-darkBlue-100 py-2 px-4 lg:px-8 lg:py-4"
      >
        <div className="flex items-center justify-between">
          <Typography
            as="a"
            href="#"
            className="w-1/8 mr-4 cursor-pointer py-1.5"
          >
            <svg 
              width="50" 
              height="50" 
              viewBox="0 0 70 29" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M70 9.73623V19.1309C70.0008 19.3403 69.8825 19.5459 69.6572 19.7266C69.4319 19.9073 69.1079 20.0563 68.7188 20.1584L39.375 27.9824C39.1842 28.0342 38.9676 28.0613 38.7472 28.0611C38.5268 28.0608 38.3105 28.0332 38.1201 27.9811C37.9298 27.9289 37.7721 27.8541 37.6632 27.7641C37.5543 27.6741 37.498 27.5721 37.5 27.4686V19.0868L54.9375 14.4336L65 17.1198V11.7473L54.9375 14.4336L49.875 13.0831L62.4375 9.73623L37.5 3.08658V9.78027L49.875 13.0831L35 17.0464L20.125 13.0831L32.5 9.78027V3.08658L7.56251 9.73623L20.125 13.0831L15.0625 14.4336L5 11.7473V17.1198L15.0625 14.4336L32.5 19.0868V27.4686C32.502 27.5721 32.4457 27.6741 32.3368 27.7641C32.2279 27.8541 32.0703 27.9289 31.8799 27.9811C31.6895 28.0332 31.4732 28.0608 31.2528 28.0611C31.0324 28.0613 30.8159 28.0342 30.625 27.9824L1.28125 20.1584C0.892075 20.0563 0.568066 19.9073 0.342791 19.7266C0.117517 19.5459 -0.000831808 19.3403 4.40071e-06 19.1309V9.73623C-0.000831808 9.52686 0.117517 9.32118 0.342791 9.14052C0.568066 8.95985 0.892075 8.81076 1.28125 8.70869L32.5313 0.385623C33.2829 0.183488 34.1339 0.0771484 35 0.0771484C35.8661 0.0771484 36.7171 0.183488 37.4688 0.385623L68.7188 8.70869C69.1079 8.81076 69.4319 8.95985 69.6572 9.14052C69.8825 9.32118 70.0008 9.52686 70 9.73623Z" fill="white"/>
            </svg>
          </Typography>
          <div className="w-2/4 hidden lg:block">{navList}</div>
          <Button 
            variant="gradient" 
            size="md" 
            color='white'
            className="w-1/8 hidden lg:inline-block text-orange">
            <span>Se Connecter</span>
          </Button>
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
        <MobileNav open={openNav}>
          {navList}
          <Button 
            variant="gradient" 
            size="md" 
            color='white'
            fullWidth
            className="mb-2 text-orange">
            <span>Se Connecter</span>
          </Button>
        </MobileNav>
      </Navbar>
    );
}

export default NavBar