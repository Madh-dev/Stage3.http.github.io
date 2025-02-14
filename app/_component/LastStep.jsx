'use client'
import Image from 'next/image'
import Link from 'next/link'

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';



const LastStep = ({ setStep, name, email, ticketType,ticketCount,project,profileImage}) => {
  const downloadTicket = () => {
    const ticketElement = document.getElementById('ticket'); // Add an ID to the ticket container
    html2canvas(ticketElement).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 10, 10, 180, 250);
      pdf.save('TechemberFest_Ticket.pdf');
    });
  };
  
const anotherTicket = ()=>{
  localStorage.clear(); 
  setStep(1);
    setStep(1);
}
  return (
    <div className='bg-[#08252B] w-3/4 rounded-xl m-auto text-white'>
        <div className='p-4 mt-6'>
            <div className='flex justify-between items-center mx-1  '>
                <h2 className='font-jeju text-3xl'>Ready</h2>
                <span>Step 3/3</span>
            </div>
            <div className='border-0 bg-[#0E464F] h-1 rounded-2xl  mt-2'> 
                <div className='border-0 rounded-2xl bg-[#24A0B5]  h-full w-1/3'></div>
            </div>
            <div className='p-4 text-center  mt-2'>
                <h1 className='text-3xl mb-3 font-geist'>Your Ticket is Booked!</h1>
                <p className=' font-roboto'>
                    You can download or Check your email for a copy
                </p>
            </div>
            <div 
            className="bg-[url('/ticket.svg')] bg-contain bg-center bg-no-repeat w-[300px] min-h-[700px] flex flex-col justify-center items-center relative m-auto overflow-hidden  px-64"
            >
              <div className=''>
              <div className='flex flex-col border rounded-2xl border-[#24A0B5] p-8 mt-5 justify-center items-center min-w-[260px]  min-h-[450px]'>
                  <h1 className='text-[34px] font-normal mb-1 font-road'>Techember Fest "25</h1>
                  <p className='font-roboto font-normal text-[10px]'>📍04 Rumens road, Ikoyi, Lagos <br/>📅 March 15, 2025 | 7:00 PM</p>
                {profileImage &&
                <Image src={profileImage}
                 alt='image' width={100}
                  height={100}
                   className='h-[140px] w-[140px] rounded-xl border-4 border-[#24A0B5] shadow-2xl'/>
                } 
                <div className='rounded-xl mt-8 grid grid-cols-2 bg-[#08343c]  border  font-roboto font-normal text-[10px] w-[95%]'>
                    <div className='border-r border-b p-3 border-gray-600 w-full'>
                      <p className='opacity-[30%]'>Enter your name</p>
                      <h2 className='font-semibold text-[12px] break-words w-full'>{name}</h2>
                    </div>
                    <div className='p-3 border-b border-gray-600 w-full'>
                      <p className='opacity-[30%]'>Enter your email*</p>
                      <h2 className='font-semibold text-[12px] break-words w-full'>{email}</h2>
                    </div>
                    <div className='p-3 border-r border-gray-600'>
                      <p  className='opacity-[30%]'>Ticket Type:</p>
                      <h2 className='font-semibold text-[12px]'>{ticketType}</h2>
                    </div>
                    <div className='p-3'>
                      <p  className='opacity-[30%]'>Ticket for:</p>
                      <h2 className='font-semibold text-[12px]'>{ticketCount}</h2>
                    </div>
                    <div className='p-3 col-span-2 border-t border-gray-600'>
                      <p  className='opacity-[30%]'>Special request?</p>
                      <h2 className='font-semibold text-[12px]'>{project}</h2>
                    </div>
                    
                </div>
                </div>
                  <Image 
                  src={`/barcode.png`}
                   alt='barcode'
                    height={100} width={200}
                     className='h-[60px] object-contain mx-auto mt-24 mb-9'/>
              </div>
            </div>
         </div>
        <div className='w-full p-2 md:p-8 flex flex-col  md:flex-row-reverse gap-3 md:gap-6 font-jeju'>
            <button
            onClick={downloadTicket}
            className="mt-4 border bg-[#24A0B5] w-full border-[#2ba4b9] rounded-2xl p-4 text-white py-2 px-4  disabled:opacity-50"
            >
            Download Ticket
            </button>
            <Link href='/' 
            onClick={anotherTicket}
            className='mt-4 w-full border text-center  border-[#2ba4b9] rounded-2xl p-4 text-white py-2 px-4 '>
            Book Another Ticket
            </Link>
        </div>
        
    </div>
  )
}

export default LastStep
