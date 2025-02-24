import React from 'react';
import { motion } from 'framer-motion';
import { Workflow, ArrowRight } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function ProcessAutomation() {
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
                <Workflow className="w-12 h-12" />
              </div>
              <h1 className="text-7xl font-bold mb-8 tracking-wider">PROCESS AUTOMATION</h1>
              <p className="text-xl text-gray-400 leading-relaxed">
                Streamline your workflows with intelligent automation solutions
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
                <h2 className="text-4xl font-bold mb-6">Intelligent Workflow Automation</h2>
                <p className="text-gray-400 mb-6">
                  Our process automation solutions combine AI with robotic process automation (RPA) 
                  to streamline operations, reduce errors, and increase productivity across your 
                  organization.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <ArrowRight className="w-6 h-6 text-[#4facfe] flex-shrink-0" />
                    <span>Workflow Optimization</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <ArrowRight className="w-6 h-6 text-[#4facfe] flex-shrink-0" />
                    <span>Task Automation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <ArrowRight className="w-6 h-6 text-[#4facfe] flex-shrink-0" />
                    <span>Process Analytics</span>
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
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
                  alt="Process Automation"
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
                <h3 className="text-xl font-bold mb-4">Financial Institution</h3>
                <p className="text-gray-400 mb-4">
                  Automated document processing saved 5000+ work hours annually
                </p>
                <div className="flex items-center space-x-2">
                  <span className="text-[#4facfe]">5000+</span>
                  <span className="text-sm text-gray-400">Hours Saved</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="border border-white p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-4">Insurance Company</h3>
                <p className="text-gray-400 mb-4">
                  Claims processing time reduced by 80%
                </p>
                <div className="flex items-center space-x-2">
                  <span className="text-[#4facfe]">80%</span>
                  <span className="text-sm text-gray-400">Faster Processing</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="border border-white p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-4">Logistics Company</h3>
                <p className="text-gray-400 mb-4">
                  Automated routing improved delivery efficiency by 40%
                </p>
                <div className="flex items-center space-x-2">
                  <span className="text-[#4facfe]">40%</span>
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

export default ProcessAutomation;