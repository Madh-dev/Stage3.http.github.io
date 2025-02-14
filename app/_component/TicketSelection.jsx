'use client'
import React,{useState} from 'react'
import TicketType from './TicketType'
import { FiChevronDown } from "react-icons/fi";
import Link from 'next/link';

const TicketSelection = ({ticketCount,setTicketCount,handleNext,setTicketType}) => {
 
  return (
    <div className='bg-[#08252B] w-3/4 rounded-xl m-auto text-white'>
        <div className='p-4 mt-6'>
            <div className='md:flex justify-between items-center mx-1  '>
                <h2 className='font-jeju text-3xl'>Ticket Selection</h2>
                <span className='font-roboto text-base'>Step 1/3</span>
            </div>
            <div className='border-0 bg-[#0E464F] h-1 rounded-2xl mt-2'> 
                <div className='border-0 rounded-2xl bg-[#24A0B5]  h-full w-1/3'></div>
            </div>
            <div className='p-4 text-center shadow-xl bg-background mt-6 rounded-2xl'>
                <h1 className='text-5xl mb-3 font-road'>Techember Fest "25</h1>
                <p className='mb-8'>Join us for an unforgettable <br/> experience at [Event Name]! Secure your spot now.
                </p>
                <p>📍[Event Location] <br/> March 15,2025 | 7:00 PM</p>
            </div>
            <div className='border-0 bg-[#0E464F] h-1 rounded-2xl mt-6'> 
            </div>
            <section className='ticket-type mt-6 '>
                <p>Select Ticket Type:</p>
                <TicketType setTicketType={setTicketType}/>
            </section>
            <div className=' mt-6 relative'>
                <label htmlFor='ticketCount'>
                    Number of Tickets:
                </label><br/>
                <select id='ticketCount'
                value={ticketCount}
                onChange={(e)=> setTicketCount(e.target.value)}
                className='bg-[#08252B] border border-[#0E464F] rounded-2xl p-4 w-full appearance-none pr-10'>
                    {[1,2,3,4,5].map((number)=>(
                        <option key={number} value={number}>
                            {number}
                        </option>
                    ))}
                </select>
                <FiChevronDown className="absolute right-4 top-2/3 cursor-pointer transform -translate-y-1/2 text-white pointer-events-none" />
            </div>
            <div className='w-full flex flex-col md:flex-row-reverse md:bg-background md:justify-around  md:px-4 gap-4 mt-3 pb-3 rounded-2xl'>
            <button
            onClick={handleNext}
            disabled={!ticketCount}
            className="mt-4 border w-full font-jeju bg-[#24A0B5] border-[#2ba4b9] rounded-2xl p-4 text-white py-2 px-4  disabled:opacity-50"
            >
            Next 
            </button>
            <Link href='/' className='mt-4 w-full font-jeju border text-center  border-[#2ba4b9] rounded-2xl p-4 text-white py-2 px-4 '>
            Cancel
            </Link>
            </div>
        </div>
        
    </div>
  )
}

export default TicketSelection
