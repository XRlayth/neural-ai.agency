import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function PhoneCallers() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      
      <main className="flex-grow pt-20">
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-block p-4 rounded-full border border-white mb-8">
                <Phone className="w-12 h-12" />
              </div>
              <h1 className="text-7xl font-bold mb-8 tracking-wider">AI PHONE CALLERS</h1>
              <p className="text-xl text-gray-400 leading-relaxed">
                Revolutionize your outbound calling with intelligent AI voice agents
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-4 border-t border-gray-800">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold mb-6">Transform Your Call Center</h2>
                <p className="text-gray-400 mb-6">
                  Our AI phone callers use advanced voice synthesis and natural language understanding 
                  to conduct human-like conversations. Perfect for appointment scheduling, surveys, 
                  and follow-ups.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <ArrowRight className="w-6 h-6 text-[#4facfe] flex-shrink-0" />
                    <span>Natural Voice Synthesis</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <ArrowRight className="w-6 h-6 text-[#4facfe] flex-shrink-0" />
                    <span>Intelligent Conversation Flow</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <ArrowRight className="w-6 h-6 text-[#4facfe] flex-shrink-0" />
                    <span>Real-time Analytics</span>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1587560699334-cc4ff634909a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
                  alt="AI Phone System"
                  className="rounded-lg shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 border-t border-gray-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="border border-white p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-4">Healthcare Provider</h3>
                <p className="text-gray-400 mb-4">
                  Automated appointment reminders led to 50% reduction in no-shows
                </p>
                <div className="flex items-center space-x-2">
                  <span className="text-[#4facfe]">50%</span>
                  <span className="text-sm text-gray-400">Fewer No-shows</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="border border-white p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-4">Market Research Firm</h3>
                <p className="text-gray-400 mb-4">
                  Completed 10,000 surveys in 48 hours with 98% accuracy rate
                </p>
                <div className="flex items-center space-x-2">
                  <span className="text-[#4facfe]">98%</span>
                  <span className="text-sm text-gray-400">Accuracy Rate</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="border border-white p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-4">Sales Organization</h3>
                <p className="text-gray-400 mb-4">
                  Increased lead qualification efficiency by 300%
                </p>
                <div className="flex items-center space-x-2">
                  <span className="text-[#4facfe]">300%</span>
                  <span className="text-sm text-gray-400">Efficiency Gain</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default PhoneCallers;