export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Why Routine Diagnostics Matter",
      summary: "Discover the importance of regular medical checkups and early detection through lab tests.",
      image: "/images/blog1.jpg",
      date: "August 1, 2025",
    },
    {
      id: 2,
      title: "Understanding COVID-19 PCR vs Rapid Tests",
      summary: "Which COVID test should you choose and why? We explain the differences in simple terms.",
      image: "/images/blog2.jpg",
      date: "July 22, 2025",
    },
    {
      id: 3,
      title: "How to Prepare for a Blood Test",
      summary: "Tips on what to eat, drink, and avoid before your blood test appointment.",
      image: "/images/blog3.jpg",
      date: "July 10, 2025",
    },
  ];

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-poc-red mb-12 text-center">Our Blog</h1>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-gray-50 border border-gray-200 rounded-lg shadow hover:shadow-md transition duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h2 className="text-xl font-semibold text-poc-red-bg mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-700 text-sm">{post.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
