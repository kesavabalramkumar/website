import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    
    if (!formData.subject) {
      newErrors.subject = 'Please select a subject';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Message should be at least 20 characters';
    }

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    // Here you would typically send the form data to a server
    console.log('Form submitted', formData);
    setIsSubmitted(true);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary-800">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/1181370/pexels-photo-1181370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
            alt="Contact Us" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="text-center text-white">
            <h1 className="mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light">
              We'd love to hear from you. Reach out to us with any questions about admissions, programs, or campus visits.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-32 relative z-20">
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
              <div className="bg-primary-100 rounded-full p-4 mb-4">
                <MapPin className="h-8 w-8 text-primary-800" />
              </div>
              <h3 className="text-lg font-bold mb-2">Visit Us</h3>
              <p className="text-neutral-600">
                123 Education Lane<br />
                Knowledge City, ST 12345<br />
                United States
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
              <div className="bg-primary-100 rounded-full p-4 mb-4">
                <Phone className="h-8 w-8 text-primary-800" />
              </div>
              <h3 className="text-lg font-bold mb-2">Call Us</h3>
              <p className="text-neutral-600 mb-1">Main: (555) 123-4567</p>
              <p className="text-neutral-600 mb-1">Admissions: (555) 765-4321</p>
              <p className="text-neutral-600">Student Services: (555) 234-5678</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
              <div className="bg-primary-100 rounded-full p-4 mb-4">
                <Mail className="h-8 w-8 text-primary-800" />
              </div>
              <h3 className="text-lg font-bold mb-2">Email Us</h3>
              <p className="text-neutral-600 mb-1">info@athenaacademy.edu</p>
              <p className="text-neutral-600 mb-1">admissions@athenaacademy.edu</p>
              <p className="text-neutral-600">support@athenaacademy.edu</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
              <div className="bg-primary-100 rounded-full p-4 mb-4">
                <Clock className="h-8 w-8 text-primary-800" />
              </div>
              <h3 className="text-lg font-bold mb-2">Office Hours</h3>
              <p className="text-neutral-600 mb-1">Monday-Friday: 8:00 AM - 5:00 PM</p>
              <p className="text-neutral-600 mb-1">Saturday: 9:00 AM - 1:00 PM</p>
              <p className="text-neutral-600">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-neutral-600 mb-8">
                Have questions or need more information? Fill out the form below and our team will get back to you as soon as possible.
              </p>
              
              {isSubmitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  <p className="font-medium">Thank you for your message!</p>
                  <p>We've received your inquiry and will respond shortly.</p>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                    Your Name <span className="text-error-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:ring focus:ring-primary-200 focus:border-primary-500 outline-none transition-colors ${
                      errors.name ? 'border-error-500' : 'border-neutral-300'
                    }`}
                  />
                  {errors.name && <p className="mt-1 text-sm text-error-500">{errors.name}</p>}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                      Email Address <span className="text-error-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:ring focus:ring-primary-200 focus:border-primary-500 outline-none transition-colors ${
                        errors.email ? 'border-error-500' : 'border-neutral-300'
                      }`}
                    />
                    {errors.email && <p className="mt-1 text-sm text-error-500">{errors.email}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring focus:ring-primary-200 focus:border-primary-500 outline-none"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
                    Subject <span className="text-error-500">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:ring focus:ring-primary-200 focus:border-primary-500 outline-none transition-colors ${
                      errors.subject ? 'border-error-500' : 'border-neutral-300'
                    }`}
                  >
                    <option value="">Select a subject</option>
                    <option value="Admission Inquiry">Admission Inquiry</option>
                    <option value="Academic Programs">Academic Programs</option>
                    <option value="Campus Tours">Campus Tours</option>
                    <option value="Financial Aid">Financial Aid</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.subject && <p className="mt-1 text-sm text-error-500">{errors.subject}</p>}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                    Your Message <span className="text-error-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-2 border rounded-md focus:ring focus:ring-primary-200 focus:border-primary-500 outline-none transition-colors ${
                      errors.message ? 'border-error-500' : 'border-neutral-300'
                    }`}
                  ></textarea>
                  {errors.message && <p className="mt-1 text-sm text-error-500">{errors.message}</p>}
                </div>
                
                <div>
                  <button 
                    type="submit" 
                    className="btn btn-primary w-full md:w-auto"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            
            {/* Map */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Find Us</h2>
              <p className="text-neutral-600 mb-8">
                Our campus is conveniently located in the heart of Knowledge City, with easy access to public transportation.
              </p>
              <div className="h-96 bg-neutral-200 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3b79a1ed6c!2sCentral%20Park!5e0!3m2!1sen!2sus!4v1651234567890!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  title="Campus Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Frequently Asked Questions</h2>
            <p className="max-w-2xl mx-auto text-neutral-600">
              Find answers to common questions about Athena Academy.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {[
              {
                question: "What are the admission requirements?",
                answer: "Admission requirements vary by program but generally include academic transcripts, standardized test scores, letters of recommendation, and a personal statement. Please visit our Admissions page for detailed requirements specific to your program of interest."
              },
              {
                question: "Do you offer campus tours for prospective students?",
                answer: "Yes, we offer guided campus tours for prospective students and their families every weekday at 10:00 AM and 2:00 PM. Weekend tours are available by appointment. Please contact our Admissions office to schedule a tour."
              },
              {
                question: "What financial aid options are available?",
                answer: "Athena Academy offers various financial aid options including merit-based scholarships, need-based grants, work-study programs, and loan options. Our Financial Aid office can help you explore all available options to make your education affordable."
              },
              {
                question: "What is the student-to-faculty ratio?",
                answer: "Our current student-to-faculty ratio is 12:1, ensuring that students receive personalized attention and mentorship throughout their academic journey."
              }
            ].map((faq, index) => (
              <div key={index} className="mb-6 bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-primary-800 mb-2">{faq.question}</h3>
                <p className="text-neutral-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;