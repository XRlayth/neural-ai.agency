import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAuth } from '../hooks/useAuth';

function ResetPassword() {
  const [method, setMethod] = useState<'email' | 'backup'>('email');
  const [email, setEmail] = useState('');
  const [backupCode, setBackupCode] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { resetPasswordWithEmail, resetPasswordWithBackupCode } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      if (method === 'email') {
        await resetPasswordWithEmail(email);
        setSuccess('Password reset instructions have been sent to your email.');
      } else {
        await resetPasswordWithBackupCode(backupCode);
        navigate('/get-started');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      
      <main className="flex-grow pt-20">
        <section className="py-20 px-4">
          <div className="max-w-md mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl font-bold mb-8 tracking-wider">RESET PASSWORD</h1>
              <div className="border border-white p-8 rounded-lg">
                <div className="flex justify-center space-x-4 mb-8">
                  <button
                    className={`px-6 py-2 rounded-full transition-all duration-300 ${
                      method === 'email' ? 'bg-white text-black' : 'border border-white text-white'
                    }`}
                    onClick={() => setMethod('email')}
                  >
                    Email Reset
                  </button>
                  <button
                    className={`px-6 py-2 rounded-full transition-all duration-300 ${
                      method === 'backup' ? 'bg-white text-black' : 'border border-white text-white'
                    }`}
                    onClick={() => setMethod('backup')}
                  >
                    Backup Code
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {method === 'email' ? (
                    <div>
                      <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-4 bg-black border border-white rounded-lg focus:outline-none focus:border-white text-white"
                        required
                      />
                    </div>
                  ) : (
                    <div>
                      <input
                        type="text"
                        placeholder="Backup Code"
                        value={backupCode}
                        onChange={(e) => setBackupCode(e.target.value)}
                        className="w-full p-4 bg-black border border-white rounded-lg focus:outline-none focus:border-white text-white"
                        required
                      />
                    </div>
                  )}
                  
                  {error && (
                    <p className="text-red-500 text-sm">{error}</p>
                  )}
                  {success && (
                    <p className="text-green-500 text-sm">{success}</p>
                  )}
                  
                  <button
                    type="submit"
                    className="w-full px-8 py-4 rounded-lg bg-white text-black font-bold hover:bg-gray-200 transition-all duration-300"
                  >
                    Reset Password
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default ResetPassword;