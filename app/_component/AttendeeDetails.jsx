'use client'
import React,{useState} from 'react'
// import { FiChevronDown } from "react-icons/fi";
import Link from 'next/link';
import Image from 'next/image';
const AttendeeDetails = ({handlePrevious,handleNext,name,email,project,setEmail,setProject,setName,profileImage,handleImageUpload,errors}) => {
        
    const isFormValid = name.trim() !== "" && email.trim() !== "" && project.trim() !== "";
  return (
    <div className='bg-[#08252B] w-3/4 rounded-xl m-auto text-white'>
        <div className='p-4 mt-6'>
            <div className='flex justify-between items-center mx-1'>
                <h2 className='font-jeju text-3xl'>Attendee Details</h2>
                <span>Step 2/3</span>
            </div>
            <div className='border-0 bg-[#0E464F] h-1 rounded-2xl mt-2'> 
                <div className='border-0 rounded-2xl bg-[#24A0B5]  h-full w-2/3'></div>
            </div>
            <div className='p-4  shadow-xl bg-background mt-6 rounded-2xl'>
                <h5 className='text-xl mb-3'>Upload Profile Photo</h5>
                <div className=''>
                    <div className='relative w-40 h-40 bg-[#0e464f] m-auto flex flex-col items-center justify-center rounded-2xl'>
                    {profileImage ? (
                            <Image src={profileImage} height={800} width={900} alt='Profile Photo' className='rounded-3xl w-full h-full' />
                            ) : (
                            <>
                                <Image src={`/icon.png`} height={50} width={50} alt='Img_logo' />
                                <p className='p-4 text-center'>Drag & drop or click to upload</p>
                            </>
                            )}
                            <input 
                            type="file" 
                            accept="image/*" 
                            className="absolute w-full h-full opacity-0 cursor-pointer"
                            onChange={handleImageUpload} 
                            />
                    </div>
                    {errors.profileImage && 
                    <p className='text-red-500 text-sm mt-2'>
                        {errors.profileImage}
                        </p>
                        }
                </div>
            </div>
            <div className='border-0 bg-[#0E464F] h-1 rounded-2xl mt-6'> 
            </div>
            <section className='ticket-type mt-6 '>
                <div>
                <label htmlFor='name' className='my-4 block'>Enter your name</label>
                <input
                id='name'
                 className='border bg-[#08252B] border-[#0E464F] rounded-2xl p-4 w-full' 
                value={name}
                 onChange={(e)=>setName(e.target.value)}
                 aria-describedby={errors.name? 'name-error' : undefined }></input>
                 {errors.name && 
                    <p className='text-red-500 text-sm mt-2'>
                        {errors.name}
                        </p>
                        }
                </div>
                <div>
                <label htmlFor='email' className='my-4 block'>Enter your email*</label>
                <input id='email' type='email' 
                className='border bg-[#08252B] border-[#0E464F] rounded-2xl p-4 w-full'
                 value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  aria-describedby={errors.email? 'email-error' : undefined }
                  ></input>
                  {errors.email && 
                    <p className='text-red-500 text-sm mt-2'>
                        {errors.email}
                        </p>
                        }
                </div>
                <div>
                <p className='my-4'>About the project</p>
                <textarea className='border bg-[#08252B]  border-[#0E464F] rounded-2xl p-4 w-full' 
                value={project} onChange={(e)=>setProject(e.target.value)}
                aria-describedby={errors.project ? 'email-error' : undefined }>
                </textarea>
                {errors.project && 
                    <p className='text-red-500 text-sm mt-2'>
                        {errors.project}
                        </p>
                        }
                </div>
            </section>
            <div className='w-full mt-4 flex flex-col md:flex-row-reverse gap-3 font-jeju md:gap-6'>
            <button
            onClick={handleNext}
            // disabled={!isFormValid}
            className="mt-4 border w-full bg-[#24A0B5] border-[#2ba4b9] rounded-2xl p-4 text-white py-2 px-4  disabled:opacity-50"
            >
            Get My Free Ticket
            </button>
            <Link 
            href='/' 
            className='mt-4 w-full border text-center  border-[#2ba4b9] rounded-2xl p-4 text-white py-2 px-4'
            onClick={handlePrevious}>
                Back
            </Link>
            </div>
        </div>
        
    </div>
  )
}

export default AttendeeDetails
