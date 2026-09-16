import React, { useState } from 'react';
import NavBar from '../components/Navbar';
import ThemeButton from '../components/ThemeButton';

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
    <section className="min-h-screen bg-black text-white py-16 px-4">
      <NavBar />
      <div className="container mx-auto max-w-6xl mt-24">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: '#FFED00' }}>
            GET IN TOUCH
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
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
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-yellow-400 transition-colors">
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200 hover:border-gray-600"
                    placeholder="Enter your first name"
                    style={{ caretColor: '#FFED00' }}
                  />
                </div>
                <div className="group">
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-yellow-400 transition-colors">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200 hover:border-gray-600"
                    placeholder="Enter your last name"
                    style={{ caretColor: '#FFED00' }}
                  />
                </div>
              </div>

              {/* Contact Info Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-yellow-400 transition-colors">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200 hover:border-gray-600"
                    placeholder="Enter your email"
                    style={{ caretColor: '#FFED00' }}
                  />
                </div>
                <div className="group">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-yellow-400 transition-colors">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200 hover:border-gray-600"
                    placeholder="Enter your phone number"
                    style={{ caretColor: '#FFED00' }}
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="group">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-yellow-400 transition-colors">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200 hover:border-gray-600 resize-none"
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
                <p className="text-lg mb-4" style={{ color: '#FFED00' }}>Stay connected with us</p>
                <p className="text-sm leading-relaxed">
                  Follow our social media channels to get the latest updates, event announcements, and exclusive content.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Contact Info */}
        <div className="text-center mt-16 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300">
            <div>
              <h4 className="font-semibold mb-2" style={{ color: '#FFED00' }}>Email</h4>
              <p>support@salamander.com</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2" style={{ color: '#FFED00' }}>Phone</h4>
              <p>+254 717600514</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2" style={{ color: '#FFED00' }}>Office</h4>
              <p>Nairobi, Kenya</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;