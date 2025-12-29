import React from 'react';
import { Cloud, Cpu, Wrench, Brain, Package, Users, Code } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const Services = () => {
  const services = [
    {
      icon: <Wrench className="w-10 h-10" />,
      title: 'Microsoft Services',
      description: 'Comprehensive Microsoft solutions including Azure, Microsoft 365, Dynamics 365, and Power Platform implementation and optimization.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Cloud className="w-10 h-10" />,
      title: 'Cloud Solutions',
      description: 'Seamless cloud migration, infrastructure management, and multi-cloud strategies to enhance scalability and reduce costs.',
      gradient: 'from-cyan-500 to-teal-500',
    },
    {
      icon: <Cpu className="w-10 h-10" />,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation services to modernize operations, automate processes, and drive innovation.',
      gradient: 'from-teal-500 to-emerald-500',
    },
    {
      icon: <Brain className="w-10 h-10" />,
      title: 'AI/ML Services',
      description: 'Advanced artificial intelligence and machine learning solutions for predictive analytics, automation, and intelligent decision-making.',
      gradient: 'from-violet-500 to-purple-500',
    },
    {
      icon: <Package className="w-10 h-10" />,
      title: 'Enterprise Software',
      description: 'Custom enterprise software development, ERP implementation, and system integration to streamline business operations.',
      gradient: 'from-amber-500 to-orange-500',
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: 'Consulting',
      description: 'Strategic IT consulting to align technology with business goals, optimize infrastructure, and accelerate growth.',
      gradient: 'from-rose-500 to-pink-500',
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: 'App/Web Development',
      description: 'Full-stack application and web development services delivering responsive, scalable, and user-centric solutions.',
      gradient: 'from-indigo-500 to-blue-500',
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-slate-400 to-slate-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-b from-white to-slate-50 hover:-translate-y-2 cursor-pointer"
            >
              <CardContent className="p-8">
                <div
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                >
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-slate-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-slate-700 mb-6">
            Need a custom solution? We're here to help.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center px-8 py-4 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all duration-300 hover:shadow-lg hover:scale-105 font-semibold"
          >
            Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;