import React from 'react';

export default function Footer() {
  return (
    <footer className="py-12 text-sm text-gray-500">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex justify-center items-center">
        <p className="text-xs text-gray-500 font-mono tracking-wide">
          © {new Date().getFullYear()} Riman Maharjan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
