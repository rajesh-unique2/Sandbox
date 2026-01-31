import React, { useState } from "react";
import creathink from "../Images/creathink.png";
import malory from "../Images/malory.png";
import eepsake from "../Images/eepsake.png";
import skybox from "../Images/skybox.png";
import brailie from "../Images/brailie.png";
import slowave from "../Images/slowave.png";
import rocket from '../Images/rocket.png' 
import loan from '../Images/loan.png'
import secure from '../Images/secure.png'
import "../App.css";
import FastTransaction from "./FastTransaction";
import { useNavigate } from "react-router-dom";
import ThirdSection from "./ThirdSection";



const SecondSection = () => {
    const usage = ([
        {id:1,
        image:rocket,
        heading:"Easy Usage",
        content:"Duis mollis commodo luctus curser commodo tortor mauris"
        },
        {
            id:2,
            image:loan,
            heading:'Fast Transaction',
            content:'Vivamus sagittis lacus augue fusce dapibus tellus nibh'
        },
        {
            id:3,
            image:secure,
            heading:'Secure Payements',  
            content:'Vestibulum ligula porta felis maecenas faucibus mollis'
        }
    ])
    const navi = useNavigate()
    
  return (
    
    <div className="md:mt-0  w-screen h-fit box-border flex justify-start items-start flex-col p-2 lg:p-5 bg-gray-50 sm:my-10 md:my-3 lg:m-0">
      <div className="w-full h-30 flex mb-20 justify-center items-center flex-col gap-10">
        <p className="text-slate-400 opacity-80 font-semibold font-sans uppercase text-[16px]">
          Trusted by Over 5000 Clients
        </p>
        <ul className="grid md:grid-cols-6 place-items-center grid-cols-3 lg:gap-25 gap-12 box-border md:px-10">
          <li className="md:w-22 w-auto max-w-22">
            <img src={slowave} alt="" />
          </li>
          <li className="md:w-22 w-auto max-w-22">
            <img src={eepsake} alt="" />
          </li>
          <li className="md:w-22 w-auto max-w-22">
            <img src={skybox} alt="" />
          </li>
          <li className="md:w-22 w-auto max-w-22 ">
            <img src={brailie} alt="" />
          </li>
          <li className="md:w-22w-auto max-w-22">
            <img src={malory} alt="" />
          </li>
          <li className="md:w-22 w-auto max-w-22">
            <img src={creathink} alt="" />
          </li>
        </ul>
      </div>
      <div className="w-full h-60 flex justify-center items-center flex-col gap-5 lg:mt-20 mt-0">
        <p className="text-slate-400 opacity-70 font-bold font-mono uppercase text-[20px]">
          why choose sandbox?
        </p>
        <h1 className="text-center lg:text-[38px] font-serif text-black md:w-160 text-3xl font-semibold">
          Here are a few reasons why our customers choose Sandbox.
        </h1>
      </div>
      <div className="w-full h-full grid lg:grid-cols-3 grid-cols-[1fr] m-0 sm:place-items-center lg:mt-20 gap-8">
        {
            usage.map((data)=>{
                return(
                    <div className="lg:w-100 sm:w-150 md:w-full md:px-14 h-auto p-2 flex sm:gap-5 flex-row opacity-100 text-black sm:hover:cursor-pointer sm:hover:shadow-2xl sm:hover:duration-300 sm:rounded-2xl hover:cursor-pointer hover:duration-300 hover:shadow-2xl" key={data.id} onClick={()=>{
                      if(data.id==1)
                        navi('/')
                      else if(data.id==2)
                        navi('/fast-transaction')
                      else 
                        navi('/secure-payments')
                    }}>
                        <div className="h-full inline-block mr-5 float-start"><img src={data.image} className="w-20 opacity-100" alt=""/></div>
                        <div className="h-full sm:w-75 md:w-full inline-flex flex-col">
                            <b className="lg:text-xl text-[21px] flex-1">{data.heading}</b>
                            <p className="lg:mt-3 text-slate-500 text-lg flex-1">{data.content}</p>
                        </div>
                    </div>
                )
            })
        }
      </div>
    </div>
  );
};

export default SecondSection;
