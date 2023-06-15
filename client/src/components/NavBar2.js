import React,{useEffect,useState} from 'react'
import Logo from "../assets/logo.svg"
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton
} from "@material-tailwind/react"
import { useNavigate } from "react-router-dom";

function NavBar2() {
    const navigate = useNavigate();
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
            className="p-1 font-sans text-center"
        >
            <a href="#">
                Accueil
            </a>
        </Typography>
        <button
            type="button"
            onClick={() =>{navigate("/creeannonce");}}
            className="text-white hover:text-darkBlue-100 font-mono text-lg bg-[#FF6B3E] hover:bg-[#f18564] focus:outline-none focus:ring-2 focus:ring-[#ca3e14] font-medium rounded-lg px-3 py-1 text-center"
        >
            Déposer une annonce
        </button>
      </ul>
    );
   
    return (
      <Navbar 
        color='transparent'
        fullWidth
        className="fixed z-50 top-0 left-0 right-0 bg-darkBlue-100 py-2 px-4 lg:px-8 lg:py-4"
      >
        <div className="flex items-center justify-between">
            <Typography
                as="a"
                href="#"
                className="mr-4 cursor-pointer py-1.5"
            >
                <img className="w-32" src={Logo}/>
            </Typography>
            <div className="hidden lg:block lg:w-1/3 lg:max-w-sm">{navList}</div>
            <div className='flex ml-auto lg:ml-0'>
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
            </div>
                <IconButton
                    variant="text"
                    className="h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
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
        </MobileNav>
      </Navbar>
    );
}

export default NavBar2

/*import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, ChatBubbleBottomCenterTextIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from '../Assets/Logo.svg'

const navigation = [
  { name: 'Accueil', href: '#', current: true },
  { name: 'Déposer annonce', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function NavBar() {
  return (
    <Disclosure as="nav" className="bg-slate-900">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*//*}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src={Logo}
                    alt="Logo"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src={Logo}
                    alt="Logo"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="rounded-full bg-slate-900 p-1 text-gray-400 hover:text-orange-600 focus:outline-none"
                >
                  <span className="sr-only">Messages</span>
                  <ChatBubbleBottomCenterTextIcon className="h-8 w-8" aria-hidden="true" />
                </button>

                {/* Profile dropdown *//*}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2  hover:ring-orange-600 focus:ring-offset-2 focus:ring-offset-slate-900">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
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
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-800' : '', 'block px-6 py-2 text-sm text-orange-600')}
                          >
                            Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-800' : '', 'block px-6 py-2 text-sm text-orange-600')}
                          >
                            Se déconnecter
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default NavBar;
*/