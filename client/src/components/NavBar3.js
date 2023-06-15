import React, { useState, useEffect, Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ChatBubbleBottomCenterTextIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import getUser from "../utils/axios/getUser";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function NavBar() {
  const [pp, setPp] = useState("");
  const navigate = useNavigate();
  const profileInfo = async () => {
    const userId = localStorage.getItem("userId");
    const userInfo = await getUser(userId);
    setPp(userInfo.picture);
  };
  useEffect(() => {
    profileInfo();
  }, []);

  return (
    <Disclosure
      as="nav"
      className="bg-darkBlue-100 backdrop-blur-sm fixed z-40 w-full"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 mdd:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center mdd:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex rounded-md p-2 text-gray-400 hover:bg-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center mdd:justify-start sm:items-stretch">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-12 w-auto lgg:hidden"
                    src={Logo}
                    alt="Logo"
                  />
                  <img
                    className="hidden h-12 w-auto lgg:block"
                    src={Logo}
                    alt="Logo"
                  />
                </div>
                <div className="hidden mdd:ml-6 mdd:block">
                  <div className="flex space-x-6">
                    <button onClick={() => navigate("/home")}>
                      <a
                        href="#"
                        className="text-gray-400  px-3 py-2 rounded-md text-lg font-bold hover:text-white font-mono"
                      >
                        Accueil
                      </a>
                    </button>
                    <button onClick={() => navigate("/creeannonce")}>
                      <a
                        href="#"
                        className="px-3 py-1.5 rounded-md text-lg font-semibold text-white font-mono bg-deep-orange-600 hover:bg-deep-orange-800 focus:outline-none focus:ring-2 focus:ring-deep-orange-600 text-center"
                      >
                        Déposer annonce
                      </a>
                    </button>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 mdd:static mdd:inset-auto mdd:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="rounded-full bg-darkBlue-100 p-1 text-gray-400 hover:text-deep-orange-600 focus:outline-none"
                >
                  <span className="sr-only">Messages</span>
                  <ChatBubbleBottomCenterTextIcon
                    className="h-8 w-8"
                    aria-hidden="true"
                  />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2  hover:ring-deep-orange-600 focus:ring-offset-2 focus:ring-offset-darkBlue-100">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={pp || ""}
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-900 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <button onClick={() => navigate("/profile")}>
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-800" : "",
                                "block px-6 py-2 text-sm text-deep-orange-600"
                              )}
                            >
                              Profile
                            </a>
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button onClick={() => navigate("/")}>
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-800" : "",
                                "block px-6 py-2 text-sm text-deep-orange-600"
                              )}
                            >
                              Se déconnecter
                            </a>
                          </button>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="mdd:hidden">
            <div className="text-center space-y-1 px-2 pt-2 pb-3">
              <Disclosure.Button
                as="a"
                href="#"
                className={classNames(
                  "text-gray-300 hover:bg-gray-500 focus:ring-2 hover:ring-deep-orange-600 hover:text-white",
                  "block px-3 py-2 rounded-md text-base font-medium font-mono"
                )}
              >
                Acceuil
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className={classNames(
                  "text-gray-300 bg-deep-orange-600 hover:bg-deep-orange-800 focus:ring-2 hover:ring-deep-orange-800 hover:text-white",
                  "block px-3 py-2 rounded-md text-base font-medium font-mono"
                )}
              >
                Déposer annonce
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default NavBar;
