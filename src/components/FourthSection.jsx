import React, { use } from "react";
import { useState } from "react";
import person1 from '../Images/Humans/person1.jpg'
import person2 from '../Images/Humans/person2.jpg'
import person3 from '../Images/Humans/person3.jpg'
import person4 from '../Images/Humans/person4.jpg'
import person5 from '../Images/Humans/person5.jpg'
import person6 from '../Images/Humans/person6.jpg'
import secure from '../Images/secure.png'
import loan from '../Images/loan.png'
import reload from '../Images/reload.png'
import { useNavigate } from "react-router-dom";
import videothumbnail from '../Images/video-thumbnail.jpg'
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import VideoComponent from "./VideoComponent";

const FourthSection = () => {
  const [video, setvideo] = useState(false);
  const navigate = useNavigate();
  const [worksImage, setworksImage] = useState([
    {
      image:secure,
      heading:'Secured Transactions',
      content:'Nulla vitae elit libero pharetra augue dapibus. Praesent commodo cursus.'
    },
    {
      image:loan,
      heading:'Bills Planning',
      content:'Vivamus sagittis lacus vel augue laoreet. Etiam porta sem malesuada magna.'
    },
    {
        image:reload,
        heading:'Always up to date',
        content:'Cras mattis consectetur purus sit amet. Aenean lacinia bibendum nulla sed.'
    }
  ])
  const [comments, setcomments] = useState([
    {
      content:"“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Cras justo odio dapibus facilisis sociis natoque penatibus.”",
      name:'Coriss Ambady',
      job:'Financial Analyst',
      image:person1
    },
    {
        content:"“Fusce dapibus, tellus ac cursus tortor mauris condimentum fermentum massa justo sit amet. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.”",
        name:"Cory Zamora",
        job:"Marketing Specialist",
        image:person2
    },
    {
        content:"“Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget porta ac consectetur vestibulum. Donec sed odio dui consectetur adipiscing elit.”",
        name:"Nikolas Brooten",
        job:"Sales Manager",
        image:person3

    },
    {
        content:"“Etiam adipiscing tincidunt elit convallis felis suscipit ut. Phasellus rhoncus tincidunt auctor. Nullam eu sagittis mauris. Donec non dolor ac elit aliquam tincidunt at at sapien. Aenean tortor libero condimentum ac laoreet vitae.”",
        name:"Coriss Ambady",
        job:"Financial Analyst",
        image:person4
    },
    {
        content:"“Maecenas sed diam eget risus varius blandit sit amet non magna. Cum sociis natoque penatibus magnis dis montes, nascetur ridiculus mus. Donec sed odio dui. Nulla vitae elit libero a pharetra.”",
        name:"Jackie Sanders",
        job:"Investment Planner",
        image:person5
    },{
        content:"“Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, a pharetra augue. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.”",
        name:"Laura Widerski",
        job:"Sales Specialist",
        image:person6
    }
  ]);
  return (
    <div className="lg:w-screen py-15  lg:mt-30 box-border opacity-100 font-sans md:py-30 lg:px-5 lg:p-0">
      <div className="flex items-center justify-center flex-col lg:gap-10 gap-3 bg-white wrap-break-word">
        <div className="text-center text-slate-400 uppercase tracking-wider font-bold ">
          Happy Customers
        </div>
        <div className="text-center text-slate-800 lg:text-4xl lg:w-180 font-serif font-bold text-[26px] flex-wrap text-wrap md:px-10 md:text-3xl">
          Don't take our word for it. See what customers are saying about us.
        </div>
      </div> 
       <div className="w-full lg:mt-20 md:py-10 bg-blue-50 grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 gap-2 lg:pb-30 h-fit">
        {comments.map((data,id)=>{
        return (
            <div key={id} className="grid gap-8 md:m-3 m-5 w-fit lg:w-90 p-10 rounded-2xl bg-white">
                <div>⭐⭐⭐⭐⭐</div>
                <div className="text-slate-500 font-sans text-lg opacity-100">{data.content}</div>
                <div className="flex justify-items-stretch items-stretch gap-8">
                    <div><img src={data.image} alt="" className="w-20 h-20 rounded-[50px] object-cover"/></div>
                    <div>
                      <div className="text-[20px] font-medium text-slate-800 ">{data.name}</div>
                      <div className="text-[18px] text-slate-500 ">{data.job}</div>
                    </div>
                </div>
            </div>)
        })
    }
      </div>
      <div className="flex lg:flex-row flex-col p-5 lg:justify-center lg:items-center lg:gap-15 w-screen h-screen lg:mt-20">
        <div className="h-150 md:w-130 lg:h-100 lg:w-120 bg-blue-100 rounded-lg relative" onClick={()=>{ navigate('/videopage')}}> 
         <img src={videothumbnail} alt="" className="absolute lg:bottom-10 lg:right-10 lg:w-[75rem] h-auto rounded-2xl md:w-full md:h-full"/>
         <FontAwesomeIcon icon={faCirclePlay} className="text-blue-500  absolute top-1/2 left-1/2 md:-translate-x-2/2 md:-translate-y-3/2 -translate-x-1/2 -translate-y-1/2 object-cover rounded-full text-7xl opacity-90 hover:opacity-100 cursor-pointer"/>
        </div>
        <div className="flex justify-items-stretch items-start flex-col gap-3 lg:w-105 mt-10">
          <p className="font-sans font-medium text-slate-400 text-lg uppercase">How It Works?</p>
          <p className="text-[28px] lg:text-4xl lg:w-70 font-serif font-bold text-black">Here are the 3 working steps on success.</p>
          <ul className="list-none flex justify-center items-center gap-4 flex-col flex-wrap">
            {worksImage.map((data,id)=>{
              
              return (<li className="flex justify-center gap-4 items-center" key={id}>
                <img src={data.image} alt="" className="w-15 h-15 md:w-20 md:h-18 opacity-100" />
                <div>
                  <p className="font-medium text-black text-lg">{data.heading}</p>
                  <p className="text-slate-500 font-sans">{data.content}</p>
                </div>
              </li>)
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
