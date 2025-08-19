import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-50 to-rose-300 py-16 px-4 text-center lg:text-left">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-poc-red leading-tight mb-6">
              Fast, Accurate & Reliable <br /> Diagnostic Lab Services
            </h1>
            <p className="text-gray-700 text-lg mb-6">
              Point of Care Medical Lab delivers high-quality testing services with quick turnaround time. Book appointments online and access results with ease.
            </p>
            <div className="flex flex-col sm:flex-row md:justify-center lg:justify-start gap-4">
              <Link
                to="/book"
                className="bg-poc-red-bg hover:bg-poc-red text-white font-semibold py-3 px-6 rounded-lg"
              >
                Book Appointment
              </Link>
              <Link
                to="/services"
                className="border border-poc-red-bg text-poc-red-bg hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg"
              >
                View Services
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <img
              src="/images/lab-illustration.svg"
              alt="Lab Illustration"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-poc-red-bg mb-10">Why Choose Us</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-poc-red mb-2">Certified Professionals</h3>
              <p className="text-gray-600">Our lab scientists and technicians are highly trained and licensed.</p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-poc-red mb-2">Fast Turnaround</h3>
              <p className="text-gray-600">Most test results are available within 24 hours for your convenience.</p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-poc-red mb-2">Secure Online Access</h3>
              <p className="text-gray-600">Patients can securely view and download their lab results anytime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-4 text-center bg-poc-red-bg text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Book a Test?</h2>
        <p className="mb-6 text-lg">Click below to schedule your lab appointment in minutes.</p>
        <Link
          to="/book"
          className="bg-white text-poc-red font-semibold py-3 px-6 rounded-lg hover:bg-blue-50"
        >
          Book Now
        </Link>
      </section>
    </div>
  );
}
