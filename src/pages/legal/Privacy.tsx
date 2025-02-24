import React from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Privacy() {
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
              <h1 className="text-7xl font-bold mb-8 tracking-wider text-center">PRIVACY POLICY</h1>
              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-bold mt-8 mb-4">1. Data Collection</h2>
                <p className="text-gray-400 mb-6">
                  Neural AI collects and processes personal data to provide our AI automation services. 
                  This includes:
                </p>
                <ul className="list-disc pl-6 text-gray-400 mb-6">
                  <li>Contact information (name, email, phone number)</li>
                  <li>Usage data from our services</li>
                  <li>Communication records</li>
                  <li>Technical data (IP address, browser information)</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">2. Use of Information</h2>
                <p className="text-gray-400 mb-6">
                  We use collected information to:
                </p>
                <ul className="list-disc pl-6 text-gray-400 mb-6">
                  <li>Provide and improve our services</li>
                  <li>Communicate with users</li>
                  <li>Analyze and optimize service performance</li>
                  <li>Comply with legal obligations</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">3. Data Protection</h2>
                <p className="text-gray-400 mb-6">
                  We implement industry-standard security measures to protect your data. This includes 
                  encryption, access controls, and regular security audits.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">4. Data Sharing</h2>
                <p className="text-gray-400 mb-6">
                  We do not sell your personal data. We may share data with:
                </p>
                <ul className="list-disc pl-6 text-gray-400 mb-6">
                  <li>Service providers who assist in our operations</li>
                  <li>Legal authorities when required by law</li>
                  <li>Business partners with your consent</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">5. Your Rights</h2>
                <p className="text-gray-400 mb-6">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 text-gray-400 mb-6">
                  <li>Access your personal data</li>
                  <li>Request data correction</li>
                  <li>Request data deletion</li>
                  <li>Withdraw consent</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">6. Contact Us</h2>
                <p className="text-gray-400 mb-6">
                  For privacy-related inquiries, please contact our Data Protection Officer at privacy@neural-ai.com
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

export default Privacy;