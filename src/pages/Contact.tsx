import React, { useState } from 'react';
import NavBar from '../components/Navbar';
import ThemeButton from '../components/ThemeButton';
import { CONTACT_EMAIL } from '@/data/links';

const Bg = "/contact-component.png";

interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <section className="relative z-10 min-h-screen bg-transparent py-16 px-4 text-white">
      <NavBar />
      <div className="container mx-auto max-w-6xl mt-24">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-5xl font-black tracking-[0.08em] text-[#FFF44F] drop-shadow-[0_0_28px_rgba(255,244,79,0.55)] md:text-6xl">
            GET IN TOUCH
          </h1>
          <p className="mx-auto max-w-2xl text-xl font-medium leading-relaxed text-white">
            Contact us if you need supports for next event
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label htmlFor="firstName" className="block text-sm font-medium text-white mb-2 group-hover:text-yellow-400 transition-colors">
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-neutral-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200 hover:border-gray-600"
                    placeholder="Enter your first name"
                    style={{ caretColor: '#FFED00' }}
                  />
                </div>
                <div className="group">
                  <label htmlFor="lastName" className="block text-sm font-medium text-white mb-2 group-hover:text-yellow-400 transition-colors">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-neutral-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200 hover:border-gray-600"
                    placeholder="Enter your last name"
                    style={{ caretColor: '#FFED00' }}
                  />
                </div>
              </div>

              {/* Contact Info Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2 group-hover:text-yellow-400 transition-colors">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-neutral-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200 hover:border-gray-600"
                    placeholder="Enter your email"
                    style={{ caretColor: '#FFED00' }}
                  />
                </div>
                <div className="group">
                  <label htmlFor="phone" className="block text-sm font-medium text-white mb-2 group-hover:text-yellow-400 transition-colors">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-neutral-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200 hover:border-gray-600"
                    placeholder="Enter your phone number"
                    style={{ caretColor: '#FFED00' }}
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="group">
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2 group-hover:text-yellow-400 transition-colors">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-neutral-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200 hover:border-gray-600 resize-none"
                  placeholder="Enter your message..."
                  style={{ caretColor: '#FFED00' }}
                />
              </div>

              {/* Submit Button */}
              <ThemeButton type="submit" variant="primary" className="w-full py-4">
                SEND MESSAGE
              </ThemeButton>
            </form>
          </div>

          {/* Social Media Section */}
          <div className="bg-[#FFED00] backdrop-blur-sm rounded-2xl p-8 border border-gray-800 h-full">
            <div className="text-center h-full flex flex-col justify-center mx-auto">
              <h3 className="text-2xl font-bold mb-8 text-gray-900">Follow us on</h3>
              <div className='items-center justify-center mx-auto'>
                <img src={Bg} alt="Social Media" className='h-72' />
              </div>




              {/* Additional Info */}
              <div className="mt-12 text-gray-900">
                <p className="mb-4 text-lg font-semibold text-black">Stay connected with us</p>
                <p className="text-sm leading-relaxed text-neutral-900">
                  Follow our social media channels to get the latest updates, event announcements, and exclusive content.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Contact Info */}
        <div className="mt-16 border-t border-white/20 pt-10 text-center">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <h4 className="mb-2 text-lg font-bold tracking-wide text-[#FFF44F] drop-shadow-[0_0_16px_rgba(255,244,79,0.45)]">
                Email
              </h4>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-lg font-semibold text-white hover:text-[#FFF44F]"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
            <div>
              <h4 className="mb-2 text-lg font-bold tracking-wide text-[#FFF44F] drop-shadow-[0_0_16px_rgba(255,244,79,0.45)]">
                Phone
              </h4>
              <p className="text-lg font-semibold text-white">+254 717600514</p>
            </div>
            <div>
              <h4 className="mb-2 text-lg font-bold tracking-wide text-[#FFF44F] drop-shadow-[0_0_16px_rgba(255,244,79,0.45)]">
                Office
              </h4>
              <p className="text-lg font-semibold text-white">Nairobi, Kenya</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;