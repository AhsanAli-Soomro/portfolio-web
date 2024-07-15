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
    <div className="max-w-4xl mx-auto my-10 p-8 bg-white shadow-lg rounded-lg">
      <Header />
      <Form formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
};

const Header = () => (
  <div className="border-b-2 border-gray-300 pb-4 mb-4">
        <div className='text-4xl p-4 font-bold text-orange-400 text-center'>
            Hire me 
        </div>
    <p className="text-gray-600">Fill out the form below to get in touch with me.</p>
  </div>
);

const Form = ({ formData, handleChange, handleSubmit }) => (
  <form onSubmit={handleSubmit} className="space-y-4">
    <div>
      <label className="block text-gray-700">Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
    </div>
    <div>
      <label className="block text-gray-700">Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
    </div>
    <div>
      <label className="block text-gray-700">Subject</label>
      <input
        type="text"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
    </div>
    <div>
      <label className="block text-gray-700">Message</label>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows="5"
        required
      ></textarea>
    </div>
    <div>
      <button
        type="submit"
        className="w-full bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-orange-600 duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Send Message
      </button>
    </div>
  </form>
);

export default Hire;
