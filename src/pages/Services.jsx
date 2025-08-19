export default function Services() {
  const tests = [
    {
      name: "Complete Blood Count (CBC)",
      description: "Evaluates overall health and detects a wide range of disorders, including anemia and infection."
    },
    {
      name: "Blood Sugar Test",
      description: "Checks glucose levels in your blood to screen for or monitor diabetes."
    },
    {
      name: "Lipid Profile",
      description: "Measures cholesterol and triglycerides to assess heart disease risk."
    },
    {
      name: "Malaria Parasite Test",
      description: "Detects the presence of malaria parasites in the blood."
    },
    {
      name: "COVID-19 PCR Test",
      description: "Identifies active coronavirus infection with high accuracy."
    },
    {
      name: "Urinalysis",
      description: "Analyzes urine to detect a range of disorders, including urinary tract infections and kidney disease."
    }
  ];

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-poc-red mb-12">
          Our Diagnostic Services
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tests.map((test, index) => (
            <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <h2 className="text-xl font-semibold text-poc-red-bg mb-2">{test.name}</h2>
              <p className="text-gray-600 text-sm">{test.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}