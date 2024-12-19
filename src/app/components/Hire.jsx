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
    <div className="pt-24 pb-10 bg-white min-h-screen text-white">
      <div className="max-w-4xl mx-auto p-8 bg-purple-700 shadow-xl rounded-lg">
        <Header />
        <Form formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};

const Header = () => (
  <div className="border-b-2 border-purple-500 pb-4 mb-6 text-center">
    <h1 className="text-4xl text-white font-extrabold">Hire Me</h1>
    <p className="text-gray-200">Fill out the form below to get in touch with me.</p>
  </div>
);

const Form = ({ formData, handleChange, handleSubmit }) => (
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
    <div className="transition duration-300 hover:scale-105">
      <button
        type="submit"
        className="w-full bg-white text-purple-700 px-4 py-2 rounded-md hover:bg-gray-200 transition duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        Send Message
      </button>
    </div>
  </form>
);

const InputField = ({ label, type, name, value, onChange }) => (
  <div className="transition duration-300 hover:scale-105">
    <label className="block text-gray-200 font-medium">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300 bg-purple-600 text-white border-purple-500"
      required
    />
  </div>
);

const TextareaField = ({ label, name, value, onChange }) => (
  <div className="transition duration-300 hover:scale-105">
    <label className="block text-gray-200 font-medium">{label}</label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300 bg-purple-600 text-white border-purple-500"
      rows="5"
      required
    ></textarea>
  </div>
);

export default Hire;
