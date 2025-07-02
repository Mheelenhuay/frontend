'use client';
import { useEffect } from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#1e1e1e] text-gray-400 px-6 py-10 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        
        {/* Logo / Brand */}
        <div>
          <h2 className="text-black text-2xl font-bold"></h2>
          <p className="text-sm mt-2">My Footer</p>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm">
          <div className="space-y-2">
            <a href="/about" className="hover:text-white transition">About</a><br />
            <a href="/contact" className="hover:text-white transition">Contact</a>
          </div>
          <div className="space-y-2">
            <a href="/service" className="hover:text-white transition">Services</a><br />
            <a href="/privacy" className="hover:text-white transition">Privacy</a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Pattarasai Jaipong. All rights reserved.
      </div>
    </footer>
  );
}

