"use client";

import React, { useRef, useState } from "react";
import emailjs from "emailjs-com"; // ok to keep; alt: @emailjs/browser

const Hire = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "", // honeypot (should stay empty)
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  // (Optional) move these to env: NEXT_PUBLIC_EMAILJS_*
  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_7hlzamp";
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_8fvs1ff";
  const PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY  || "i_JosCqmNXAH_Rebb";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
  };

  const validate = () => {
    const e = {};
    if (!formData.name.trim()) e.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      e.email = "Enter a valid email address.";
    if (formData.subject.trim().length < 3)
      e.subject = "Subject must be at least 3 characters.";
    if (formData.message.trim().length < 10)
      e.message = "Message must be at least 10 characters.";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    // Honeypot: bots tend to fill this
    if (formData.website) {
      setStatus({ type: "error", message: "Submission blocked (spam detected)." });
      return;
    }

    const eMap = validate();
    setErrors(eMap);
    if (Object.keys(eMap).length) {
      // focus first error field
      const firstErr = Object.keys(eMap)[0];
      const el = formRef.current?.querySelector(`[name="${firstErr}"]`);
      el?.focus();
      return;
    }

    try {
      setSubmitting(true);
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus({ type: "success", message: "Thanks! Your message was sent to Ahsan Ali Soomro." });
      setFormData({ name: "", email: "", subject: "", message: "", website: "" });
      setErrors({});
    } catch (err) {
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again or email me directly at ahsanalisoomro147@gmail.com.",
      });
      // console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-br py-16 from-orange-800 via-orange-600 to-orange-500 min-h-screen flex flex-col justify-center items-center text-white">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold mb-3">Hire Ahsan Ali Soomro</h1>
        <p className="text-lg max-w-xl mx-auto">
          Have a project or need a Front-End Developer? Fill out the form and I’ll get back to you ASAP.
        </p>
      </div>

      {/* Contact Form */}
      <div className="bg-white text-gray-800 rounded-lg shadow-lg w-full max-w-4xl p-8">
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" noValidate>
          {/* Honeypot (hidden from humans) */}
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
            tabIndex="-1"
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />

          <InputField
            id="name"
            label="Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            autoComplete="name"
          />

          <InputField
            id="email"
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            autoComplete="email"
          />

          <InputField
            id="subject"
            label="Subject"
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            error={errors.subject}
            autoComplete="off"
          />

          <TextareaField
            id="message"
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            error={errors.message}
          />

          {/* Status region for screen readers */}
          <p role="status" aria-live="polite" className={`min-h-6 text-sm ${status.type === "error" ? "text-red-600" : "text-green-600"}`}>
            {status.message}
          </p>

          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-gradient-to-r from-orange-700 via-orange-600 to-orange-500 text-white px-6 py-3 rounded-md font-semibold shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-300 ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-orange-600"
              }`}
              aria-busy={isSubmitting ? "true" : "false"}
            >
              {isSubmitting ? "Sending…" : "Send Message"}
            </button>
          </div>

          {/* Fallback contact */}
          <p className="text-sm text-gray-600 text-center">
            Prefer email? Write to{" "}
            <a className="underline" href="mailto:ahsanalisoomro147@gmail.com">
              ahsanalisoomro147@gmail.com
            </a>
            .
          </p>
        </form>
      </div>
    </div>
  );
};

const InputField = ({ id, label, type, name, value, onChange, error, autoComplete }) => (
  <div className="transition duration-300">
    <label htmlFor={id} className="block text-lg font-medium text-gray-700">
      {label}
    </label>
    <input
      id={id}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      autoComplete={autoComplete}
      required
      aria-invalid={!!error}
      aria-describedby={error ? `${id}-error` : undefined}
      className={`w-full px-4 py-3 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300 bg-gray-100 text-gray-700 shadow-sm ${
        error ? "border-red-500" : "border-gray-300"
      }`}
    />
    {error && (
      <p id={`${id}-error`} className="mt-1 text-sm text-red-600">
        {error}
      </p>
    )}
  </div>
);

const TextareaField = ({ id, label, name, value, onChange, error }) => (
  <div className="transition duration-300">
    <label htmlFor={id} className="block text-lg font-medium text-gray-700">
      {label}
    </label>
    <textarea
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      rows="5"
      required
      aria-invalid={!!error}
      aria-describedby={error ? `${id}-error` : undefined}
      className={`w-full px-4 py-3 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300 bg-gray-100 text-gray-700 shadow-sm ${
        error ? "border-red-500" : "border-gray-300"
      }`}
    />
    {error && (
      <p id={`${id}-error`} className="mt-1 text-sm text-red-600">
        {error}
      </p>
    )}
  </div>
);

export default Hire;
