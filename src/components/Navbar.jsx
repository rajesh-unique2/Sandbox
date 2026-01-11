import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import FollowIcons from "./FollowIcons";
import logo from "../Images/logo.png";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


const Navbar = () => {
  const [Navbar, setNavbar] = useState(false);
  const [Info, setInfo] = useState(false);
  const pages = [
    "Services",
    "About",
    "Shop",
    "Contact",
    "Career",
    "Utility",
    "Pricing",
    "One Page",
  ];
  const documents = [
    "USAGE",
    "Get Started",
    "Forms",
    "FAQ",
    "Changelog",
    "Credits",
    "STYLEGUIDE",
    "Colors",
    "Fonts",
    "SVG Icons",
    "Font Icons",
    "Illustations",
    "Backgrounds",
    "Misc",
    "ELEMENTS",
    "Accordion",
    "Alerts",
    "Animations",
    "Avatars",
    "Background",
    "Badges",
    "Buttons",
    "Card",
    "Carousel",
    "Dividers",
    "Form Elements",
    "Image Hover",
    "Image Mask",
    "Lightbox",
    "Media Player",
    "Model",
    "Pagination",
    "Progressbar",
    "Shadows",
    "Shapes",
    "Tables",
    "Tabs",
    "Text Animations",
    "Text Highlight",
    "Tiles",
    "Tooltips&Popovers",
    "Typography",
  ];

  return (
    <div className="w-full box-border">
               {/* <div
  className={`overflow-y-scroll duration-500 
              w-[400px] sm:w-[400px] box-content px-8 py-8
              ${Info ? "translate-x-full" : "translate-x-0"} 
              box-border fixed inset-y-0 right-0 flex justify-center gap-5 flex-col 
              bg-[#1E2228] z-50 text-white scroll-smooth`}
> */}
  <div className={`fixed left-full w-75 pl-8 py-10 h-full z-50 inset ${Info ? 'translate-x-0' : '-translate-x-full box-border'} duration-200 text-white scroll-smooth bg-[#1E2228]` }>
  <div className="text-[32px] font-semibold flex justify-between items-center text-white">
    <p>Sandbox</p>
    <FontAwesomeIcon
      icon={faXmark}
      className="rounded-full cursor-pointer bg-slate-800 py-2 px-1.5 text-3xl"
      role="button"
      onClick={() => setInfo((prev) => !prev)}
    />
  </div>

  <p className="text-[19px] font-[sans-serif] mt-5 mr-2 mb-8 [word-spacing:2px] w-fit">
    Sandbox is a multipurpose HTML5 template with various layouts which will be a great solution for your business.
  </p>
  <strong className="mt-10 text-white text-2xl">Contact Info</strong>
  <p className="text-[19px] mt-4">
    Moonshine St.14/05 <br /> Light City, London
  </p>
  <p className="text-[19px] mt-4">
    info@email.com <br /> 00 (123) 456 78 90
  </p>

  <ul className="flex flex-col gap-3 my-10 text-lg">
    <li className="text-[22px] font-semibold font-[sans-serif] mb-1">Learn More</li>
    <li>Our Story</li>
    <li>Terms of Use</li>
    <li>Privacy Policy</li>
    <li>Contact Us</li>
  </ul>

  <b className="text-[21px]">Follow Us</b>
  <div className="text-xl mt-4 cursor-pointer mb-5">
    <FollowIcons />
  </div>
</div>
      <div className=" hidden lg:block bg-blue-50 px-20 py-3">
        <nav className="flex justify-between items-center">
          <div>
            <img src={logo} alt="" className="w-34" />
          </div>
          <ul className="flex justify-around items-center flex-row gap-8 text-[15px] text-slate-600 font-bold text-l">
            <li className="hover:text-blue-500 duration-150 hover:cursor-pointer">
              Demos <FontAwesomeIcon icon={faAngleDown} color="blue" />
            </li>
            <li className="hover:text-blue-500 duration-150 hover:cursor-pointer">
              Pages <FontAwesomeIcon icon={faAngleDown} color="blue" />
            </li>
            <li className="hover:text-blue-500 duration-150 hover:cursor-pointer">
              Projects <FontAwesomeIcon icon={faAngleDown} color="blue" />
            </li>
            <li className="hover:text-blue-500 duration-150 hover:cursor-pointer">
              Blog <FontAwesomeIcon icon={faAngleDown} color="blue" />
            </li>
            <li className="hover:text-blue-500 duration-150 hover:cursor-pointer">
              Blocks <FontAwesomeIcon icon={faAngleDown} color="blue" />
            </li>
            <li className="hover:text-blue-500 duration-150 hover:cursor-pointer">
              Documentation <FontAwesomeIcon icon={faAngleDown} color="blue" />
            </li>
            <li className="hover:text-blue-500 duration-150 hover:cursor-pointer">
              <FontAwesomeIcon icon={faCircleInfo} onClick={()=>setInfo(prev=>!prev)}/>
            </li>
            <li className="bg-blue-600 px-5 py-3 rounded-3xl text-white text-lg hover:cursor-pointer hover:translate-y-[-3px] hover:shadow-2xl ease-linear duration-150 opacity-85">
              Sign In
            </li>
          </ul>
        </nav>
      </div>
      {/* Mobile view*/}
      <div className=" h-full block md:block lg:hidden box-border">
        <nav className="flex w-full bg-blue-50 px-3.5 py-5 justify-between items-center box-border">
          <div>
            <img
              src={"https://sandbox.elemisthemes.com/assets/img/logo@2x.png"}
              alt=""
              className="w-37"
            />
          </div>
          <ul className="list-none flex gap-5 text-3xl mr-3.5 opacity-85">
            <li className="hover:text-blue-500 hover:cursor-pointer opacity-85 w-auto">
              <FontAwesomeIcon
                icon={faCircleInfo}
                color="black"
                onClick={() => setInfo((prev) => !prev)}
              />
            </li>
            <li className="hidden md:block bg-blue-600 px-5 py-3 rounded-3xl text-white text-lg hover:cursor-pointer hover:translate-y-[-3px] hover:shadow-2xl ease-linear duration-150 opacity-85 font-[sans-serif] font-semibold">
              Sign In
            </li>
            <li className="cursor-pointer opacity-75">
              <FontAwesomeIcon
                icon={faBars}
                color="black"
                onClick={() => setNavbar((prev) => !prev)}
              />
            </li>
          </ul>
          {/* Site Navbar*/}
          <div
            className={`overflow-y-scroll duration-500 w-75 box-border h-sm ${
              Navbar ? "translate-x-0" : "-translate-x-full"
            } box-border fixed inset-0 left-0 top-0 flex justify-between flex-col bg-[#1E2228] z-50 scroll-0 text-white scroll-smooth`}
          >
            <div className="w-75 h-screen px-8 py-10 flex flex-col justify-start gap-10">
              <div className="text-[33px] font-semibold flex justify-between items-center">
                <p>Sandbox</p>
                <FontAwesomeIcon
                  icon={faXmark}
                  className="rounded-full cursor-pointer bg-slate-800 py-2 px-1.5 text-3xl"
                  role="button"
                  onClick={() => setNavbar((prev) => !prev)}
                />
              </div>
              <ul className="flex flex-col gap-4">
                <li className="cursor-pointer">
                  <details>
                    <summary className="text-xl font-semibold list-none flex justify-between items-center">
                      Demos
                      <FontAwesomeIcon icon={faAngleDown} color="white" />
                    </summary>
                    <div className="flex flex-col justify-center items-start gap-6 mt-4">
                      {Array(35)
                        .fill(0)
                        .map((_, i) => {
                          return (
                            <p className="pl-8 text-[18px] text-slate-100 font-semibold">
                              Demo {i + 1}
                            </p>
                          );
                        })}
                    </div>
                  </details>
                </li>
                <li className="cursor-pointer">
                  <details>
                    <summary className="text-xl font-semibold list-none flex justify-between items-center">
                      Pages
                      <FontAwesomeIcon icon={faAngleDown} color="white" />
                    </summary>
                    <div>
                      {pages.map((data, i) => {
                        return (
                          <details>
                            <summary
                              key={i}
                              className="text-xl pl-8 pt-4 font-semibold list-none flex justify-between items-center"
                            >
                              {data}
                              <FontAwesomeIcon
                                icon={faAngleDown}
                                color="white"
                              />
                            </summary>
                          </details>
                        );
                      })}
                    </div>
                  </details>
                </li>
                <li className="cursor-pointer">
                  <details>
                    <summary className="text-xl font-semibold list-none flex justify-between items-center">
                      Projects
                      <FontAwesomeIcon icon={faAngleDown} color="white" />
                    </summary>
                    <div>
                      <div>
                        <ul className="list-none flex flex-col font-semibold text-lg pl-8 pt-4 gap-3 text-white">
                          <li className="text-blue-500">PROJECT PAGES</li>
                          <li>Projects I</li>
                          <li>Projects II</li>
                          <li>Projects III</li>
                          <li>Projects IV</li>
                        </ul>
                      </div>
                      <div>
                        <ul className="list-none flex flex-col font-semibold text-lg pl-8 pt-4 gap-3 text-white">
                          <li className="text-blue-500">SINGLE PROJECTS</li>
                          <li>Single Project I</li>
                          <li>Single Project II</li>
                          <li>Single Project III</li>
                          <li>Singe Project IV</li>
                        </ul>
                      </div>
                    </div>
                  </details>
                </li>
                <li className="cursor-pointer text-xl font-semibold">
                  <details>
                    <summary className=" list-none flex justify-between items-center">
                      Blog
                      <FontAwesomeIcon icon={faAngleDown} color="white" />
                    </summary>
                    <ul className="flex flex-col justify-center gap-4 text-lg pl-8 pt-3">
                      <li>Blog without Sidebar</li>
                      <li>Blog with Sidebar</li>
                      <li>Blog with Left Sidebar</li>
                      <li>Blog Posts</li>
                    </ul>
                  </details>
                </li>
                <li className="cursor-pointer">
                  <details>
                    <summary className="text-xl font-semibold list-none flex justify-between items-center">
                      Blocks
                      <FontAwesomeIcon icon={faAngleDown} color="white" />
                    </summary>
                    <ul className="text-lg font-semibold list none flex flex-col justify-center gap-4 pl-8 pt-3">
                      <li>About</li>
                      <li>Blog</li>
                      <li>Call to Action</li>
                      <li>Clients</li>
                      <li>Contact</li>
                      <li>Facts</li>
                      <li>FAQ</li>
                      <li>Features</li>
                      <li>Footer</li>
                      <li>Hero</li>
                      <li>Misc</li>
                      <li>Navbar</li>
                      <li>Portfolio</li>
                      <li>Pricing</li>
                      <li>Process</li>
                      <li>Team</li>
                      <li>Testimonials</li>
                    </ul>
                  </details>
                </li>
                <li className="">
                  <details>
                    <summary className="cursor-pointer text-xl font-semibold flex justify-between items-center">
                      <p>Documentation</p>
                      <FontAwesomeIcon icon={faAngleDown} color="white" />
                    </summary>
                    <div>
                      <ul className="flex flex-col text-lg font-semibold gap-4 pl-8 pt-3">
                        {documents.map((d, i) => {
                          return (
                            <li
                              key={i}
                              className={
                                ["USAGE", "ELEMENTS", "STYLEGUIDE"].includes(d)
                                  ? "text-blue-500"
                                  : "text-white"
                              }
                            >
                              {d}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </details>
                </li>
              </ul>
            </div>
            <div className="w-full h-sm py-10 px-8 text-xl cursor-pointer flex justify-items-stretch gap-5 flex-col ">
              <div>
                <p>info@email.com</p>
                <p>00 (123) 456 78 90</p>
              </div>
              <div>
                <FollowIcons/>
              </div>
            </div>
          </div>
          {/* Site Info */}

        </nav>
      </div>
    </div>
  );
};

export default Navbar;
 