import React from "react";
import card from "../Images/card.jpg";
import moonfever from "../Images/moonfever.jpg";
import text from "../Images/text.jpg";
import delia from "../Images/delia.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";    

const SecurePayments = () => {
  return (
    <div className="flex flex-col p-5 bg-slate-100 lg:flex-row lg:p-20 lg:gap-15 lg:font-[sans-serif]">
      <div className="grid grid-cols-2 gap-8 lg:flex-1">
        <div className="flex justify-start items-end flex-col  gap-5">
            <img className="rounded-lg" src={card} alt="" />
            <img className="rounded-lg w-[80%]" src={text} alt="" />  
        </div>
        <div className="flex flex-col gap-5 py-8 justify-end items-start">
            <img className="rounded-lg" src={moonfever} alt="" />
            <img className="rounded-lg w-[80%]" src={delia} alt="" />
        </div>
      </div>
      <div className="lg:flex-1">
        <h2 className="font-semibold text-black text-2xl mb-5">Secure Payments</h2>
                <p className="font-sans text-lg text-slate-600">
                  Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper
                  nulla non metus auctor fringilla. Morbi leo risus, porta ac
                  consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus
                  commodo, tortor mauris con dimentum nibh, ut fermentum massa justo sit
                  amet risus. Nullam quis risus eget urna.
                </p>
                <ul className="font-sans text-slate-600 text-lg">
                    <li className="mt-6"><FontAwesomeIcon icon={faCircleCheck} color="red" className=" opacity-80"/> &nbsp;Aenean eu leo quam. Pellentesque ornare.</li>
                    <li className="mt-3"><FontAwesomeIcon icon={faCircleCheck} color="red" className=" opacity-80"/> &nbsp;Nullam quis risus eget urna mollis ornare.</li>
                    <li className="mt-3"><FontAwesomeIcon icon={faCircleCheck} color="red" className=" opacity-80"/>&nbsp;Donec id elit non mi porta gravida at eget.</li>
                </ul>
                <input type="submit" className="bg-red-600 text-white text-lg font-bold font-sans px-6 py-3 rounded-lg mt-10 opacity-80 hover:translate-y-[-5px] duration-300" value={'Learn More'} />
    </div></div>
  );
};

export default SecurePayments;
