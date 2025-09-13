import React, { useState } from 'react'
import { ToastContainer, toast } from "react-toastify"
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
const notify = () =>{
  toast("saved successfully")
}
  // input ke change handle karna
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // submit karne par backend ko data bhejna
  const handleSubmit = async (e) => {
    e.preventDefault();
     if (!formData.name || !formData.email || !formData.phone) {
      toast.error("All fields are required!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

       if (response.ok) {
      toast.success("Form submitted successfully!");
      setFormData({ name: "", email: "", phone: "" }); // reset inputs
    } else {
      toast.error("Something went wrong!");
    }
  } catch (error) {
    toast.error("Server error, please try again!");
  }
  };

  return (
    <>
      <div name="Contact" className="md:px-10 max-w-screen-2xl container mx-auto px-4">
        <div>
          <div className="fixed bottom-5 right-5 flex items-center justify-between bg-green-500 text-white px-5 py-3 rounded-full shadow-xl w-auto animate-bounce hover:scale-105 transition-transform duration-300 cursor-pointer">
            {/* Left side text */}
            <span className="font-semibold text-lg hidden md:block mr-1">Contact Us</span>

            {/* Right side WhatsApp Icon */}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-500 p-2 rounded-full shadow-md hover:bg-green-600 hover:text-white transition-colors duration-300"
            >
              <FaWhatsapp size={25} />
            </a>
          </div>

          <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
              <h2 className="text-2xl font-bold text-center text-green-600 mb-6">
                Contact Us
              </h2>

              <form className="space-y-5" onSubmit={handleSubmit}>
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    required
                    type="text"
                    id="name"
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    id="email"
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 font-medium mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    required
                    type="tel"
                    id="phone"
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition duration-300 shadow-md"
                  onSubmit={notify}
                >
                  Submit
                </button>
                 <ToastContainer 
        position="top-center"
        autoClose={3000} 
        hideProgressBar={false} 
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Contact;