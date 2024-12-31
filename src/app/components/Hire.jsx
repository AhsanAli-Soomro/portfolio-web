"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";

const Hire = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7hlzamp",
        "template_8fvs1ff",
        e.target,
        "i_JosCqmNXAH_Rebb"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="bg-gradient-to-br py-16 from-orange-800 via-orange-600 to-orange-500 min-h-screen flex flex-col justify-center items-center text-white">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold mb-4">Get in Touch</h1>
        <p className="text-lg max-w-lg mx-auto">
          Have a project in mind or just want to say hello? Fill out the form
          below, and I’ll get back to you as soon as possible.
        </p>
      </div>

      {/* Contact Form */}
      <div className="bg-white text-gray-800 rounded-lg shadow-lg w-full max-w-4xl p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <InputField
            label="Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <InputField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <InputField
            label="Subject"
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
          <TextareaField
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          <div className="text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-orange-700 via-orange-600 to-orange-500 text-white px-6 py-3 rounded-md font-semibold shadow-md hover:bg-orange-600 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const InputField = ({ label, type, name, value, onChange }) => (
  <div className="transition duration-300">
    <label className="block text-lg font-medium text-gray-700">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-3 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300 bg-gray-100 text-gray-700 shadow-sm"
      required
    />
  </div>
);

const TextareaField = ({ label, name, value, onChange }) => (
  <div className="transition duration-300">
    <label className="block text-lg font-medium text-gray-700">{label}</label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-3 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300 bg-gray-100 text-gray-700 shadow-sm"
      rows="5"
      required
    ></textarea>
  </div>
);

export default Hire;
