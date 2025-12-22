import React from 'react';
import { Globe, Package, Phone, Mail, Facebook, Twitter, Linkedin, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 font-sans">
      {/* Top Section: Quick Tracking / Newsletter */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="bg-orange-500 p-3 rounded-lg">
              <Package className="text-white" size={28} />
            </div>
            <div>
              <h3 className="text-white text-xl font-bold">Track Your Shipment</h3>
              <p className="text-sm">Enter your tracking ID for real-time updates.</p>
            </div>
          </div>
          
          <div className="flex w-full md:w-96">
            <input 
              type="text" 
              placeholder="Ex: #EXP-99210-HK" 
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-l-md focus:outline-none focus:border-orange-500 transition-colors"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-r-md font-bold transition-colors flex items-center">
              TRACK <ArrowRight size={18} className="ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Company Info */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Globe className="text-orange-500" size={32} />
            <span className="text-white text-2xl font-extrabold tracking-tight">GLOBAL<span className="text-orange-500">EX</span></span>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            Connecting continents and delivering excellence since 1998. Your trusted partner for international air freight, ocean logistics, and express courier services.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-orange-500 transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-orange-500 transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-orange-500 transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Our Services</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Express Courier</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Air Freight Forwarding</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Ocean Cargo</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Warehousing & Distribution</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Customs Clearance</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Support Center</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Shipping Rates</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Fuel Surcharge</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Prohibited Items</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Claim Submission</a></li>
            <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="text-orange-500 shrink-0" size={18} />
              <p>122 Terminal Blvd, Logistics Park, <br />Dubai, UAE - 44092</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-orange-500 shrink-0" size={18} />
              <p>+1 (800) GLOBAL-EX</p>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-orange-500 shrink-0" size={18} />
              <p>support@global-express.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="bg-slate-950 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2024 Global Express Logistics Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookie Settings</a>
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;