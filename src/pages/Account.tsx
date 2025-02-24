import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LogOut } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import VerificationInput from '../components/VerificationInput';
import { supabase } from '../lib/supabase';

function Account() {
  const [activeTab, setActiveTab] = useState<'info' | 'security'>('info');
  const { user, enable2FA, generateBackupCodes, signOut } = useAuth();
  const [backupCodes, setBackupCodes] = useState<string[]>([]);
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [is2FAInProgress, setIs2FAInProgress] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.user_metadata?.username) {
      setUsername(user.user_metadata.username);
    }
  }, [user]);

  const handleEnable2FA = async () => {
    try {
      setIs2FAInProgress(true);
      await enable2FA();
      setIs2FAEnabled(true);
    } catch (error) {
      console.error('Error enabling 2FA:', error);
    }
  };

  const handleGenerateBackupCodes = async () => {
    try {
      const codes = await generateBackupCodes();
      setBackupCodes(codes);
    } catch (error) {
      console.error('Error generating backup codes:', error);
    }
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      alert('New passwords do not match');
      return;
    }

    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword
      });

      if (error) throw error;

      setIsChangingPassword(false);
      alert('Password updated successfully');
    } catch (error) {
      console.error('Error changing password:', error);
      alert('Error changing password. Please try again.');
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const maskPassword = (password: string) => {
    return password.slice(0, 3) + '•'.repeat(password.length - 3);
  };

  const verify2FA = async (code: string) => {
    try {
      const { error } = await supabase.auth.verifyOtp({
        email: user?.email || '',
        token: code,
        type: 'email'
      });

      if (error) throw error;

      setIs2FAEnabled(true);
      setIs2FAInProgress(false);
    } catch (error) {
      console.error('Error verifying 2FA:', error);
      alert('Error verifying 2FA code. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      
      <main className="flex-grow pt-20">
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl font-bold mb-12 tracking-wider text-center">ACCOUNT PANEL</h1>
              
              <div className="grid grid-cols-12 gap-8">
                {/* Sidebar */}
                <div className="col-span-3">
                  <div className="border border-white rounded-lg p-4">
                    <button
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors frame-hover ${
                        activeTab === 'info' ? 'bg-white text-black' : 'text-white hover:bg-white/10'
                      }`}
                      onClick={() => setActiveTab('info')}
                    >
                      Account Info
                    </button>
                    <button
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors frame-hover ${
                        activeTab === 'security' ? 'bg-white text-black' : 'text-white hover:bg-white/10'
                      }`}
                      onClick={() => setActiveTab('security')}
                    >
                      Security
                    </button>
                  </div>
                </div>

                {/* Main Content */}
                <div className="col-span-9">
                  <div className="border border-white rounded-lg p-8">
                    {activeTab === 'info' ? (
                      <div>
                        <h2 className="text-2xl font-bold mb-6">Account Information</h2>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm text-gray-400 mb-1">Username</label>
                            <p className="text-lg">{username || 'N/A'}</p>
                          </div>
                          <div>
                            <label className="block text-sm text-gray-400 mb-1">Email</label>
                            <p className="text-lg">{user?.email || 'N/A'}</p>
                          </div>
                          <div>
                            <label className="block text-sm text-gray-400 mb-1">Password</label>
                            <div className="flex items-center space-x-4">
                              <p className="text-lg font-mono">{maskPassword(user?.user_metadata?.password || 'password')}</p>
                              <button
                                onClick={() => setIsChangingPassword(true)}
                                className="px-4 py-2 text-sm border border-white rounded frame-hover hover:bg-white hover:text-black transition-colors"
                              >
                                Change Password
                              </button>
                            </div>
                          </div>

                          {isChangingPassword && (
                            <form onSubmit={handleChangePassword} className="mt-6 space-y-4">
                              <div>
                                <label className="block text-sm text-gray-400 mb-1">Current Password</label>
                                <input
                                  type="password"
                                  value={currentPassword}
                                  onChange={(e) => setCurrentPassword(e.target.value)}
                                  className="w-full p-3 bg-black border border-white rounded-lg"
                                />
                              </div>
                              <div>
                                <label className="block text-sm text-gray-400 mb-1">New Password</label>
                                <input
                                  type="password"
                                  value={newPassword}
                                  onChange={(e) => setNewPassword(e.target.value)}
                                  className="w-full p-3 bg-black border border-white rounded-lg"
                                />
                              </div>
                              <div>
                                <label className="block text-sm text-gray-400 mb-1">Confirm New Password</label>
                                <input
                                  type="password"
                                  value={confirmPassword}
                                  onChange={(e) => setConfirmPassword(e.target.value)}
                                  className="w-full p-3 bg-black border border-white rounded-lg"
                                />
                              </div>
                              <div className="flex space-x-4">
                                <button
                                  type="submit"
                                  className="px-6 py-2 bg-white text-black rounded frame-hover hover:bg-gray-200 transition-colors"
                                >
                                  Update Password
                                </button>
                                <button
                                  type="button"
                                  onClick={() => setIsChangingPassword(false)}
                                  className="px-6 py-2 border border-white rounded frame-hover hover:bg-white hover:text-black transition-colors"
                                >
                                  Cancel
                                </button>
                              </div>
                            </form>
                          )}

                          <div className="mt-8 pt-8 border-t border-gray-800">
                            <button
                              onClick={handleSignOut}
                              className="px-6 py-3 bg-red-600 text-white rounded-lg flex items-center space-x-2 hover:bg-red-700 transition-colors frame-hover"
                            >
                              <LogOut className="w-5 h-5" />
                              <span>Log Out</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <h2 className="text-2xl font-bold mb-6">Security Settings</h2>
                        <div className="space-y-8">
                          <div>
                            <h3 className="text-xl font-semibold mb-4">Two-Factor Authentication</h3>
                            {!is2FAEnabled ? (
                              <div>
                                <button
                                  onClick={handleEnable2FA}
                                  className="px-6 py-2 rounded-lg border border-white text-white frame-hover hover:bg-white hover:text-black transition-colors"
                                >
                                  Enable 2FA
                                </button>
                                {is2FAInProgress && (
                                  <div className="mt-4 space-y-4">
                                    <p className="text-sm text-gray-400">
                                      Enter the verification code sent to your email:
                                    </p>
                                    <VerificationInput
                                      value={verificationCode}
                                      onChange={setVerificationCode}
                                      onComplete={verify2FA}
                                    />
                                  </div>
                                )}
                              </div>
                            ) : (
                              <div className="flex items-center space-x-4">
                                <span className="text-green-500">2FA is enabled</span>
                                <button
                                  className="px-4 py-2 border border-white rounded text-sm frame-hover hover:bg-white hover:text-black"
                                  onClick={() => setIs2FAEnabled(false)}
                                >
                                  Disable 2FA
                                </button>
                              </div>
                            )}
                          </div>

                          <div>
                            <h3 className="text-xl font-semibold mb-4">Backup Codes</h3>
                            <button
                              onClick={handleGenerateBackupCodes}
                              className="px-6 py-2 rounded-lg border border-white text-white frame-hover hover:bg-white hover:text-black transition-colors"
                              disabled={!is2FAEnabled}
                            >
                              Generate New Backup Codes
                            </button>
                            
                            {backupCodes.length > 0 && (
                              <div className="mt-4">
                                <p className="text-sm text-yellow-500 mb-2">
                                  Save these codes in a secure location. They will only be shown once!
                                </p>
                                <div className="grid grid-cols-2 gap-2">
                                  {backupCodes.map((code, index) => (
                                    <div
                                      key={index}
                                      className="font-mono bg-gray-900 p-2 rounded text-center frame-hover"
                                    >
                                      {code}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Account;