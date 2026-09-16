import React, { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import { FaTimes, FaUser, FaEnvelope, FaPhone, FaCalendarAlt, FaUserFriends, FaGlobeAfrica } from 'react-icons/fa';

interface EnquirePopupProps {
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  destination: string;
  travelDates: string;
  travelers: string;
  message: string;
}

const EnquirePopup: React.FC<EnquirePopupProps> = ({ onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    destination: '',
    travelDates: '',
    travelers: '1',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Create JSON payload
      const payload = JSON.stringify({
        ...formData,
        timestamp: new Date().toISOString()
      });

      // Submit with no-cors mode - don't attempt to read response
      await fetch(
        'https://script.google.com/macros/s/AKfycbzQghgwkR4IofHQjN8Ml1tbPJ_1eYrg4rqKu3xiloQOsg7AQXtnm7dMU2zjym756SD-UQ/exec',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: payload,
          mode: 'no-cors' // Critical for avoiding CORS issues
        }
      );

      // If we get here, assume submission was successful
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        destination: '',
        travelDates: '',
        travelers: '1',
        message: '',
      });
      
      // Close after 3 seconds
      setTimeout(() => onClose(), 3000);

    } catch (err) {
      // Only network errors will be caught here
      const errorMessage = 'Submission failed. Please email us directly at bookings@safari.com';
      setError(errorMessage);
      console.error('Submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    
     <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-2 sm:p-4">
      <div className="bg-white shadow-2xl overflow-hidden w-full max-w-2xl relative rounded-lg mx-2 flex flex-col max-h-[95vh]">
    <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-[#c2a75c] transition z-50"
          aria-label="Close enquiry form"
        >
          <FaTimes className="text-2xl" />
        </button>
        
       {/* Fixed header section */}
        <div className="h-32 sm:h-40 bg-gradient-to-r from-[var(--primary)] to-black relative overflow-hidden shrink-0">
          <div className="absolute inset-0 bg-[url('./assets/safaris.webp')] bg-cover bg-center opacity-30 pointer-events-none" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center p-4 text-white">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 text-center">Plan Your Safari Adventure</h2>
            <p className="text-center max-w-md">Our experts will help you create the perfect safari experience</p>
          </div>
        </div>
        <div className="overflow-y-auto flex-grow">
          <div className="p-4 sm:p-6 md:p-8">
            {error && (
              <div className="mb-3 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
                {error}
              </div>
            )}
            
            {submitted ? (
              <div className="text-center py-6 sm:py-10">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2">Thank You!</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Your enquiry has been submitted. Our safari experts will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                  {/* Name Field */}
                  <div className="relative">
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <div className="relative">
                      <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--primary)] text-sm sm:text-base" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-9 pr-3 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c2a75c] focus:border-[#c2a75c] transition"
                        placeholder="Your full name"
                      />
                    </div>
                  </div>
                  
                  {/* Email Field */}
                  <div className="relative">
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                    <div className="relative">
                      <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--primary)] text-sm sm:text-base" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-9 pr-3 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c2a75c] focus:border-[#c2a75c] transition"
                        placeholder="tonny@example.com"
                      />
                    </div>
                  </div>
                  
                  {/* Phone Field */}
                  <div className="relative">
                    <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <div className="relative">
                      <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--primary)] text-sm sm:text-base" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-9 pr-3 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c2a75c] focus:border-[#c2a75c] transition"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                  
                  {/* Destination Field */}
                  <div className="relative">
                    <label htmlFor="destination" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Destination</label>
                    <div className="relative">
                      <FaGlobeAfrica className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--primary)] text-sm sm:text-base" />
                      <select
                        id="destination"
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        className="w-full pl-9 pr-8 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c2a75c] focus:border-[#c2a75c] transition appearance-none bg-white"
                      >
                        <option value="">Select Destination</option>
                        <option value="kenya">Kenya</option>
                        <option value="tanzania">Tanzania</option>
                        <option value="uganda">Uganda</option>
                        <option value="rwanda">Rwanda</option>
                      </select>
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <svg className="w-4 h-4 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Travel Dates */}
                  <div className="relative">
                    <label htmlFor="travelDates" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Travel Dates</label>
                    <div className="relative">
                      <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--primary)] text-sm sm:text-base" />
                      <input
                        type="date"
                        id="travelDates"
                        name="travelDates"
                        value={formData.travelDates}
                        onChange={handleChange}
                        className="w-full pl-9 pr-3 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c2a75c] focus:border-[#c2a75c] transition"
                      />
                    </div>
                  </div>
                  
                  {/* Number of Travelers */}
                  <div className="relative">
                    <label htmlFor="travelers" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Number of Travelers</label>
                    <div className="relative">
                      <FaUserFriends className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--primary)] text-sm sm:text-base" />
                      <select
                        id="travelers"
                        name="travelers"
                        value={formData.travelers}
                        onChange={handleChange}
                        className="w-full pl-9 pr-8 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c2a75c] focus:border-[#c2a75c] transition appearance-none bg-white"
                      >
                        {Array.from({ length: 10 }, (_, i) => i + 1).map(num => (
                          <option key={num} value={num.toString()}>{num} {num === 1 ? 'Person' : 'People'}</option>
                        ))}
                        <option value="10+">10+ People</option>
                      </select>
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <svg className="w-4 h-4 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Message Field */}
                <div className="mb-4 sm:mb-6">
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c2a75c] focus:border-[#c2a75c] transition min-h-[100px]"
                    placeholder="Tell us about your dream safari, special requests, or questions..."
                  ></textarea>
                </div>
                
                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-[var(--primary)] hover:bg-[#a99252] text-white font-medium py-2.5 px-4 sm:py-3 sm:px-6 rounded-lg transition flex items-center justify-center text-sm sm:text-base ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    'Send Enquiry'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
        
        {/* Fixed footer section */}
        <div className="bg-gray-50 px-4 py-3 text-center text-xs sm:text-sm text-gray-500 border-t shrink-0">
          <p>Your information is secure. We'll never share your details with third parties.</p>
        </div>
      </div>
    </div>
  );
};

export default EnquirePopup;