import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get initial session
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setIsAuthenticated(!!session);
      setUser(session?.user || null);
      setLoading(false);
    };
    
    getSession();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthenticated(!!session);
      setUser(session?.user || null);
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const signIn = async (emailOrUsername: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email: emailOrUsername,
      password,
    });
    return { error };
  };

  const signUp = async (email: string, password: string, username: string) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username,
          password: password // Store first 3 characters for display
        },
        emailRedirectTo: `${window.location.origin}/verify`,
      },
    });
    return { error };
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    return { error };
  };

  const resetPasswordWithEmail = async (email: string) => {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    return { error };
  };

  const resetPasswordWithBackupCode = async (code: string) => {
    const { error } = await supabase.auth.verifyOtp({
      token: code,
      type: 'recovery',
    });
    return { error };
  };

  const enable2FA = async () => {
    const { error } = await supabase.auth.mfa.enroll({
      factorType: 'totp',
    });
    return { error };
  };

  const generateBackupCodes = async () => {
    const { data, error } = await supabase.auth.mfa.generateRecoveryCodes();
    if (error) throw error;
    return data.codes;
  };

  return {
    isAuthenticated,
    user,
    loading,
    signIn,
    signUp,
    signOut,
    resetPasswordWithEmail,
    resetPasswordWithBackupCode,
    enable2FA,
    generateBackupCodes,
  };
}