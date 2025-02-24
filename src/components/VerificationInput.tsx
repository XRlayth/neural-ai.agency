import React, { useRef, useState, useEffect } from 'react';

interface VerificationInputProps {
  value: string;
  onChange: (value: string) => void;
  onComplete?: (value: string) => void;
}

function VerificationInput({ value, onChange, onComplete }: VerificationInputProps) {
  const [digits, setDigits] = useState<string[]>(Array(6).fill(''));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    // Update digits when value changes externally
    const newDigits = value.split('').slice(0, 6);
    setDigits([...newDigits, ...Array(6 - newDigits.length).fill('')]);
  }, [value]);

  const handleChange = (index: number, digit: string) => {
    if (!/^\d*$/.test(digit)) return;

    const newDigits = [...digits];
    newDigits[index] = digit;
    setDigits(newDigits);

    const newValue = newDigits.join('');
    onChange(newValue);

    // Move to next input if digit entered
    if (digit && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    // Check if all digits are filled
    if (newDigits.every(d => d) && onComplete) {
      onComplete(newValue);
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !digits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    const newDigits = [...pastedData.split(''), ...Array(6 - pastedData.length).fill('')];
    setDigits(newDigits);
    onChange(pastedData);
    
    if (pastedData.length === 6 && onComplete) {
      onComplete(pastedData);
    }
  };

  return (
    <div className="flex gap-2 justify-center">
      {digits.map((digit, index) => (
        <input
          key={index}
          ref={el => inputRefs.current[index] = el}
          type="text"
          maxLength={1}
          value={digit}
          onChange={e => handleChange(index, e.target.value)}
          onKeyDown={e => handleKeyDown(index, e)}
          onPaste={handlePaste}
          className="w-12 h-12 text-center text-xl bg-black border border-white rounded-lg focus:outline-none focus:border-white text-white"
        />
      ))}
    </div>
  );
}

export default VerificationInput;