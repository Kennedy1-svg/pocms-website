export default function Contact() {
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">
          Contact Us
        </h1>

        <p className="text-gray-700 text-lg mb-8 text-center">
          We'd love to hear from you! Whether you have questions, feedback, or want to schedule a visit, feel free to reach out.
        </p>

        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Full Name"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="How can we help you?"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-3 rounded-md font-semibold hover:bg-blue-800 transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-12 text-center text-gray-600">
          <p>Email: <a href="mailto:info@pointofcarelab.com" className="text-blue-700">info@pointofcarelab.com</a></p>
          <p>Phone: <a href="tel:+2348000000000" className="text-blue-700">+234 800 000 0000</a></p>
          <p>Address: 123 Health Avenue, Lagos, Nigeria</p>
        </div>
      </div>
    </div>
  );
}
