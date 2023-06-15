

import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter as Router, Route, Link, BrowserRouter } from 'react-router-dom';
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Home from "../Home";
import image1 from "../../assets/home/img1.jpg";
import { waitFor } from "@testing-library/react";
import 'intersection-observer';
import { ThemeProvider } from "@material-tailwind/react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import config from "../../config.json";


    test("Background image",()=>{

      
   render(
  <GoogleOAuthProvider clientId={config.clientId}>
    <ThemeProvider>
      <BrowserRouter>
        <Home></Home>
      </BrowserRouter>
    </ThemeProvider>
  </GoogleOAuthProvider>
);
        //const testImage = screen.getByTestId('bgimage');
        const testImage = screen.getByTestId('bgimg')
        expect(testImage).toBeInTheDocument();
        //waitFor(() => expect(getByTestId("#bgimg")).toBeInTheDocument());

        
       // expect(testImage.getAttribute('src')).toBe('../../assets/login/img_login.jpg');
        //expect(testImage.toMatchImage(backgroundImage));
        //expect(testImage).toHaveAttribute('src', backgroundImage.src);
      //  expect(testImage).
        
       
    })
    

