import { useState } from "react";

export default function BookAppointment() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    testType: "",
    preferredDate: "",
    note: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", form);
    // Later: send this to backend API
  };

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-poc-red mb-8 text-center">
          Book an Appointment
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Test Type</label>
            <select
              name="testType"
              value={form.testType}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            >
              <option value="">Select a Test</option>
              <option value="CBC">Complete Blood Count (CBC)</option>
              <option value="Blood Sugar">Blood Sugar Test</option>
              <option value="Lipid Profile">Lipid Profile</option>
              <option value="Malaria Test">Malaria Parasite Test</option>
              <option value="COVID-19">COVID-19 PCR Test</option>
              <option value="Urinalysis">Urinalysis</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Preferred Date</label>
            <input
              type="date"
              name="preferredDate"
              value={form.preferredDate}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Additional Notes (Optional)</label>
            <textarea
              name="note"
              value={form.note}
              onChange={handleChange}
              rows="3"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-poc-red-bg text-white py-3 rounded-md font-semibold hover:bg-poc-red"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}
