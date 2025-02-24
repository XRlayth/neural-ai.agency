import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Network } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function About() {
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
              <h1 className="text-7xl font-bold mb-8 tracking-wider text-white">ABOUT NEURAL AI</h1>
              <p className="text-xl text-gray-400 leading-relaxed">
                We are pioneers in AI automation, dedicated to transforming businesses 
                through cutting-edge artificial intelligence solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-4 border-t border-gray-800">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-400">
                  To empower businesses with intelligent automation solutions that drive growth and innovation.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Cpu className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-xl font-bold mb-4">Our Technology</h3>
                <p className="text-gray-400">
                  We leverage state-of-the-art AI and machine learning to create powerful, scalable solutions.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Network className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-xl font-bold mb-4">Our Impact</h3>
                <p className="text-gray-400">
                  We've helped countless businesses achieve digital transformation and operational excellence.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default About;