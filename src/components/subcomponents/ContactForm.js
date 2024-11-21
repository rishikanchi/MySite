// ContactForm.js
import React, { useState } from 'react';
import './ContactForm.css';
import FadeIn from './FadeIn';

const ContactForm = () => {

    const [formData, setFormData] = useState({
    'form-name': 'contact', // Make sure to include this field for Netlify
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
    // You can add your logic to handle the form submission here
    console.log('Form submitted:', formData);
};

return (
    <div className="contact-form-container">
        <form onSubmit={handleSubmit} className="contact-form" netlify data-netlify-honeypot="bot-field" name="contact">
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />

            <FadeIn delay={500}>
                <label htmlFor="name">Name</label>
            </FadeIn>
            <FadeIn delay={550}>
                <input className='buttonAdj button'
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </FadeIn>

            <FadeIn delay={600}>
                <label htmlFor="email">Email</label>
            </FadeIn>
            <FadeIn delay={650}>
                <input className='buttonAdj button'   
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </FadeIn>

            <FadeIn delay={700}>
                <label htmlFor="subject">Subject</label>
            </FadeIn>
            <FadeIn delay={750}>
                <input 
                    className='buttonAdj button'
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                />
            </FadeIn>

            <FadeIn delay={800}>
                <label htmlFor="message">Message</label>
            </FadeIn>
            <FadeIn delay={850}>
                <textarea className='buttonAdj button'                
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
            </FadeIn>

            <FadeIn delay={900}>
                <button type="submit" className='submitButtonAdj button'>Submit</button>
            </FadeIn>
        </form>
    </div>
  );
};

export default ContactForm;
