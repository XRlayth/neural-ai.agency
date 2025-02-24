import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

function Contact() {
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
              <h1 className="text-7xl font-bold mb-8 tracking-wider text-white">CONTACT US</h1>
              <p className="text-xl text-gray-400 leading-relaxed">
                Ready to transform your business with AI? Get in touch with our team.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              <ContactForm />
            </motion.div>
          </div>
        </section>

        {/* Spline Section */}
        <section className="h-[500px] w-full relative">
          <Spline scene="https://prod.spline.design/di-MaYwy3xhfsS0H/scene.splinecode" />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Contact;