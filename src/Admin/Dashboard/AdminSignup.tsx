import LogoButton from "@/Components/Home/LogoButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, Eye, EyeOff } from "lucide-react";

type FormType = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  businessName: string;
  businessRegistrationNumber: string;
  businessCity: string;
  businessProvince: string;
  productSellingType: string;
  password: string;
  confirmPassword: string;
  otp: string;
};

const AdminSignup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormType>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    businessName: "",
    businessRegistrationNumber: "",
    businessCity: "",
    businessProvince: "",
    productSellingType: "",
    password: "",
    confirmPassword: "",
    otp: "",
  });

  const [errors, setErrors] = useState<Partial<FormType>>({});
  const [step, setStep] =useState(1);
  const [showPassword, setShowPassword] = useState(false);

  const validateStep = () => {
    const newErrors: Partial<FormType> = {};
    if (step === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
      if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
      if (!formData.email.trim()) newErrors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email";
      if (!formData.phoneNumber.trim()) newErrors.phoneNumber = "Phone number is required";
      else if (!/^\d{10}$/.test(formData.phoneNumber)) newErrors.phoneNumber = "Phone number must be 10 digits";
    }
    if (step === 2) {
      if (!formData.businessName.trim()) newErrors.businessName = "Business name is required";
      if (!formData.businessRegistrationNumber.trim()) newErrors.businessRegistrationNumber = "Business registration number is required";
      if (!formData.businessCity.trim()) newErrors.businessCity = "City is required";
      if (!formData.businessProvince.trim()) newErrors.businessProvince = "Province is required";
    }
    if (step === 3) {
      if (!formData.productSellingType) newErrors.productSellingType = "Please select a product type";
    }
    if (step === 4) {
      if (!formData.password.trim()) newErrors.password = "Password is required";
      else if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
      if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    }
    if (step === 5) {
      if (!formData.otp.trim()) newErrors.otp = "OTP is required";
      else if (!/^\d{6}$/.test(formData.otp)) newErrors.otp = "OTP must be 6 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleNext = () => {
    if (validateStep()) {
      if (step === 5) {
        // Save to LocalStorage
        const existingAdmins = JSON.parse(localStorage.getItem('admins') || '[]');
        const newAdmin = {
          email: formData.email,
          id: Date.now().toString(),
          // Note: Storing password in localStorage is not secure. This is for mock-up purposes.
          password: formData.password, 
        };
        existingAdmins.push(newAdmin);
        localStorage.setItem('admins', JSON.stringify(existingAdmins));

        // Set current admin session
        localStorage.setItem('currentAdmin', JSON.stringify({ email: newAdmin.email, id: newAdmin.id }));

        // Navigate to Admin Panel
        navigate('/admin/dashboard');
      } else {
        setStep((prev) => prev + 1);
      }
    }
  };

  const handleBack = () => setStep((prev) => prev - 1);

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4 animate-in fade-in slide-in-from-right duration-500">
            <div className="space-y-2">
              <label htmlFor="firstName" className="block text-sm font-bold uppercase tracking-widest text-black">First Name</label>
              <input type="text" id="firstName" value={formData.firstName} onChange={handleChange} className="w-full border-b border-gray-300 py-3 text-lg focus:outline-none focus:border-black transition-colors bg-transparent placeholder-gray-300" placeholder="First Name" />
              {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
            </div>
            <div className="space-y-2">
              <label htmlFor="lastName" className="block text-sm font-bold uppercase tracking-widest text-black">Last Name</label>
              <input type="text" id="lastName" value={formData.lastName} onChange={handleChange} className="w-full border-b border-gray-300 py-3 text-lg focus:outline-none focus:border-black transition-colors bg-transparent placeholder-gray-300" placeholder="Last Name" />
              {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-bold uppercase tracking-widest text-black">Email Address</label>
              <input type="email" id="email" value={formData.email} onChange={handleChange} className="w-full border-b border-gray-300 py-3 text-lg focus:outline-none focus:border-black transition-colors bg-transparent placeholder-gray-300" placeholder="Email Address" />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            <div className="space-y-2">
              <label htmlFor="phoneNumber" className="block text-sm font-bold uppercase tracking-widest text-black">Phone Number</label>
              <input type="tel" id="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="w-full border-b border-gray-300 py-3 text-lg focus:outline-none focus:border-black transition-colors bg-transparent placeholder-gray-300" placeholder="10-digit number" />
              {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4 animate-in fade-in slide-in-from-right duration-500">
            <div className="space-y-2">
              <label htmlFor="businessName" className="block text-sm font-bold uppercase tracking-widest text-black">Business Name</label>
              <input type="text" id="businessName" value={formData.businessName} onChange={handleChange} className="w-full border-b border-gray-300 py-3 text-lg focus:outline-none focus:border-black transition-colors bg-transparent placeholder-gray-300" placeholder="Your Business Name" />
              {errors.businessName && <p className="text-red-500 text-xs mt-1">{errors.businessName}</p>}
            </div>
            <div className="space-y-2">
              <label htmlFor="businessRegistrationNumber" className="block text-sm font-bold uppercase tracking-widest text-black">Business Reg. Number</label>
              <input type="text" id="businessRegistrationNumber" value={formData.businessRegistrationNumber} onChange={handleChange} className="w-full border-b border-gray-300 py-3 text-lg focus:outline-none focus:border-black transition-colors bg-transparent placeholder-gray-300" placeholder="Registration Number" />
              {errors.businessRegistrationNumber && <p className="text-red-500 text-xs mt-1">{errors.businessRegistrationNumber}</p>}
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label htmlFor="businessCity" className="block text-sm font-bold uppercase tracking-widest text-black">City</label>
                    <input type="text" id="businessCity" value={formData.businessCity} onChange={handleChange} className="w-full border-b border-gray-300 py-3 text-lg focus:outline-none focus:border-black transition-colors bg-transparent placeholder-gray-300" placeholder="e.g., Kathmandu" />
                    {errors.businessCity && <p className="text-red-500 text-xs mt-1">{errors.businessCity}</p>}
                </div>
                <div className="space-y-2">
                     <label htmlFor="businessProvince" className="block text-sm font-bold uppercase tracking-widest text-black">Province</label>
                    <input type="text" id="businessProvince" value={formData.businessProvince} onChange={handleChange} className="w-full border-b border-gray-300 py-3 text-lg focus:outline-none focus:border-black transition-colors bg-transparent placeholder-gray-300" placeholder="e.g., Bagmati" />
                    {errors.businessProvince && <p className="text-red-500 text-xs mt-1">{errors.businessProvince}</p>}
                </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right duration-500">
            <div className="space-y-2">
              <label htmlFor="productSellingType" className="block text-sm font-bold uppercase tracking-widest text-black">Product Selling Type</label>
              <select id="productSellingType" value={formData.productSellingType} onChange={handleChange} className="w-full border-b border-gray-300 py-3 text-lg focus:outline-none focus:border-black transition-colors bg-transparent">
                <option value="">Select a category</option>
                <option value="men">Men's Clothes</option>
                <option value="women">Women's Clothes</option>
                <option value="shoes">Shoes</option>
                <option value="brand-specific">Brand Specific (All Kinds)</option>
              </select>
              {errors.productSellingType && <p className="text-red-500 text-xs mt-1">{errors.productSellingType}</p>}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right duration-500">
            <div className="space-y-2 relative">
              <label htmlFor="password" className="block text-sm font-bold uppercase tracking-widest text-black">Password</label>
              <input type={showPassword ? "text" : "password"} id="password" value={formData.password} onChange={handleChange} className="w-full border-b border-gray-300 py-3 text-lg focus:outline-none focus:border-black transition-colors bg-transparent placeholder-gray-300" placeholder="Min. 6 characters" />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 top-6 pr-3 flex items-center text-gray-400 hover:text-black cursor-pointer">
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
            </div>
            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="block text-sm font-bold uppercase tracking-widest text-black">Confirm Password</label>
              <input type="password" id="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="w-full border-b border-gray-300 py-3 text-lg focus:outline-none focus:border-black transition-colors bg-transparent placeholder-gray-300" placeholder="Re-enter password" />
              {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
            </div>
          </div>
        );
    case 5:
        return (
            <div className="space-y-6 animate-in fade-in slide-in-from-right duration-500">
                <div className="space-y-2">
                    <label htmlFor="otp" className="block text-sm font-bold uppercase tracking-widest text-black">OTP Verification</label>
                    <input type="text" id="otp" value={formData.otp} onChange={handleChange} className="w-full border-b border-gray-300 py-3 text-lg focus:outline-none focus:border-black transition-colors bg-transparent placeholder-gray-300" placeholder="Enter 6-digit OTP" />
                    {errors.otp && <p className="text-red-500 text-xs mt-1">{errors.otp}</p>}
                </div>
                <p className="text-xs text-gray-500">An OTP has been sent to your email and phone number.</p>
            </div>
        );
      default:
        return null;
    }
  }

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="w-full max-w-6xl flex flex-col md:flex-row min-h-[500px]">
        <div className="md:w-1/2 p-12 flex flex-col justify-between relative">
          <div>
            <div className="mb-8">
              <LogoButton variant="dark" />
            </div>
            <h1 className="text-4xl font-black uppercase tracking-tighter mb-6 leading-none text-black">
              {step === 1 && 'Admin Personal Info'}
              {step === 2 && 'Admin Business Info'}
              {step === 3 && 'Selling Category'}
              {step === 4 && 'Secure Your Account'}
              {step === 5 && 'Verify Your Identity'}
            </h1>
            <p className="text-gray-500 font-light text-lg">
              {step === 1 && 'Provide your personal details.'}
              {step === 2 && 'Tell us about your business.'}
              {step === 3 && 'What will you be selling?'}
              {step === 4 && 'Create a strong password.'}
              {step === 5 && 'Enter the OTP to complete registration.'}
            </p>
          </div>
          <div className="space-y-4">
            <div className="text-xs font-bold uppercase tracking-widest text-black">
              Step {step} of 5
            </div>
            <div className="flex gap-2 max-w-[200px]">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className={`h-1 flex-1 rounded-full transition-colors duration-300 ${i <= step ? 'bg-black' : 'bg-gray-200'}`} />
              ))}
            </div>
          </div>
        </div>
        <div className="md:w-1/2 p-12 bg-white flex flex-col justify-center">
          <div className="flex-grow flex flex-col justify-center">
            {renderStepContent()}
          </div>
          <div className="mt-12 flex items-center justify-between gap-4">
            {step > 1 ? (
              <button onClick={handleBack} className="flex items-center text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors">
                <ChevronLeft size={16} className="mr-1" /> Back
              </button>
            ) : <div></div>}
            <button onClick={handleNext} className="group flex items-center bg-black text-white px-8 py-3 text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-all">
              {step === 5 ? "Verify & Finish" : "Next"} <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="mt-8 text-center md:text-right">
            <p className="text-xs text-gray-400">
              Already a member?{' '}
              <button onClick={() => navigate('/adminsignin')} className="font-bold text-black hover:underline uppercase">
                Sign In
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSignup;
