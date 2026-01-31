import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import lines from '../Images/lines.jpg'
import ava from '../Images/ava.jpg'
import datas from '../Images/datas.jpg'
import { Links } from 'react-router-dom';
import typesomething from '../Images/typesomething.jpg'

const FastTransaction = () => {
  return (
    <div className='h-screen w-screen flex flex-col-reverse lg:flex-row items-center justify-center gap-10 md:gap-25 lg:gap-10 px-5 md:px-10 py-15 bg-gray-100 box-border overflow-x-hidden'>
        <div className="h-full flex-1 text-wrap text-black lg:px-10">
        <h2 className="font-semibold text-black text-2xl mb-5">Fast Transactions</h2>
        <p className="font-sans text-lg text-slate-600">
          Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper
          nulla non metus auctor fringilla. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus
          commodo, tortor mauris con dimentum nibh, ut fermentum massa justo sit
          amet risus. Nullam quis risus eget urna.
        </p>
        <ul className="font-sans text-slate-600 text-lg">
            <li className="mt-6"><FontAwesomeIcon icon={faCircleCheck} color="green" className=" opacity-80"/> &nbsp;Aenean eu leo quam. Pellentesque ornare.</li>
            <li className="mt-3"><FontAwesomeIcon icon={faCircleCheck} color="green" className=" opacity-80"/> &nbsp;Nullam quis risus eget urna mollis ornare.</li>
            <li className="mt-3"><FontAwesomeIcon icon={faCircleCheck} color="green" className=" opacity-80"/>&nbsp;Donec id elit non mi porta gravida at eget.</li>
        </ul>
        <input type="submit" className="bg-green-700 text-white text-lg font-bold font-sans px-6 py-3 rounded-lg mt-10 opacity-80 hover:translate-y-[-5px] duration-300" value={'Learn More'} />
      </div>
        <div className='grid place-items-center grid-cols-2 flex-1 lg:pr-10 md:gap-5 lg:gap-0'>
              <div className='flex justify-center w-[35vw] items-end lg:w-52 lg:h-52 md:w-[35vw] md:h-[20vh] md:pl-5 md:pt-10'><img className='lg:w-62 lg:h-35 rounded-lg' src={typesomething} alt="" /></div>
              <div className='flex justify-center w-[50vw] pl-5 items-center lg:pt-5 lg:w-82 lg:h-52 md:w-[55vw] md:h-[20vh]'><img className='lg:w-70 lg:h-35 rounded-lg md:pr-15 lg:pr-0 ' src={datas} alt="" /></div>
              <div className='flex justify-end w-[35vw] flex-wrap items-end lg:w-52 lg:h-52 lg:pt-5 md:w-[35vw] md:h-[20vh]'><img className='lg:h-48 lg:w-44 md:w-56 rounded-lg w-30' src={lines} alt="" /></div>
              <div className='flex justify-center w-[50vw] pl-5 items-start lg:w-64 lg:h-52 md:w-[55vw] md:h-[20vh]'><img className='lg:w-85 lg:h-42 rounded-lg md:pr-15 md:pl-5 lg:p-0' src={ava} alt="" /></div>
        </div>
    </div>
  )
}

export default FastTransaction

 {/* <div className='w-full flex flex-col items-end md:justify-end justify-center gap-5 h-full box-border flex-[1.5] md:py-5'>
            <img className='w-37 h-30 md:w-65 md:h-50 rounded-2xl' src="https://sandbox.elemisthemes.com/assets/img/photos/sa9@2x.jpg" alt="" />
            <img className='w-30 md:h-60 md:w-55 rounded-2xl' src={lines} alt="" />
          </div>
          <div className='w-full flex flex-col items-start justify-start h-full flex-2 gap-5'>
            <img className='w-55 h-30 md:w-85 md:h-40 rounded-2xl' src={datas} alt="" />
            <img className='w-50 h-35 md:w-85 md:h-52 rounded-2xl' src={ava} alt="" />
          </div> */}