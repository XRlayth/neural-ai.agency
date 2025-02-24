import React from 'react';
import { motion } from 'framer-motion';
import { Bot, ArrowRight } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function CustomAI() {
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
                <Bot className="w-12 h-12" />
              </div>
              <h1 className="text-7xl font-bold mb-8 tracking-wider">CUSTOM AI SOLUTIONS</h1>
              <p className="text-xl text-gray-400 leading-relaxed">
                Tailored artificial intelligence solutions designed for your unique business needs
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
                <h2 className="text-4xl font-bold mb-6">Bespoke AI Development</h2>
                <p className="text-gray-400 mb-6">
                  We create custom AI solutions that address your specific business challenges. 
                  From predictive analytics to computer vision systems, we build AI that delivers 
                  real business value.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <ArrowRight className="w-6 h-6 text-[#4facfe] flex-shrink-0" />
                    <span>Custom ML Models</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <ArrowRight className="w-6 h-6 text-[#4facfe] flex-shrink-0" />
                    <span>Industry-Specific Solutions</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <ArrowRight className="w-6 h-6 text-[#4facfe] flex-shrink-0" />
                    <span>Scalable Architecture</span>
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
                  src="https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
                  alt="Custom AI Development"
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
                <h3 className="text-xl font-bold mb-4">Manufacturing Company</h3>
                <p className="text-gray-400 mb-4">
                  Custom predictive maintenance AI reduced downtime by 75%
                </p>
                <div className="flex items-center space-x-2">
                  <span className="text-[#4facfe]">75%</span>
                  <span className="text-sm text-gray-400">Less Downtime</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="border border-white p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-4">Healthcare Provider</h3>
                <p className="text-gray-400 mb-4">
                  AI diagnostic system improved accuracy by 45%
                </p>
                <div className="flex items-center space-x-2">
                  <span className="text-[#4facfe]">45%</span>
                  <span className="text-sm text-gray-400">Higher Accuracy</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="border border-white p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-4">Retail Chain</h3>
                <p className="text-gray-400 mb-4">
                  Inventory optimization AI increased efficiency by 60%
                </p>
                <div className="flex items-center space-x-2">
                  <span className="text-[#4facfe]">60%</span>
                  <span className="text-sm text-gray-400">More Efficient</span>
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

export default CustomAI;