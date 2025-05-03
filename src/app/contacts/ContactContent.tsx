"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { initEmailJs, sendEmail } from '@/config/emailjs';
import { emailConfig } from '@/config/emailjs';
import { EmailParams } from '@/config/emailjs';
import { toast } from 'sonner';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: '',
    inquiryType: 'general'
  });
  const [loading, setLoading] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    try {
      initEmailJs();
    } catch (error) {
      console.error('Failed to initialize EmailJS:', error);
      toast.error('Email service initialization failed');
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await sendEmail({
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        subject: formData.subject,
        inquiry_type: formData.inquiryType,
        to_name: "Mundit Investment",
        reply_to: formData.email
      });

      if (result.success) {
        toast.success('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          message: '',
          subject: '',
          inquiryType: 'general'
        });
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      console.error('Submit error:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to send message');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 container md:py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container px-4 md:px-6 text-center mb-16">
        <h2 className="text-3xl font-bold text-teal-700 sm:text-4xl md:text-5xl">
          Contact Mundit Investment
        </h2>
        <p className="max-w-3xl mx-auto text-teal-700 mt-4 md:text-xl/relaxed">
          We are here to assist you with any queries you have. Get in touch with us through any of the methods below.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-teal-700/30 via-teal-700 to-teal-700/30 mt-6 mx-auto"></div>
      </div>

      <div className="container px-4 md:px-6 grid gap-16 lg:grid-cols-2">
        {/* Contact Form */}
        <div className="relative bg-white shadow-lg rounded-xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-teal-700 mb-6">Send Us a Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-sm text-teal-700 mb-2">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm text-teal-700 mb-2">
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="subject" className="text-sm text-teal-700 mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="inquiryType" className="text-sm text-teal-700 mb-2">
                  Inquiry Type
                </label>
                <select
                  id="inquiryType"
                  value={formData.inquiryType}
                  onChange={(e) => setFormData({...formData, inquiryType: e.target.value})}
                  className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700"
                  required
                >
                  <option value="general">General Inquiry</option>
                  <option value="support">Support</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className="text-sm text-teal-700 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700"
                  required
                ></textarea>
              </div>
              <div className="flex justify-center">
                <Button 
                  type="submit"
                  className="bg-teal-700 hover:bg-teal-800 px-8 py-3 rounded-lg"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
            </div>
          </form>
        </div>

        {/* Contact Details */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <MapPin className="text-teal-700 h-6 w-6" />
            <div>
              <h4 className="font-bold text-teal-700">Office Address</h4>
              <p className="text-teal-700">6th Floor UAP Equatoria Tower, Hai Neem, Malakia Rd Juba</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Phone className="text-teal-700 h-6 w-6" />
            <div>
              <h4 className="font-bold text-teal-700">Phone Number</h4>
              <p className="text-teal-700">+211 916 222 166 | +211 921061723</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Mail className="text-teal-700 h-6 w-6" />
            <div>
              <h4 className="font-bold text-teal-700">Email Address</h4>
              <p className="text-teal-700">munditinvestment@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-16 container px-4 md:px-6">
        <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            className="absolute inset-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.4645010342384!2d31.603374075937733!3d4.840723796764086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x171281c820e5cca1%3A0xe2201f01feb44c78!2sUAP%20Equatoria%20Tower!5e0!3m2!1sen!2s!4v1683644521754!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}