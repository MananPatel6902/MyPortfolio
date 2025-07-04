import React, { useState } from 'react';
import {
  Send, Mail, Phone, MapPin,
  Github, Linkedin, Twitter, Instagram, Youtube
} from 'lucide-react';
import { socialData } from '../data/social';

const Contact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    // Convert to URL-encoded format
    const encodedData = new URLSearchParams(data as any).toString();

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodedData,
      });

      setFormSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      alert('There was a problem submitting the form. Please try again.');
    }
  };

  const iconMap: Record<string, React.ElementType> = {
    Github, Linkedin, Twitter, Instagram, Youtube
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Interested in discussing a project, opportunity, or just want to connect?
            Feel free to reach out through the form below or via my social media channels.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="md:col-span-1">
              <div className="bg-gray-50 p-6 rounded-xl shadow-md h-full">
                <h3 className="text-xl font-bold mb-6 text-gray-800">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg text-blue-600"><Mail size={20} /></div>
                    <div>
                      <p className="font-medium text-gray-800">Email</p>
                      <a href="mailto:manan06092002@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                        manan06092002@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg text-blue-600"><Phone size={20} /></div>
                    <div>
                      <p className="font-medium text-gray-800">Phone</p>
                      <p className="text-gray-600">+91 97378 30063</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg text-blue-600"><MapPin size={20} /></div>
                    <div>
                      <p className="font-medium text-gray-800">Location</p>
                      <p className="text-gray-600">Ahmedabad, GJ, India</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <p className="font-medium text-gray-800 mb-4">Connect With Me</p>
                  <div className="flex gap-4">
                    {socialData.map((social) => {
                      const Icon = iconMap[social.icon];
                      return Icon ? (
                        <a
                          key={social.platform}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-blue-600 hover:text-white transition-all"
                          aria-label={social.platform}
                        >
                          <Icon size={20} />
                        </a>
                      ) : null;
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-6 text-gray-800">Send Me a Message</h3>

                {formSubmitted ? (
                  <div className="bg-green-100 text-green-800 p-4 rounded-lg">
                    Thank you! Your message has been submitted.
                  </div>
                ) : (
                  <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                  >
                    <input type="hidden" name="form-name" value="contact" />
                    <p className="hidden">
                      <label>Don’t fill this out: <input name="bot-field" /></label>
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                          placeholder="Manan Patel"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-gray-700 mb-2">Your Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                          placeholder="manan@example.com"
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        placeholder="Project Inquiry"
                      />
                    </div>

                    <div className="mb-6">
                      <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        placeholder="Your message here..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-blue-700 transition-all"
                    >
                      <Send size={18} />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
