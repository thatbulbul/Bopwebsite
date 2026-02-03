'use client';

export default function FeaturedProjects() {
  const projects = [
    {
      id: 1,
      name: 'Godrej Majesty',
      category: 'Residential',
      area: 'Noida'
    },
    {
      id: 2,
      name: 'Aspire Centurian Park',
      category: 'Residential',
      area: 'Noida'
    },
    {
      id: 3,
      name: 'Eternia Residences',
      category: 'Residential',
      area: 'Greater Noida'
    },
    {
      id: 4,
      name: 'Timez By Danube',
      category: 'Residential',
      area: 'Gurgaon'
    },
    {
      id: 5,
      name: 'Bhutani City Centre',
      category: 'Commercial',
      area: 'Noida'
    },
    {
      id: 6,
      name: 'Ekana Business Park',
      category: 'Commercial',
      area: 'Noida'
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Featured Projects</h2>
          <p className="text-xl text-gray-600">Premium developments across Delhi NCR</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition overflow-hidden group cursor-pointer">
              <div className="bg-gradient-to-br from-orange-500 to-orange-700 h-64 flex items-center justify-center group-hover:from-orange-600 group-hover:to-orange-800 transition">
                <div className="text-white text-center">
                  <div className="text-3xl font-bold">{project.name}</div>
                  <div className="text-orange-100 mt-2">{project.category}</div>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <span className="text-gray-600">Location: <span className="font-semibold text-gray-900">{project.area}</span></span>
                </div>
                <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-lg font-semibold transition">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
