import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import 'animate.css'

const FifthSection = () => {
    const [isOn, setIsOn] = useState(false)
    const [datas, setdatas] = useState([
      {
        id:1,
        rupees:19,
        plan:'Premium Plan',
        period:'mo',
        list:{
            project:5,
            API:'100K',
            storage:'200MB',
        },
        support:0
      },
      {
        id:2,
        rupees:49,
        period:'mo',
        plan:'Premium Plan',
        list:{
            project:20,
            API:'300K',
            storage:'500MB',
        },
        support:1
      }
    ])
    
    useEffect(()=>{
      if(isOn){
       setdatas([{...datas[0],period:'yr',rupees:199},{...datas[1],period:'yr',rupees:499}])
      }
      else{
        setdatas([{...datas[0],period:'mo',rupees:19},{...datas[1],period:'mo',rupees:49}])
      }
      console.log('toggle changed',isOn);
      
    },[isOn])
    
  return (
    <div className='w-screen px-10 py-5 bg-white text-slate-600'>
        <div className='w-full pr-10 flex justify-end items-center m-0 text-[18px] gap-3'>Monthly <div className=''>
          <input type="checkbox" name="" id="toggle"className=' hidden'onChange={()=>{setIsOn(prev=>!prev)}} />
          <label htmlFor="toggle" className='bg-slate-200 w-12 h-7 inline-block rounded-full relative'><span className={`absolute h-5 w-5 rounded-full left-1 top-1 bg-blue-600 duration-200 ${isOn?'translate-x-5':''}`}></span></label>
        </div>Yearly <span className='text-red-500'>(Save 30%)</span>
    </div>
    <div className='w-full h-full flex justify-items-stretch items-center p-5'>
      <div className='h-full w-150 flex flex-col items-start justify-start gap-10'>
        <p className='uppercase text-slate-400 text-md font-medium'>Our Pricing</p>
        <h1 className='text-black font-serif font-bold text-[40px] opacity-75'>We offer great and premium prices.</h1>
        <p className='text-lg'>Enjoy a <span className='text-blue-500 '>free 30-day trial</span> and experience the full service. No credit card required!</p>
        <input type="button" value="See All Prices" className='bg-blue-600 px-5.5 py-4 rounded-lg text-[16px] text-white font-bold duration-200 hover:shadow-2xl hover:translate-y-[-3px]' />
      </div>
      <div className='w-full h-screen flex flex-row justify-around items-center'>
      {datas.map((data,id)=>{
        
        return (
        
        <div className='w-80 py-5 py-10 rounded-2xl flex flex-col justify-items-start gap-5 items-center bg-white shadow-2xl' key={id}>
          <p className={`animate__animated ${isOn?'animate__fadeInDown' :'animate__slideInDown'} text-2xl font-mono duration-300`}><span className='float-start p-1'>$</span><span className='text-5xl text-black'>{data.rupees}</span>/{data.period}
          </p><p className='text-2xl font-medium text-black '>{data.plan}</p>
          <ul className='text-[18px] font-medium flex flex-col gap-5 p-3'>
            <li className='text-slate-400'><FontAwesomeIcon icon={faCircleCheck} color="blue" className="opacity-80"/> <span className='text-slate-600'>{data.list.project}</span> Projects</li>
            <li className='text-slate-400'><FontAwesomeIcon icon={faCircleCheck} color="blue" className="opacity-80"/> <span className='text-slate-600'>{data.list.API}</span> API Access</li>
            <li className='text-slate-400'><FontAwesomeIcon icon={faCircleCheck} color="blue" className="opacity-80"/> <span className='text-slate-600'>{data.list.storage}</span> Storage</li>
            <li className='text-slate-400'><FontAwesomeIcon icon={faCircleCheck} color="blue" className="opacity-80"/> Weekly<span className='text-slate-600'> Reports</span></li>
            <li className='text-slate-400'>{data.support?<FontAwesomeIcon icon={faCircleCheck} color="blue" className="opacity-80"/>:'❌'} 7/24<span className='text-slate-600'>Support</span></li>
          </ul>
      </div>
      
      )})
      }
      </div>
    </div>
    </div>
  )
}

export default FifthSection