import React from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Cookies() {
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
              <h1 className="text-7xl font-bold mb-8 tracking-wider text-center">COOKIE POLICY</h1>
              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-bold mt-8 mb-4">1. What Are Cookies</h2>
                <p className="text-gray-400 mb-6">
                  Cookies are small text files stored on your device when you visit our website. 
                  They help us provide and improve our services by remembering your preferences 
                  and analyzing how you use our site.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">2. Types of Cookies We Use</h2>
                <ul className="list-disc pl-6 text-gray-400 mb-6">
                  <li>Essential cookies: Required for basic site functionality</li>
                  <li>Analytics cookies: Help us understand how visitors use our site</li>
                  <li>Preference cookies: Remember your settings and choices</li>
                  <li>Marketing cookies: Track your activity for targeted advertising</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">3. Cookie Management</h2>
                <p className="text-gray-400 mb-6">
                  You can control cookies through your browser settings. However, disabling certain 
                  cookies may limit your ability to use some features of our site.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">4. Third-Party Cookies</h2>
                <p className="text-gray-400 mb-6">
                  Some cookies are placed by third-party services that appear on our pages. We do not 
                  control these cookies and they are subject to the third party's privacy policy.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">5. Updates to This Policy</h2>
                <p className="text-gray-400 mb-6">
                  We may update this Cookie Policy to reflect changes in our practices or for legal 
                  compliance. We will notify you of any significant changes.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">6. Contact Us</h2>
                <p className="text-gray-400 mb-6">
                  If you have questions about our use of cookies, please contact us at cookies@neural-ai.com
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

export default Cookies;