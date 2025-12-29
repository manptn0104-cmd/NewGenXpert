import React from 'react';
import { Target, Lightbulb, Users, Award } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Our Vision',
      description: 'To empower businesses through innovative technology solutions that drive efficiency, scalability, and digital transformation.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Our Mission',
      description: 'To deliver world-class IT services and solutions leveraging cutting-edge technologies, enabling sustainable growth and competitive advantage.',
      color: 'from-teal-500 to-emerald-500',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Our Partnership',
      description: 'Partnering with Microsoft aligns with our strategic objectives, enabling effective collaboration within the Microsoft ecosystem.',
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Our Commitment',
      description: 'Dedicated to excellence, innovation, and delivering transformative solutions that exceed client expectations.',
      color: 'from-violet-500 to-purple-500',
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            About NewGenXpert Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-slate-400 to-slate-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We are a forward-thinking technology partner committed to transforming businesses
            through innovative solutions and strategic Microsoft ecosystem integration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {values.map((value, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white hover:-translate-y-2"
            >
              <CardContent className="p-8">
                <div
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${value.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-6">Why Choose Us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Innovative
              </div>
              <p className="text-slate-300">Cutting-edge technology solutions</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                Reliable
              </div>
              <p className="text-slate-300">Proven track record of success</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                Scalable
              </div>
              <p className="text-slate-300">Solutions that grow with you</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;