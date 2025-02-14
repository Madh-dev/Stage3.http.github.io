'use client'
import Image from "next/image";
import TicketSelection from "./_component/TicketSelection";
import AttendeeDetails from "./_component/AttendeeDetails";
import LastStep from "./_component/LastStep";
import React,{useState,useEffect} from 'react'


export default function Home() {
  const [step, setStep] = useState(1);
  const [ticketCount, setTicketCount] = useState(() => localStorage.getItem("ticketCount") || "");
  const [ticketType, setTicketType] = useState(() => localStorage.getItem("ticketType") || "");
  const [name, setName] = useState(() => localStorage.getItem("name") || "");
  const [email, setEmail] = useState(() => localStorage.getItem("email") || "");
  const [project, setProject] = useState(() => localStorage.getItem("project") || "");
  const [profileImage, setProfileImage] = useState(()=>localStorage.getItem('profileImage')|| null);
  const [isUploading, setIsUploading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleNext = () => {
    if (step === 2) {
      let validationErrors = {};
      if (!name.trim()) validationErrors.name = "Full Name is required";
      if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
        validationErrors.email = "Invalid email format";
      if (!profileImage) validationErrors.profileImage = "Avatar upload is required";

      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }
    }
    setErrors({});
    setStep((prev) => Math.min(prev + 1, 3));
  };
  const handlePrevious = () => setStep((prev) => Math.max(prev - 1, 1));
  const handleImageUpload = async(e) => {
    const file = e.target.files[0];
    if(file){
      setIsUploading(true);
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset",process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET); //my Coudindary
try {
  const response = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,{
    method:"POST",
    body: formData,
  });
  const data = await response.json();
      if(data.secure_url){
        setProfileImage(data.secure_url);
        localStorage.setItem('profileImage',data.secure_url)
      }

} catch (error) {
  console.error('Image upload failed',error)
}finally{
  setIsUploading(false)
}
 }

  };
  
  useEffect(() => {
    localStorage.setItem("ticketType", ticketType);
    localStorage.setItem("ticketCount", ticketCount);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("project", project);
  }, [ticketType, ticketCount,name,email,project]);

  return (
    <div className="">    
   { step === 1 &&
    <TicketSelection  ticketCount={ticketCount} setTicketCount={setTicketCount}  handleNext={handleNext} setTicketType={setTicketType} ticketType={ticketType}/>
    }
    {step === 2 && 
    <AttendeeDetails 
    handlePrevious={handlePrevious}
    handleNext={handleNext} name={name} 
    email={email} project={project} 
    setEmail={setEmail} setProject={setProject} 
    setName={setName} profileImage={profileImage} 
    handleImageUpload={handleImageUpload} isUploading={isUploading}
     errors={errors}/> 
    }
    {step === 3 &&
    <LastStep  setStep={setStep} name={name} email={email} profileImage={profileImage} ticketType={ticketType} ticketCount={ticketCount} project={project}/>
    }
    </div>
  );
}
