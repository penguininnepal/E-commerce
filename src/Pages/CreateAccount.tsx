import LogoButton from "@/Components/Home/LogoButton";
import { useState } from "react";

type ErrorType = {
  firstname? : string,
  surname? : string,
  day? : string,
  month? : string,
  year? : string,
  gender? : string,
  email? : string,
  password? : string,
  confirmPassword?: string,
  otp? : string,
};

type FormType = {
  firstname : string,
  surname : string,
  day : string,
  month : string,
  year : string,
  gender : string,
  email : string,
  password : string,
  confirmPassword : string,
  otp : string,
};


const CreateAccount = () => {
  
  const [formData, setFormData] = useState<FormType>({
    firstname: "",
    surname: "",
    day: "",
    month: "", 
    year: "",
    gender: "",
    email: "",
    password: "",
    confirmPassword: "",
    otp: "",
  });

  const [errors, setErrors] = useState<ErrorType> ({});

  const [step, setStep] = useState(1);

  const validateStep = () => {
    const newErrors: ErrorType = {};
    if (step === 1) {
      if(!formData.firstname.trim())
      newErrors.firstname = "FirstName is Required"
    };

   if (step === 2) {
      if (!formData.day.trim()) newErrors.day = "Day required";
      if (!formData.month.trim()) newErrors.month = "Month required";
      if (!formData.year.trim()) newErrors.year = "Year required";
      if (!formData.gender.trim()) newErrors.gender = "Gender required";
    }

    if (step === 3){
      if(!formData.email.trim())
        newErrors.email = "Email is Required";
      else if (!/\S+@\S+\.\S+/.test(formData.email))
        newErrors.email = "Enter valid email address";
    };

     if (step === 4) {
      if (!formData.password.trim())
        newErrors.password = "Password required";
      else if (formData.password.length < 6)
        newErrors.password = "Password must be at least 6 characters";

      if (!formData.confirmPassword.trim())
        newErrors.confirmPassword = "Confirm your password";
      else if (formData.password !== formData.confirmPassword)
        newErrors.confirmPassword = "Passwords does not match. Please check again";
    }


    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value});
  };
  
  const handleNext = () => {
   if (validateStep()) {setStep((prev) => prev + 1 );
       } 
  };

  const handleBack = () => {
    setStep((prev) => prev - 1 );
  }

  const [showPassword, setshowPassword] = useState(false);
  
  return (
    <div className="flex  flex-col justify-center items-center h-screen bg-[#f0f1f5]">
      <div className="h-[350px] w-[1000px] px-10 pt-20 bg-[#fafafa] rounded-xl shadow-lg overflor-transparent transform hover:scale-105 hover:shadow-2xl duration-500  ">
        <div className="grid grid-cols-2">
          {/* Left Section <p> will change when Steps Change */}
          <div className="space-y-2">
            <LogoButton />
            <h1 className="text-2xl font-semibold">
              {step === 1 && 'Create a FM account'}
              {step === 2 && 'Basic information'}
              {step === 3 && 'How you will sign in'}
              {step === 4 && 'Create a strong Password'}
              {step === 5 && 'Verify'} </h1>
              
            <p className="font-semibold text-sm">
              {step === 1 && 'Enter your name'}
              {step === 2 && 'Enter your birth date and gender'}
              {step === 3 && 'Enter your email'}
              {step === 4 && 'Create a strong Password with a mixture of letters, numbers and symbols'}
              {step === 5 && 'Enter the OTP code sent to your email'}
            </p>
          </div>

          {/* Right side Form Fields */}
          <div className="space-y-4">
            {step === 1 && (
              <>
                  <div className="relative w-full">
                  <input type="text" 
                          placeholder="First Name" 
                          id="firstname" 
                          required
                          value={formData.firstname}
                          onChange={handleChange}
                    className={`peer placeholder-transparent p-4 w-full rounded-lg border-[1px] 
      ${errors.firstname 
        ? "border-red-500 focus:border-red-500 focus:outline-none" 
        : "border-gray-300 focus:border-green-500 focus:outline-none"}`}/>
                          <label htmlFor='firstname' 
                          className="absolute left-3 top-4 text-gray-400 transition-all 
                          cursor-text 
                          peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base 
                          peer-focus:-top-3 peer-focus:text-sm peer-focus:text-green-500 
                          peer-valid:-top-3 peer-valid:text-sm peer-valid:text-green-500 bg-[#fafafa] p-1">First Name</label>
                  </div>
                  {errors.firstname && <p className="px-2 text-sm text-red-500">{errors.firstname}</p>}
                  <div className="relative">
                    <input placeholder="SurName (optional)" 
                    required
                    id="surname" type="text" className="peer placeholder-transparent p-4 border-[1px] border-gray-300 w-full rounded-lg focus:border-green-500 focus:outline-none "/>
                    <label htmlFor="surname" className="absolute left-3 top-4 text-gray-400 transition-all 
                    cursor-text
                    peer-valid:-top-3 peer-valid:text-sm peer-valid:text-green-500 
                    peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base 
                    peer-focus:-top-3 peer-focus:text-sm peer-focus:text-green-500 bg-[#fafafa] p-1">Surname {'(optional)'}</label>
                  </div>
              </>
              )
            }

            {step === 2 && (
              <>
                <div className=" flex gap-4">
                  <div className="relative flex-1">
                    <input type="text" 
                    placeholder="Day" id="day" required 
                    value={formData.day}
                    onChange={handleChange}
                    className="peer placeholder-transparent p-4 w-full  border border-gray-300 rounded-lg focus:border-green-500 focus:outline-none"/>
                    <label htmlFor="day" className="absolute left-3 top-4 text-gray-400 transition-all 
                          cursor-text 
                          peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base 
                          peer-focus:-top-3 peer-focus:text-sm peer-focus:text-green-500 
                          peer-valid:-top-3 peer-valid:text-sm peer-valid:text-green-500 bg-[#fafafa] p-1">Day</label>
                  {errors.day && <p className="px-2 text-sm text-red-500">{errors.day}</p>}
                  </div>
                  <div className="relative flex-[2]">
                    <input type="text" placeholder="Month" id="month" required value={formData.month} onChange={handleChange} className="peer placeholder-transparent p-4 w-full  border border-gray-300 rounded-lg focus:border-green-500 focus:outline-none"/>
                    <label htmlFor="month" className="absolute left-3 top-4 text-gray-400 transition-all 
                          cursor-text 
                          peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base 
                          peer-focus:-top-3 peer-focus:text-sm peer-focus:text-green-500 
                          peer-valid:-top-3 peer-valid:text-sm peer-valid:text-green-500 bg-[#fafafa] p-1">Month</label>
                  {errors.month && <p className="px-2 text-sm text-red-500">{errors.month}</p>}
                  </div>
                  
                  <div className="relative flex-1">
                    <input type="text" placeholder="Year" id="year" required value={formData.year} onChange={handleChange} className="peer placeholder-transparent p-4 w-full border border-gray-300 rounded-lg focus:border-green-500 focus:outline-none"/>
                    <label htmlFor="year" className="absolute left-3 top-4 text-gray-400 transition-all 
                          cursor-text 
                          peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base 
                          peer-focus:-top-3 peer-focus:text-sm peer-focus:text-green-500 
                          peer-valid:-top-3 peer-valid:text-sm peer-valid:text-green-500 bg-[#fafafa] p-1">Year</label>
                  {errors.year && <p className="px-2 text-sm text-red-500">{errors.year} </p>}
                  </div>
                  
                </div>
                
                
                  <div className="relative">
                    <input type="text" placeholder="Gender" id="gender" required value={formData.gender} onChange={handleChange} className="peer placeholder-transparent w-full border p-4 rounded-lg border-gray-300 focus:border-green-500 focus:outline-none" />
                    <label htmlFor="gender" className="absolute left-3 top-4 text-gray-400 transition-all 
                          cursor-text 
                          peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base 
                          peer-focus:-top-3 peer-focus:text-sm peer-focus:text-green-500 
                          peer-valid:-top-3 peer-valid:text-sm peer-valid:text-green-500 bg-[#fafafa] p-1">Gender</label>
                  </div>
                  
                  {errors.gender && <p className="px-2 text-sm text-red-500">{errors.gender}</p>}
              </>
            )}


            {step === 3 && (
              <>
              <div>
                <div className="relative">
                  <input type='email' id="email" placeholder="" required value={formData.email} onChange={handleChange} className="peer p-4 w-full border border-gray-300 rounded-lg focus:border-green-500 focus:outline-none" />
                  <label htmlFor="email" className="absolute left-3 top-4 text-gray-400 transition-all 
                          cursor-text 
                          peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base 
                          peer-focus:-top-3 peer-focus:text-sm peer-focus:text-green-500 
                          peer-valid:-top-3 peer-valid:text-sm peer-valid:text-green-500 bg-[#fafafa] p-1">Email</label>
                </div>
                {errors.email && <p className="px-2 text-sm text-red-500">{errors.email} </p> }
              </div>
              </>
            )}

            {step === 4 && (
              <>
              <div className="relative w-full">
                  <input type={showPassword ? "text" : "password"} 
                          placeholder="First Name" 
                          id="password" 
                          required
                          value={formData.password}
                          onChange={handleChange}
                          className="peer placeholder-transparent p-4 border-[1px] border-gray-300 w-full rounded-lg focus:border-green-500 focus:outline-none "/>
                  <label htmlFor='password' 
                          className="absolute left-3 top-4 text-gray-400 transition-all 
                          cursor-text 
                          peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base 
                          peer-focus:-top-3 peer-focus:text-sm peer-focus:text-green-500 
                          peer-valid:-top-3 peer-valid:text-sm peer-valid:text-green-500 bg-[#fafafa] p-1">Password</label>
              </div>
              {errors.password && <p className="px-2 text-sm text-red-500">{errors.password}</p>}

              <div className="relative">
                  <input placeholder="" 
                      required
                      id="confirmPassword" type="text" 
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="peer placeholder-transparent p-4 border-[1px] border-gray-300 w-full rounded-lg focus:border-green-500 focus:outline-none "/>
                  <label htmlFor="confirmPassword" 
                          className="absolute left-3 top-4 text-gray-400 transition-all 
                          cursor-text
                          peer-valid:-top-3 peer-valid:text-sm peer-valid:text-green-500 
                          peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base 
                          peer-focus:-top-3 peer-focus:text-sm peer-focus:text-green-500 bg-[#fafafa] p-1">Confirm Password</label>
              </div>
              <div className="relative flex space-x-2 items-center">
                <input type="checkbox" id="showcheck" onClick={() => setshowPassword(!showPassword)} className="peer h-4 w-4 cursor-pointer rounded-md border-gray-300 text-green-600 focus:ring-green-500" />
                <label htmlFor="showcheck" className="text-gray-400 transition-color peer-checked:text-green-500 ">Show Password</label>
              </div>
              {errors.confirmPassword && (<p className="px-2 text-sm text-red-500">{errors.confirmPassword}</p>)}
              </>
            )}

            {
              step === 5 && (
                <>
                
                </>
              )
            }
            
            {/*  Next & Back Button */}
            
          </div>          
        </div>
              <div className="flex justify-end gap-4" >
              {
                step > 1 && (
                  <button onClick={handleBack} className="px-10 py-2 mt-6 bg-green-400 rounded-full text-white font-semibold cursor-pointer hover:bg-green-500 ">Back</button>
                )
              }
              {step < 5 && (
                <button onClick={handleNext} className="px-10 py-2 mt-6 bg-green-400 rounded-full text-white font-semibold cursor-pointer hover:bg-green-500 ">Next</button>
              )}
              
            </div>
      </div>
    </div>
  )
}

export default CreateAccount
