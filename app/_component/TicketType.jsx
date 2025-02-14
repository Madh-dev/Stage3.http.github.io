"use client"
import React,{useState,useEffect} from 'react'

const TicketType = ({setTicketType,ticketType}) => {
    const data = [
        {
            id:1,
            name: 'Regular Access',
            plan: 'Free',
            available: '20 left!'
        },
        {
            id:2,
            name: 'VIP access',
            plan: '$50',
            available: '20 left!'
        },
        {
            id:3,
            name: 'VVIP Access',
            plan: '$150',
            available: '20 left!'
        },
    ] // Track selected ticket (default to the first ticket)
    const [selectedTicket, setSelectedTicket] = useState(ticketType || data[0].name);
    useEffect(()=>{
        if (typeof window !== "undefined") {
            const storedTicket = localStorage.getItem("ticketType");
            if (storedTicket) setSelectedTicket(storedTicket);
        }
    },[])

    const handleSelect = (ticketName) => {
        setSelectedTicket(ticketName);
        setTicketType(ticketName);
        localStorage.setItem('ticketType',ticketName);
    };
  return (
    <div className='grid gap-4 bg-background border border-[#0E464F] rounded-2xl p-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-2' >
    {data.map((ticket,index)=>
        {
            return(
        <div 
        // className='hover:bg-[#197686] border border-[#0E464F]  p-2 rounded-xl flex justify-between items-start' 
        className={`border border-[#0E464F] p-2 rounded-xl flex justify-between items-start cursor-pointer transition-all 
            ${selectedTicket === ticket.name ? 'bg-[#197686]' : 'hover:bg-[#197686]'}`}
         key={ticket.id} 
         onClick={()=>handleSelect(ticket.name)}>
        <div className='flex flex-col gap-2'>
            <h3>{`${ticket.name.toUpperCase()}`}</h3>
            <p className='text-sm'>{ticket.available}</p>
        </div>
        <p className="border text-xl text-center md:text-right w-14 md:w-20 font-semibold py-2 md:pr-2 rounded-md bg-[#0e464F] border-[#2ba4b9]">
            {ticket.plan}
        </p>
    </div>
        )})}
     </div>
  )
}

export default TicketType
