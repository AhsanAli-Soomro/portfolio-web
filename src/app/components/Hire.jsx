"use client";

import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { IconArrowUpRight, IconClock, IconMail, IconWorld } from "@tabler/icons-react";

export default function Hire() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({ name:"", email:"", subject:"", message:"", website:"" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ type:"", message:"" });
  const handleChange = e => setFormData(s => ({ ...s, [e.target.name]: e.target.value }));
  const validate = () => { const e={}; if(!formData.name.trim())e.name="Please enter your name."; if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))e.email="Enter a valid email."; if(formData.subject.trim().length<3)e.subject="Add a short subject."; if(formData.message.trim().length<10)e.message="Tell me a little more about the project."; return e; };
  const handleSubmit = async e => { e.preventDefault(); if(formData.website)return; const found=validate();setErrors(found);if(Object.keys(found).length)return;try{setSubmitting(true);await emailjs.sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID||"service_7hlzamp",process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID||"template_8fvs1ff",formRef.current,process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY||"i_JosCqmNXAH_Rebb");setStatus({type:"success",message:"Message sent — I'll get back to you soon."});setFormData({name:"",email:"",subject:"",message:"",website:""});}catch{setStatus({type:"error",message:"Could not send. Please email me directly."});}finally{setSubmitting(false);} };
  return (
    <main className="inner-page hire-page">
      <div className="page-container hire-layout">
        <section className="hire-copy">
          <span className="section-index hero-animate">Contact / Start a project</span>
          <h1 className="page-title hero-animate">Let&apos;s create something<br /><em>worth remembering.</em></h1>
          <p className="page-lead hero-animate">Share what you&apos;re building, where you are in the process and what success looks like. I&apos;ll reply with clear next steps.</p>
          <div className="contact-details hero-animate"><a href="mailto:ahsanalisoomro147@gmail.com"><IconMail /> <span><small>Email me</small>ahsanalisoomro147@gmail.com</span></a><div><IconClock /><span><small>Response time</small>Usually within 24 hours</span></div><div><IconWorld /><span><small>Based in</small>Pakistan · Working worldwide</span></div></div>
        </section>
        <section className="contact-form-card hero-animate">
          <div className="form-header"><span>Project enquiry</span><i /></div>
          <form ref={formRef} onSubmit={handleSubmit} noValidate>
            <input type="text" name="website" value={formData.website} onChange={handleChange} tabIndex="-1" className="hidden" />
            <div className="form-row"><Field label="Your name" name="name" value={formData.name} onChange={handleChange} error={errors.name} placeholder="John Smith" /><Field label="Email address" name="email" type="email" value={formData.email} onChange={handleChange} error={errors.email} placeholder="john@company.com" /></div>
            <Field label="What can I help with?" name="subject" value={formData.subject} onChange={handleChange} error={errors.subject} placeholder="Website redesign, web app..." />
            <Field textarea label="Tell me about the project" name="message" value={formData.message} onChange={handleChange} error={errors.message} placeholder="A short overview, timeline and goals..." />
            <p className={`form-status ${status.type}`}>{status.message}</p>
            <button className="button-primary form-submit" disabled={isSubmitting}>{isSubmitting?"Sending...":"Send enquiry"}<IconArrowUpRight size={18}/></button>
          </form>
        </section>
      </div>
    </main>
  );
}

function Field({ label, error, textarea, ...props }) { const Tag=textarea?"textarea":"input"; return <label className="form-field"><span>{label}</span><Tag {...props} rows={textarea?5:undefined}/>{error&&<small>{error}</small>}</label>; }
