'use client';

import { Calendar, User, ArrowRight } from 'lucide-react';

export default function BlogSection() {
  const blogs = [
    {
      id: 1,
      title: 'Top Tips for Buying Your First Home in Delhi NCR',
      excerpt: 'Learn essential tips and tricks for first-time home buyers in the Delhi NCR region.',
      author: 'Real Estate Expert',
      date: 'Jan 15, 2024',
      category: 'Buying Guide'
    },
    {
      id: 2,
      title: 'Investment Opportunities in Noida 2024',
      excerpt: 'Discover the best investment opportunities and emerging areas in Noida for 2024.',
      author: 'Market Analyst',
      date: 'Jan 10, 2024',
      category: 'Investment'
    },
    {
      id: 3,
      title: 'Commercial Real Estate Trends in Gurgaon',
      excerpt: 'Explore the latest trends and developments in Gurgaon commercial real estate market.',
      author: 'Industry Specialist',
      date: 'Jan 5, 2024',
      category: 'Market Trends'
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Latest Blog Posts</h2>
          <p className="text-xl text-gray-600">Stay updated with real estate news and insights</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition overflow-hidden">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 h-48 flex items-center justify-center">
                <div className="text-white text-center text-2xl font-bold">{blog.category}</div>
              </div>

              <div className="p-8">
                <div className="flex gap-4 text-gray-600 text-sm mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{blog.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={16} />
                    <span>{blog.author}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 line-clamp-2">{blog.title}</h3>
                <p className="text-gray-600 mb-6 line-clamp-2">{blog.excerpt}</p>

                <button className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold transition">
                  Read More
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
}
