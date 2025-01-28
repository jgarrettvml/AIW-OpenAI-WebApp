import React from 'react';
import { Home, HelpCircle } from 'lucide-react';

export function BottomMenu() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-blue-900/90 backdrop-blur-md border-t border-blue-800 py-2 px-4">
      <div className="max-w-4xl mx-auto flex justify-between items-center gap-2">
        <button className="flex-1 bg-gradient-to-b from-blue-700 to-blue-800 px-2 py-2 sm:px-4 sm:py-3 rounded-xl text-gray-200 font-medium shadow-lg hover:from-blue-600 hover:to-blue-700 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-1 sm:gap-2">
          <Home className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-sm sm:text-base">Button 1</span>
        </button>
        
        <button className="flex-[1.2] bg-gradient-to-b from-blue-500 to-blue-600 px-3 py-3 sm:px-6 sm:py-4 rounded-xl text-white font-semibold shadow-lg hover:from-blue-400 hover:to-blue-500 transition-all transform hover:-translate-y-1 active:translate-y-0 text-sm sm:text-base">
          Button 2
        </button>
        
        <button className="flex-1 bg-gradient-to-b from-blue-700 to-blue-800 px-2 py-2 sm:px-4 sm:py-3 rounded-xl text-gray-200 font-medium shadow-lg hover:from-blue-600 hover:to-blue-700 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-1 sm:gap-2">
          <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-sm sm:text-base">Button 3</span>
        </button>
      </div>
    </div>
  );
}