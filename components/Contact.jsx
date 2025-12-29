import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission
    toast({
      title: 'Message Sent Successfully!',
      description: 'We will get back to you within 24 hours.',
    });
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      details: 'info@newgenxpert.com',
      subDetails: 'support@newgenxpert.com',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      subDetails: 'Mon-Fri 9AM-6PM',
      gradient: 'from-teal-500 to-emerald-500',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Visit Us',
      details: '123 Tech Park, Suite 100',
      subDetails: 'Silicon Valley, CA 94025',
      gradient: 'from-violet-500 to-purple-500',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-slate-400 to-slate-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to transform your business? Let's discuss your project
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 hover:-translate-y-1"
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${info.gradient} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{info.title}</h3>
                <p className="text-slate-700 font-medium">{info.details}</p>
                <p className="text-slate-500 text-sm">{info.subDetails}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="max-w-4xl mx-auto border-0 shadow-xl">
          <CardContent className="p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-slate-700">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="border-slate-300 focus:border-slate-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-slate-700">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="border-slate-300 focus:border-slate-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-slate-700">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="border-slate-300 focus:border-slate-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-semibold text-slate-700">
                    Company Name
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="border-slate-300 focus:border-slate-500 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-slate-700">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={6}
                  required
                  className="border-slate-300 focus:border-slate-500 transition-colors resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-slate-900 hover:bg-slate-800 text-white transition-all duration-300 hover:shadow-lg group"
              >
                Send Message
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;