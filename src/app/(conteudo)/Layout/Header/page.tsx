'use client';
import { useState } from 'react';
import { Button } from '../../../components/ui/button';
import { UserIcon } from '@heroicons/react/24/solid';

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <header className={`bg-gray-900 text-white py-4 shadow-lg ${isDarkMode ? 'dark' : ''}`}>
      <div className="container mx-auto flex justify-end items-center">
        <div className="flex items-center space-x-6">
          <Button
            variant="outline"
            className="text-white border border-gray-500 rounded-full p-2"
            onClick={toggleTheme}
          >
            {isDarkMode ? '🌙' : '🌞'}
          </Button>
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-indigo-700 flex items-center justify-center bg-indigo-600">
            <UserIcon className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
    </header>
  );
}
