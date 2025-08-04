export default function About() {
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-900 mb-6 text-center">
          About Us
        </h1>
        <img
          src="/images/lab-team.jpg"
          alt="Our Team at Work"
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <p className="text-gray-700 text-lg mb-6">
          Welcome to Point-of-Care Lab, where your health and wellness come first.
          We are a dedicated medical diagnostics facility committed to providing high-quality, affordable, and accessible testing services.
          With a team of certified medical professionals and state-of-the-art equipment, we ensure timely and accurate test results.
        </p>
        <img
          src="/images/equipment.jpg"
          alt="Diagnostic Equipment"
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <p className="text-gray-700 text-lg mb-6">
          Our services cover a wide range of diagnostic tests, including blood tests, COVID-19 testing, malaria parasite checks,
          urinalysis, and much more. Whether you're booking a routine check or a specialized test, our seamless appointment system ensures minimal wait time and maximum care.
        </p>
        <img
          src="/images/patient-service.jpg"
          alt="Friendly Patient Service"
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <p className="text-gray-700 text-lg">
          At Point-of-Care Lab, we believe everyone deserves quick, reliable health diagnostics close to home. Join the hundreds of clients who trust us for accurate results and excellent service.
        </p>
      </div>
    </div>
  );
}
