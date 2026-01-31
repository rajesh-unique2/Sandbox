import React from "react";
import minsk from "../Images/minsk.jpg";
import panama from "../Images/panama.jpg";
import kathmandu from "../Images/kathmandu.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';


const ThirdSection = () => {
  
  return (
    <div className="w-screen h-screen lg:p-20 p-5 md:p-10 flex flex-col lg:flex-row lg:items-center items-start justify-start gap-10 md:gap-20 bg-gray-50 opacity-90 box-border">
      <div className="grid place-items-center grid-cols-2 gap-5"><img src={minsk} alt="" className="w-auto lg:w-70 min-w-0 shadow-2xl opacity-100 rounded-2xl" />
      <div className="h-full flex justify-center items-start gap-5 flex-col"><img src={panama} alt="" className="shadow-2xs lg:w-60 lg:h-40 opacity-100 rounded-xl"/><img src={kathmandu} alt="" className="shadow-2xs lg:w-50 lg:h-55 rounded-xl opacity-100" /></div></div>
      <div className="h-full lg:w-150 text-wrap text-black pl-2">
        <h2 className="font-semibold text-black text-2xl mb-5">Easy Usage</h2>
        <p className="font-sans text-lg text-slate-600">
          Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper
          nulla non metus auctor fringilla. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus
          commodo, tortor mauris con dimentum nibh, ut fermentum massa justo sit
          amet risus. Nullam quis risus eget urna.
        </p>
        <ul className="font-sans text-slate-600 text-lg">
            <li className="mt-5"><FontAwesomeIcon icon={faCircleCheck} color="orange" className="opacity-80"/> &nbsp;Aenean eu leo quam. Pellentesque ornare.</li>
            <li className="mt-5"><FontAwesomeIcon icon={faCircleCheck} color="orange" className="opacity-80"/> &nbsp;Nullam quis risus eget urna mollis ornare.</li>
            <li className="mt-5"><FontAwesomeIcon icon={faCircleCheck} color="orange" className="opacity-80"/>&nbsp;Donec id elit non mi porta gravida at eget.</li>
        </ul>
        <input type="submit" className="bg-orange-400 text-white text-lg font-bold font-sans px-6 py-3 rounded-lg mt-10 opacity-80 hover:translate-y-[-5px] duration-300" value={'Learn More'} />
      </div>
    </div>
  );
};

export default ThirdSection;
