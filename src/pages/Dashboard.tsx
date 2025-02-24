import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAuth } from '../hooks/useAuth';
import { LogOut } from 'lucide-react';

const services = [
  {
    number: 1,
    title: 'AI Chatbots',
    subtitle: 'Revolutionizing customer interactions with intelligent conversational agents'
  },
  {
    number: 2,
    title: 'Phone Callers',
    subtitle: 'Advanced voice AI for seamless communication automation'
  },
  {
    number: 3,
    title: 'Web Design',
    subtitle: 'Creating stunning digital experiences that captivate and convert'
  },
  {
    number: 4,
    title: 'Custom AI Solutions',
    subtitle: 'Tailored artificial intelligence for your unique business needs'
  },
  {
    number: 5,
    title: 'Process Automation',
    subtitle: 'Streamlining operations with intelligent workflow solutions'
  },
  {
    number: 6,
    title: 'Data Analytics',
    subtitle: 'Transforming raw data into actionable business intelligence'
  }
];

function Dashboard() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      
      <main className="flex-grow pt-20">
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-7xl font-bold mb-8 tracking-wider text-center">SEE OUR WORK</h1>
              <p className="text-xl text-gray-400 text-center mb-16 max-w-4xl mx-auto">
                Still unsure about taking the leap into AI automation? Let our track record speak for itself. 
                Below, discover how we've transformed businesses across industries with our cutting-edge AI solutions. 
                Don't just adapt to the future—lead it with Neural AI.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((service) => (
                  <motion.div
                    key={service.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="border border-white p-8 rounded-lg frame-hover"
                  >
                    <div className="flex items-start space-x-4">
                      <span className="text-4xl font-bold text-white">{service.number}.</span>
                      <div>
                        <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
                        <p className="text-gray-400">{service.subtitle}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Dashboard;