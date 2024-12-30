import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., API call or Google Sheets integration)
    alert('Form submitted');
  };

  return (
    <div id="contact" className="bg-black max-w-[80%] m-auto text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="contact-left space-y-6">
            <h1 className="text-3xl font-semibold">Contact Me</h1>
            <p className="flex items-center text-lg">
              <i className="fa-solid fa-envelope mr-2"></i>
              danishhussainda247@gmail.com
            </p>
            <p className="flex items-center text-lg">
              <i className="fa-solid fa-phone mr-2"></i>
              +91 9906731211
            </p>
            <div className="social-icons flex space-x-4">
              <a
                href="https://www.linkedin.com/in/danish-hussain-dar-b06531228/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-500"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                href="https://www.facebook.com/danishhussain.dar.75"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-500"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/danish_h013/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-pink-500"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://twitter.com/Danish_H013"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-400"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a
                href="https://github.com/Danish-H099"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-gray-400"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
            <a
              href="DanishHussainDar_2106112.pdf"
              download
              className="inline-block mt-4 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
            >
              Download Resume
            </a>
          </div>
          <div className="contact-right space-y-4">
            <form onSubmit={handleSubmit} name="submit-to-google-sheet" className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              ></textarea>
              <button
                type="submit"
                className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Submit
              </button>
            </form>
            <span id="msg"></span>
          </div>
        </div>
      </div>
      <div className="copyright text-center mt-12">
        <p className="text-gray-400 text-sm">
          Copyright &#169; Danish. Made By Danish Hussain.
        </p>
      </div>
    </div>
  );
}

export default Contact;
