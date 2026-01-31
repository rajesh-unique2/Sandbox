import React from "react";
import "../App.css";
import { TypeAnimation } from "react-type-animation";
import typesomething from '../Images/typesomething.jpg'
import text from '../Images/text.jpg'
import anniechrist from '../Images/anniechrist.jpg'
import callieowen from '../Images/callieowen.jpg'
import chrisnewton from '../Images/chrisnewton.jpg'
import craftworkbank from '../Images/craftworkbank.jpg'

const FirstSection = () => {
  return (
    <div>
      <div className="min-w-sm overflow-x-hidden lg:pb-44 lg:flex-row flex flex-col-reverse lg:w-screen h-fit bg-blue-50 justify-center items-center box-content pb-16 font-[sans-serif] gap-8 ">
        <div className="flex lg:p-16 flex-4/10 lg:items-start justify-center w-screen items-center flex-col px-1 text-4xl font-serif text-center gap-4 lg:text-left md:text-5xl md:max-w-[70%]">
          <div className="font-semibold leading-12">
            Sandbox is effortless and powerful with
          </div>
          <TypeAnimation
            sequence={[
              "fast transaction",
              1000,
              "secure payment",
              1000,
              "easy usage",
              1000,
            ]}
            wrapper="h1"
            speed={50}
            repeat={Infinity}
            className="md:text-5xl text-4xl text-blue-600 font-semibold tracking-tighter lg:w-fit"
          />
          <div className="text-xl text-slate-500 font-sans py-4 tracking-wide md:text-[22px] font-normal">
            {" "}
            Achieve your saving goals. Have all your recurring and one time
            expenses and incomes in one place
          </div>
          <div className="text-xl font-bold text-white flex gap-4 font-sans ">
            <button className="px-8 py-4 bg-blue-500 rounded-xl hover:-translate-y-3 hover:cursor-pointer duration-300 shadow-2xl">
              Get Started
            </button>
            <button className="px-8 py-4 bg-green-500 rounded-xl hover:-translate-y-3 duration-300 hover:cursor-pointer shadow-2xl">
              Free Trial
            </button>
          </div>
        </div>

        {/*right content forimages*/}

        <div className="lg:m-0 h-100 p-14 flex-5/10 lg:p-0 lg:h-140 flex justify-items-stretch items-stretch mx-[3%] lg:gap-4  sm:flex-wrap">
          <div className="lg:items-end lg:justify-end flex flex-col flex-2 items-start gap-6 justify-center lg:pb-15">
            <img
              src={
                typesomething
              }
              alt=""
              className="w-[75%] rounded-lg lg:w-[68%]"
            />
            <img
              src={
                text
              }
              alt=""
              className="w-[75%] rounded-lg lg:w-[80%]"
            />
          </div>
          <div className=" flex flex-col flex-2 justify-center lg:flex-3 lg:justify-end items-center">
            <img
              src={
                anniechrist
              }
              alt=""
              className="lg:w-[90%] rounded-xl"
            />
          </div>
          <div className="lg:items-start lg:justify-end lg:pb-15 flex flex-col flex-2 justify-center gap-6 items-end">
            <img
              src={
                chrisnewton
              }
              alt=""
              className="lg:w-[75%] w-[70%] rounded-lg"
            />
            <img
              src={
                callieowen
              }
              alt=""
              className="lg:w-[75%] w-[70%] rounded-lg"
            />
            <img
              src={
                craftworkbank
              }
              alt=""
              className="lg:w-[75%] w-[70%] rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;

{
  /* <div className="w-sm lg:w-170 h-130 inline-block">
          <div className="w-20 lg:w-40 h-full inline-block ml-5">
            <img
              src={
                "https://sandbox.elemisthemes.com/assets/img/photos/sa20@2x.jpg"
              }
              alt=""
              className="mt-30 mb-10 rounded-lg h-20 w-30 float-end"
            />
            <img
              src={
                "https://sandbox.elemisthemes.com/assets/img/photos/sa18@2x.jpg"
              }
              alt=""
              className="mb-10 rounded-lg"
            />
          </div>
          <div className="w-60 h-full inline-block ml-5 mb-10 ">
            <img
              src={
                "https://sandbox.elemisthemes.com/assets/img/photos/sa16@2x.jpg"
              }
              alt=""
              className="w-30 lg:w-full mt-5 mb-10 rounded-lg"
            />
          </div>
          <div className="w-35 h-full inline-block ml-5 mb-10 ">
            <img
              src={
                "https://sandbox.elemisthemes.com/assets/img/photos/sa21@2x.jpg"
              }
              alt=""
              className="mt-30 mb-5 rounded-lg"
            />
            <img
              src={
                "https://sandbox.elemisthemes.com/assets/img/photos/sa19@2x.jpg"
              }
              alt=""
              className="mb-5 rounded-lg h-33"
            />
            <img
              src={
                "https://sandbox.elemisthemes.com/assets/img/photos/sa17@2x.jpg"
              }
              alt=""
              className="rounded-lg h-20"
            />
          </div>
        </div> */
}

{
  /* <div className="lg:py-10 lg:h-130 lg:px-18 px-5 h-auto w-130 inline-block py-0">
          <div className="lg:w-100 w-screen h-auto text-[33px] text-center lg:text-5xl break-word text-slate-900 font-serif lg:pl-0 pl-[10%] font-semibold leading-tight opacity-85 lg:text-start lg:block">
            Sandbox is effortless and powerful with
          </div>
          <div className="m-0 w-screen lg:w-150 text-[33px] lg:text-5xl lg:px-0 lg:text-left text-center px-[10%] text-blue-800 font-semibold font-serif py-3 opacity-75 pb-4">
            <TypeAnimation
              sequence={[
                "fast transactions",
                1000, 
                "secure payments",
                1000,
                "easy usage",
                1000,
              ]}
              wrapper="h1"
              speed={50}
              repeat={Infinity}
            />
          </div>
          <div className=" py-5 text-[21px] text-slate-500 w-100 tracking-wide font-semibold">
            Achieve your saving goals. Have all your recurring and one time
            expenses and incomes in one place
          </div>
          <div className=" w-100 h-24 flex font-[sans-serif] justify-start items-center gap-2 text-xl font-semibold">
            <input
              type="submit"
              value={"Get Started"}
              className="bg-blue-700 text-white py-3 px-8 duration-300 rounded-lg hover:translate-y-[-10px] h-15 text-lg opacity-75 cursor-pointer"
            />
            <input
              type="button"
              value="Free Trail"
              className=" text-white bg-green-600 py-3 px-8 opacity-60 hover:translate-y-[-10px] duration-300 rounded-lg h-15  text-lg cursor-pointer"
            />
          </div>
        </div> */
}
