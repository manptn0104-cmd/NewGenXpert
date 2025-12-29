import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { blogPosts } from '../data/mockData';

const Blogs = () => {
  return (
    <section id="blogs" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Latest Insights
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-slate-400 to-slate-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Stay updated with the latest technology trends and insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden cursor-pointer hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className={`px-4 py-1 rounded-full text-sm font-semibold text-white ${post.categoryColor}`}>
                    {post.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-slate-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <button className="flex items-center text-slate-900 font-semibold group-hover:text-slate-700 transition-colors">
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-8 py-4 border-2 border-slate-900 text-slate-900 rounded-xl hover:bg-slate-900 hover:text-white transition-all duration-300 font-semibold">
            View All Articles
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blogs;