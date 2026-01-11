import React from "react";
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
import video from '../Images/videos/video.mp4'

const FourthSection = () => {
  const [size, setsize] = useState(false)
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
    <div className="w-screen  mt-30 box-border opacity-100">
      <div className="flex items-center justify-center flex-col gap-10 bg-white">
        <div className="text-center text-slate-400 uppercase font-mono tracking-wider font-bold">
          Happy Customers
        </div>
        <div className="text-center text-slate-800 text-4xl w-180 font-serif font-bold">
          Don't take our word for it. See what customers are saying about us.
        </div>
      </div>
      <div className="w-full mt-20 bg-blue-50 grid place-items-center grid-cols-3 p-5 gap-2 pb-30">
        {comments.map((data,id)=>{
        return (
            <div key={id} className="grid gap-8 w-90 p-10 rounded-2xl bg-white">
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
      <div className="flex p-5 justify-center  items-center gap-15 w-screen h-screen mt-20">
        <div className="h-100 w-120 bg-blue-100 relative rounded-lg">
         <video src={video} className="w-full h-110 absolute translate-x-[-40px] translate-y-[-100px] rounded-3xl"></video>
        </div>
        <div className="flex justify-items-stretch items-start flex-col h-full gap-3 w-105">
          <p className="font-sans font-medium text-slate-400  text-lg uppercase">How It Works?</p>
          <p className="text-4xl w-70  font-serif font-bold text-black">Here are the 3 working steps on success.</p>
          <ul className="list-none flex justify-center items-center gap-4 flex-col">
            {worksImage.map((data,id)=>{
              
              return (<li className="flex justify-center gap-4 items-center" key={id}>
                <img src={data.image} alt="" className="w-20 h-18 opacity-100" />
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
