import React from "react";
import { useState } from "react";
import "animate.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import sandbox from "../Images/sandbox.png";
import {
  faTwitter,
  faFacebookF,
  faInstagram,
  faYoutube,
  faDribbble,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const [list1, setlist1] = useState(false);
  const [list2, setlist2] = useState(false);
  const [list3, setlist3] = useState(false);
  return (
    <div>
      <div className="w-screen h-full p-30 bg-blue-50 flex justify-center text-slate-600 font-medium items-center gap-10 flex-col">
        <p className="uppercase">faq</p>
        <b className="w-250 text-[40px] text-black opacity-75 text-center font-serif">
          If you don't see an answer to your question, you can send us an email
          from our contact form.
        </b>
        {/* <ul >
                <li className='px-4 py-3 bg-white mb-[-20px] w-160 h-18 relative' onClick={()=>{setlist1(prev=>!prev)}}></li>
                <li className={`px-4 py-3 bg-white w-160 ${list1?'visible h-auto bg-white':'hidden'} `}>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.</li>
                <li className='px-4 py-3 bg-white shadow-2xl mt-5 w-160 h-18 relative' onClick={()=>{setlist2(prev=>!prev)}}></li>
                <li className={`px-4 py-3 bg-white w-160 ${list1?'visible h-auto bg-white':'hidden'} `} ></li>
                <li className='px-4 py-3 bg-white shadow-2xl mt-5 w-160 h-18 relative' onClick={()=>{setlist3(prev=>!prev)}}></li>
            </ul> */}
        <details
          className="bg-white py-4 w-160 wrap transition-all rounded-2xl shadow-2xl"
          onClick={() => setlist1((prev) => !prev)}
        >
          <summary className="w-160 list-none px-10 cursor-pointer text-[22px] text-black">
            <FontAwesomeIcon icon={faAngleDown} color="blue" /> How do I get my
            subscription receipt?
          </summary>
          <p
            className={` w-160 px-12 py-4 mt-3 text-lg font-lighter text-slate-500 tracking-wider`}
          >
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
            nibh, ut fermentum massa justo sit amet risus. Cras mattis
            consectetur purus sit amet fermentum. Praesent commodo cursus magna,
            vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio
            dui. Cras justo odio, dapibus ac facilisis.
          </p>
        </details>
        <details className="bg-white p-4 w-160 wrap transition-all rounded-2xl shadow-2xl">
          <summary className="w-160 list-none px-10 cursor-pointer text-[22px] text-black">
            <FontAwesomeIcon icon={faAngleDown} color="blue" /> Are there any
            discounts for people in need?
          </summary>
          <p className="w-160 px-12 mt-3 py-4 text-lg font-lighter text-slate-500 tracking-wider">
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
            nibh, ut fermentum massa justo sit amet risus. Cras mattis
            consectetur purus sit amet fermentum. Praesent commodo cursus magna,
            vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio
            dui. Cras justo odio, dapibus ac facilisis.
          </p>
        </details>
        <details className="bg-white p-4 w-160 wrap transition-all rounded-2xl shadow-2xl">
          <summary className="w-160 list-none px-10 cursor-pointer text-[22px] text-black">
            <FontAwesomeIcon icon={faAngleDown} color="blue" /> Do you offer a
            free trial edit?
          </summary>
          <p className="w-160 px-12 mt-3 text-lg py-4 font-lighter text-slate-500 tracking-wider">
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
            nibh, ut fermentum massa justo sit amet risus. Cras mattis
            consectetur purus sit amet fermentum. Praesent commodo cursus magna,
            vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio
            dui. Cras justo odio, dapibus ac facilisis.
          </p>
        </details>
        <details className="bg-white p-4 w-160 wrap transition-all rounded-2xl shadow-2xl">
          <summary className="w-160 list-none px-10 cursor-pointer text-[22px] text-black">
            <FontAwesomeIcon icon={faAngleDown} color="blue" /> How do I reset
            my Account password?
          </summary>
          <p className="w-160 px-12 mt-3 text-lg py-4 font-lighter text-slate-500 tracking-wider">
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
            nibh, ut fermentum massa justo sit amet risus. Cras mattis
            consectetur purus sit amet fermentum. Praesent commodo cursus magna,
            vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio
            dui. Cras justo odio, dapibus ac facilisis.
          </p>
        </details>
      </div>
      <div className="w-screen box-border h-100 px-10 py-20 gap-5 bg-slate-800 flex justify-between items-center">
        <div className="h-fit w-1/6 px-8 py-4 text-lg flex flex-col flex-wrap gap-5 justify-center text-white">
          <img src={sandbox} className="w-35 h-8" alt="" />{" "}
          <p className="text-slate-200 text-[20px]">
            &copy; 2025 Sandbox. All rights reserved.
          </p>
         <ul className="flex justify-around items-center gap-2">
            <li>
              <FontAwesomeIcon
                className="transition-all duration-300 text-2xl hover:translate-y-[-3px]"
                color="white"
                icon={faTwitter}
              />
            </li>
            <li>
              <FontAwesomeIcon
                className="transition-all duration-300 text-2xl hover:translate-y-[-3px]"
                color="white"
                icon={faFacebookF}
              />
            </li>
            <li>
              <FontAwesomeIcon
                className="transition-all duration-300 text-2xl hover:translate-y-[-3px]"
                color="white"
                icon={faDribbble}
              />
            </li>
            <li>
              <FontAwesomeIcon
                className="transition-all duration-300 text-2xl hover:translate-y-[-3px]"
                color="white"
                icon={faInstagram}
              />
            </li>
            <li>
              <FontAwesomeIcon
                className="transition-all duration-300 text-2xl hover:translate-y-[-3px]"
                color="white"
                icon={faYoutube}
              />
            </li>
          </ul>
        </div>
        <div className="h-full w-1/4  flex flex-col flex-wrap items-center text-slate-300 gap-5 text-[18px]">
          <b className="text-2xl text-white">Get in Touch</b>
          <p className="w-1/2">
            Moonshine St. 14/05 Light City, London, United Kingdom
          </p>
          <p>
            <a href="" className="block text-slate-200">
              info@email.com
            </a>
            00 (123) 456 78 90
          </p>
        </div>
        <div className="h-full w-1/6  flex flex-wrap justify-center text-slate-300 text-[20px]">
          <ul className="list-none  flex flex-col gap-2">
            <li className="text-white text-[22px]">
              <b>Learn More</b>
            </li>
            <li>About Us</li>
            <li>Our Story</li>
            <li>Projects</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="h-full w-1/3 flex flex-col flex-wrap items-center justify-items-start text-slate-300 text-[19px]">
          <div className="flex flex-col gap-5">
            <b className="text-[20px] text-white">Give Newsletter</b>
            <p className="w-60">
              Subscribe to our newsletter to get our news & deals delivered to
              you.
            </p>
            <div>
              <input
                type="text"
                id="email"
                placeholder="Email Address"
                className=" bg-slate-700 border-2 border-slate-800 px-5 text-[19px] h-15 w-1/2 rounded-bl-2xl rounded-tl-2xl"
              />
              <input
                type="submit"
                value="Join"
                className="bg-blue-500 text-white cursor-pointer font-bold text-[19px] p-4 rounded-br-2xl rounded-tr-2xl h-15"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
