import React from "react";
import Logo from "../assets/logo.svg"

const Footer = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} id="contact">
      <footer className="bg-darkBlue-400">
        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <div className="place-items-center grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="">
              <img className="w-32" src={Logo}/>
            </div>
            <div className="grid grid-cols-1 gap-8 md:gap-16 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-2">
              <div>
                <p className="font-semibold text-2xl">A propos de nous</p>
                <nav className="flex flex-col mt-4 space-y-2 text-md text-gray-300">
                <a className="hover:opacity-75" href="#">
                    {" "}
                    Site web{" "}
                  </a>
                  <a className="hover:opacity-75" href="#">
                    {" "}
                    Equipe de développement{" "}
                  </a>
                </nav>
              </div>
              <div>
                <p className="font-semibold text-2xl">Contactez nous</p>
                <nav className="flex flex-col mt-4 space-y-2 text-md text-gray-300">
                <a className="hover:opacity-75" href="#">
                    {" "}
                    IGL_TEAMone@gmail.com{" "}
                  </a>
                  <a className="hover:opacity-75" href="#">
                    {" "}
                    0541663212{" "}
                  </a>
                </nav>
              </div>
            </div>
          </div>
          <p className="mt-8 text-xs text-gray-800">© 2023 IGL Team</p>
        </div>
      </footer>
    </div>
  );
});

export default Footer;