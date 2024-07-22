import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Hire = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
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

    emailjs.sendForm('service_7hlzamp', 'template_8fvs1ff', e.target, 'i_JosCqmNXAH_Rebb')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      }, (error) => {
        console.log(error.text);
        alert('Failed to send message. Please try again.');
      });
  };

  return (
    <div className='pt-24 pb-10 bg-black min-h-screen text-white'>
      <div className="max-w-4xl mx-auto p-8 bg-gray-900 shadow-lg rounded-lg">
        <Header />
        <Form formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};

const Header = () => (
  <div className="border-b-2 border-orange-400 pb-4 mb-4 text-center">
    <h1 className="text-3xl text-orange-400 font-bold">Hire Me</h1>
    <p className="text-gray-400">Fill out the form below to get in touch with me.</p>
  </div>
);

const Form = ({ formData, handleChange, handleSubmit }) => (
  <form onSubmit={handleSubmit} className="space-y-6">
    <div className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      <label className="block text-gray-400">Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 bg-gray-800 text-white border-gray-600"
        required
      />
    </div>
    <div className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      <label className="block text-gray-400">Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 bg-gray-800 text-white border-gray-600"
        required
      />
    </div>
    <div className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      <label className="block text-gray-400">Subject</label>
      <input
        type="text"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 bg-gray-800 text-white border-gray-600"
        required
      />
    </div>
    <div className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      <label className="block text-gray-400">Message</label>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 bg-gray-800 text-white border-gray-600"
        rows="5"
        required
      ></textarea>
    </div>
    <div className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      <button
        type="submit"
        className="w-full bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
      >
        Send Message
      </button>
    </div>
  </form>
);

export default Hire;
