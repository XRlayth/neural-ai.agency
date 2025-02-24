import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Phone, Monitor, Bot, Workflow, Database, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const services = [
  {
    icon: <MessageSquare className="w-12 h-12" />,
    title: 'AI Chatbots',
    description: 'Intelligent conversational agents that enhance customer engagement 24/7.',
    link: '/services/chatbots'
  },
  {
    icon: <Phone className="w-12 h-12" />,
    title: 'Phone Callers',
    description: 'Advanced AI-powered calling solutions for seamless communication.',
    link: '/services/phone-callers'
  },
  {
    icon: <Monitor className="w-12 h-12" />,
    title: 'Web Design',
    description: 'Stunning, modern web experiences that captivate and convert.',
    link: '/services/web-design'
  },
  {
    icon: <Bot className="w-12 h-12" />,
    title: 'Custom AI Solutions',
    description: 'Tailored artificial intelligence solutions for your specific needs.',
    link: '/services/custom-ai'
  },
  {
    icon: <Workflow className="w-12 h-12" />,
    title: 'Process Automation',
    description: 'Streamline your workflows with intelligent automation.',
    link: '/services/automation'
  },
  {
    icon: <Database className="w-12 h-12" />,
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights with AI-powered analytics.',
    link: '/services/analytics'
  }
];

function Services() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-7xl font-bold mb-8 tracking-wider text-white">OUR SERVICES</h1>
              <p className="text-xl text-gray-400 leading-relaxed">
                Discover our comprehensive range of AI-powered solutions designed to 
                transform your business operations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border border-white p-8 rounded-lg hover:border-white transition-all duration-300 group"
                >
                  <div className="mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  <Link 
                    to={service.link}
                    className="inline-flex items-center text-white hover:text-[#4facfe] transition-colors"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Learn more, see how this service changed businesses
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Services;