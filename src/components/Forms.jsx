import React from "react";
import { useState } from "react";
import axios from "axios";

function Forms() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", input.name);
    formData.append("email", input.email);
    formData.append("phone", input.phone);
    formData.append("message", input.message);

    try {
      const response = await axios.post(
        "https://vernanbackend.ezlab.in/api/contact-us/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      if (response.status === 201) {
        alert("Form submitted successfully!");
        setInput({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      }
    } catch (error) {
      console.log("Error submitting form:", error);
    }
  };

  return (
    <div
      className="relative p-5 min-h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/BG.png')" }}
    >
      <div className="container p-5 max-w-[90%] mx-auto px-4 gap-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto gap-5 ">
          <div className=" flex flex-col justify-center items-center gap-4 ">
            <p className="formpara">
              Whether you have an idea, a question, or simply want to explore
              how we can work together, we’re just a message away. Let’s catch
              up over coffee — great stories always begin with a good
              conversation.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <h1 className="formheading">Join the Story</h1>
            <p>Ready to bring your vision to life? Let's talk .</p>
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-md flex flex-col gap-4"
            >
              <input
                type="text"
                name="name"
                value={input.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
              />

              <input
                type="email"
                name="email"
                value={input.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
              />

              <input
                type="tel"
                name="phone"
                value={input.phone}
                onChange={handleChange}
                placeholder="Your Phone"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
              />

              <textarea
                placeholder="Your Message"
                name="message"
                value={input.message}
                onChange={handleChange}
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
              ></textarea>

              <button type="submit" className="button1">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forms;
