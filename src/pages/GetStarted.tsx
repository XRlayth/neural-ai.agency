import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAuth } from '../hooks/useAuth';
import VerificationInput from '../components/VerificationInput';

function GetStarted() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const [error, setError] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const { signIn, signUp } = useAuth();
  const navigate = useNavigate();

  const getPasswordStrength = (pass: string) => {
    let strength = 0;
    if (pass.length >= 8) strength++;
    if (/[A-Z]/.test(pass)) strength++;
    if (/[a-z]/.test(pass)) strength++;
    if (/[0-9]/.test(pass)) strength++;
    if (/[^A-Za-z0-9]/.test(pass)) strength++;
    return strength;
  };

  const passwordStrength = getPasswordStrength(password);
  const strengthColors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-blue-500', 'bg-green-500'];
  const strengthLabels = ['Very Weak', 'Weak', 'Medium', 'Strong', 'Very Strong'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (isSignUp) {
      if (password !== verifyPassword) {
        setError('Passwords do not match');
        return;
      }
      if (passwordStrength < 3) {
        setError('Password is too weak');
        return;
      }

      try {
        const { error: signUpError } = await signUp(email, password, username);
        if (signUpError) throw signUpError;
        setIsVerifying(true);
      } catch (err) {
        setError(err.message);
      }
    } else {
      try {
        const { error: signInError } = await signIn(email, password);
        if (signInError) throw signInError;
        navigate('/dashboard');
      } catch (err) {
        setError(err.message);
      }
    }
  };

  const handleVerification = async (code: string) => {
    try {
      const { error } = await supabase.auth.verifyOtp({
        email,
        token: code,
        type: 'signup'
      });

      if (error) throw error;
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid verification code. Please try again.');
    }
  };

  if (isVerifying) {
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
                <h2 className="text-3xl font-bold mb-6">Verify Your Email</h2>
                <div className="border border-white p-8 rounded-lg">
                  <p className="text-gray-400 mb-6">
                    Please enter the verification code sent to {email}
                  </p>
                  <VerificationInput
                    value={verificationCode}
                    onChange={setVerificationCode}
                    onComplete={handleVerification}
                  />
                  {error && (
                    <p className="text-red-500 mt-4">{error}</p>
                  )}
                </div>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

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
              <h1 className="text-5xl font-bold mb-8 tracking-wider">LET'S BUILD THE FUTURE</h1>
              <div className="border border-white p-8 rounded-lg">
                <div className="flex justify-center space-x-4 mb-8">
                  <button
                    className={`px-6 py-2 rounded-full transition-all duration-300 ${
                      !isSignUp ? 'bg-white text-black' : 'border border-white text-white'
                    }`}
                    onClick={() => setIsSignUp(false)}
                  >
                    Sign In
                  </button>
                  <button
                    className={`px-6 py-2 rounded-full transition-all duration-300 ${
                      isSignUp ? 'bg-white text-black' : 'border border-white text-white'
                    }`}
                    onClick={() => setIsSignUp(true)}
                  >
                    Sign Up
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {isSignUp && (
                    <div>
                      <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-4 bg-black border border-white rounded-lg focus:outline-none focus:border-white text-white"
                        required
                      />
                    </div>
                  )}
                  <div>
                    <input
                      type="text"
                      placeholder={isSignUp ? "Email" : "Email/Username"}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-4 bg-black border border-white rounded-lg focus:outline-none focus:border-white text-white"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full p-4 bg-black border border-white rounded-lg focus:outline-none focus:border-white text-white"
                      required
                    />
                    {isSignUp && password && (
                      <div className="mt-2">
                        <div className="h-2 rounded-full bg-gray-700 overflow-hidden">
                          <div 
                            className={`h-full transition-all duration-300 ${strengthColors[passwordStrength - 1]}`}
                            style={{ width: `${(passwordStrength / 5) * 100}%` }}
                          />
                        </div>
                        <p className="text-sm mt-1 text-gray-400">
                          Password Strength: {strengthLabels[passwordStrength - 1]}
                        </p>
                      </div>
                    )}
                  </div>
                  {isSignUp && (
                    <div>
                      <input
                        type="password"
                        placeholder="Verify Password"
                        value={verifyPassword}
                        onChange={(e) => setVerifyPassword(e.target.value)}
                        className="w-full p-4 bg-black border border-white rounded-lg focus:outline-none focus:border-white text-white"
                        required
                      />
                    </div>
                  )}
                  {error && (
                    <p className="text-red-500 text-sm">{error}</p>
                  )}
                  <button
                    type="submit"
                    className="w-full px-8 py-4 rounded-lg bg-white text-black font-bold hover:bg-gray-200 transition-all duration-300"
                  >
                    {isSignUp ? 'Create Account' : 'Sign In'}
                  </button>
                  {!isSignUp && (
                    <Link
                      to="/reset-password"
                      className="block text-sm text-gray-400 hover:text-white transition-colors mt-4"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      I don't remember my password
                    </Link>
                  )}
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

export default GetStarted;