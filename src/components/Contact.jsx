import React from "react";
import { useState } from "react";

const Contact = () => {

  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    message: ""
  });



  const handleChange = (event)=>{
    const {name,value}= event.target;

    setFormValue((preval)=>{
      return{
        ...preval,
        [name] : value
      }
    })
  }

  const formSubmit = (event)=>{
    event.preventDefault();
    alert(`Thank ${formValue.name}, for Contacting me. Your Email is ${formValue.email} and Your Message for me is : ${formValue.message}`)

  }

  return (
    <div id="contact" className="h-screen w-full bg-gradient-to-b from-black to-gray-800">
      <div className="flex flex-col  items-center ">
        <div className="flex flex-col gap-10 items-center pt-16 w-3/4">
          <div className="flex flex-col items-start gap-4 w-full">
            <h1 className="text-4xl text-white border-b-4 border-gray-500">
              Contact me
            </h1>
            <p className="text-gray-500">
              Please feel free to get in touch with me by providing your email
              address, and you may also connect with me through the social media
              links provided.
            </p>
          </div>
          <form className="w-full flex flex-col items-center gap-8"
          onSubmit={formSubmit}
          >
            <div className="flex flex-col gap-10 border-4 p-4 border-gray-400 w-full">
              
              <input
                className="bg-transparent  border-2 text-white  border-gray-700  "
                onChange={handleChange}
                type="name"
                name="name"
                value={formValue.name}
                placeholder="Enter your Name"
              />
              
              <input
                className="bg-transparent  border-2 text-white border-gray-700"
                onChange={handleChange}
                type="email"
                name="email"
                value={formValue.email}
                placeholder="Enter your Email"
              />
              <textarea
                className="bg-transparent h-56 border-2 text-white border-gray-700"
                onChange={handleChange}
                name="message"
                value={formValue.message}
                placeholder="Enter your message"
              />
            </div>
            <button className="md:text-2xl bg-gray-500 md:w-[20%] text-gray-900 w-[50%] items-center rounded-full border-2 md:border-4 border-black hover:bg-green-500"
            type="submit"
            >
              Submit
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
