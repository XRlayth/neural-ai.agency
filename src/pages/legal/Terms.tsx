import React from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Terms() {
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
            >
              <h1 className="text-7xl font-bold mb-8 tracking-wider text-center">TERMS OF SERVICE</h1>
              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
                <p className="text-gray-400 mb-6">
                  Welcome to Neural AI. By accessing our website and services, you agree to these terms. 
                  Please read them carefully before using our AI automation services.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">2. Service Description</h2>
                <p className="text-gray-400 mb-6">
                  Neural AI provides AI automation services including chatbots, phone automation, and custom AI solutions. 
                  We reserve the right to modify or discontinue any service without notice.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">3. User Obligations</h2>
                <p className="text-gray-400 mb-6">
                  Users must:
                </p>
                <ul className="list-disc pl-6 text-gray-400 mb-6">
                  <li>Provide accurate information</li>
                  <li>Maintain security of account credentials</li>
                  <li>Use services in compliance with applicable laws</li>
                  <li>Not attempt to reverse engineer our AI systems</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">4. Data Usage</h2>
                <p className="text-gray-400 mb-6">
                  We collect and process data in accordance with our Privacy Policy. Users retain ownership 
                  of their data while granting us necessary licenses to provide services.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">5. Intellectual Property</h2>
                <p className="text-gray-400 mb-6">
                  All intellectual property rights in our services remain with Neural AI. Users receive 
                  a limited license to use our services as intended.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">6. Limitation of Liability</h2>
                <p className="text-gray-400 mb-6">
                  Neural AI provides services "as is" without warranties. We are not liable for indirect 
                  damages or service interruptions.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">7. Changes to Terms</h2>
                <p className="text-gray-400 mb-6">
                  We may update these terms at any time. Continued use of our services constitutes 
                  acceptance of modified terms.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">8. Contact</h2>
                <p className="text-gray-400 mb-6">
                  For questions about these terms, please contact us at legal@neural-ai.com
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Terms;