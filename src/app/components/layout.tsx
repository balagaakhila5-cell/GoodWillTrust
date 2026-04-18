import { Outlet, Link, useLocation } from "react-router";
import { Heart, Menu, X, Mail, Phone, MapPin, Clock, ArrowUp, Send } from "lucide-react";
import { useState } from "react";
import logoImage from "../../assets/f9167796afb9df53690829463a054a221524b030.png";
import { ScrollToTop } from "./scroll-to-top";
import { WhatsAppButton } from "./whatsapp-button";

const Facebook = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const Instagram = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);
const Twitter = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);
const Linkedin = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/activities", label: "Activities" },
    { path: "/gallery", label: "Gallery" },
    { path: "/contact", label: "Contact" },
  ];

  const donateLink = { path: "/donate", label: "Donate" };

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-white text-primary sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img src={logoImage} alt="Good Will Trust Logo" className="h-14 w-14" />
              <div className="hidden sm:block">
                <div className="text-xl font-semibold text-primary">Good Will Trust</div>
                <div className="text-xs text-secondary">Empowering Abilities</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    isActive(link.path)
                      ? "bg-primary text-white shadow-sm"
                      : "text-primary/80 hover:bg-primary/5 hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              {/* Highlighted Donate Button */}
              <Link
                to={donateLink.path}
                className={`donate-btn-animate ml-2 px-5 py-2 rounded-lg font-semibold transition-all flex items-center gap-2 hover:scale-105 ${
                  isActive(donateLink.path)
                    ? "bg-gradient-to-r from-[#ff6b6b] to-[#ee5a6f] text-white"
                    : "bg-gradient-to-r from-[#4DA3FF] to-[#3d8fe6] text-white hover:from-[#3d8fe6] hover:to-[#2d7fd0]"
                }`}
              >
                <Heart size={18} className="fill-current" />
                {donateLink.label}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-primary/5 transition-colors text-primary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                    isActive(link.path)
                      ? "bg-primary text-white shadow-sm"
                      : "text-primary/80 hover:bg-primary/5 hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              {/* Highlighted Donate Button for Mobile */}
              <Link
                to={donateLink.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`donate-btn-animate flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold transition-all ${
                  isActive(donateLink.path)
                    ? "bg-gradient-to-r from-[#ff6b6b] to-[#ee5a6f] text-white"
                    : "bg-gradient-to-r from-[#4DA3FF] to-[#3d8fe6] text-white hover:from-[#3d8fe6] hover:to-[#2d7fd0]"
                }`}
              >
                <Heart size={18} className="fill-current" />
                {donateLink.label}
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t-4 border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* About Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <img src={logoImage} alt="Good Will Trust Logo" className="h-16 w-16" />
                <div>
                  <div className="font-bold text-lg text-primary">Good Will Trust</div>
                  <div className="text-sm text-secondary">Empowering Abilities</div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Dedicated to empowering people with disabilities through support, education, and community programs that create lasting positive change.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg text-primary mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link 
                    to="/" 
                    className="text-muted-foreground hover:text-primary transition-all hover:translate-x-1 inline-block group relative"
                  >
                    <span className="relative">
                      Home
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/about" 
                    className="text-muted-foreground hover:text-primary transition-all hover:translate-x-1 inline-block group relative"
                  >
                    <span className="relative">
                      About Us
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/activities" 
                    className="text-muted-foreground hover:text-primary transition-all hover:translate-x-1 inline-block group relative"
                  >
                    <span className="relative">
                      Activities
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/donate" 
                    className="text-muted-foreground hover:text-primary transition-all hover:translate-x-1 inline-block group relative"
                  >
                    <span className="relative">
                      Donate
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/gallery" 
                    className="text-muted-foreground hover:text-primary transition-all hover:translate-x-1 inline-block group relative"
                  >
                    <span className="relative">
                      Gallery
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/contact" 
                    className="text-muted-foreground hover:text-primary transition-all hover:translate-x-1 inline-block group relative"
                  >
                    <span className="relative">
                      Contact
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="font-bold text-lg text-primary mb-6">Contact Info</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-muted-foreground group">
                  <MapPin size={20} className="text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="leading-relaxed">16-1-17/17<br />Poosala Basti<br />Saidabad,<br />Hyderabad</span>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground group">
                  <Phone size={20} className="text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <a href="tel:+918309337196" className="hover:text-primary transition-colors">+91 830 933 7196</a>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground group">
                  <Mail size={20} className="text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <a href="mailto:goodwilltrust01@gmail.com" className="hover:text-primary transition-colors">goodwilltrust01@gmail.com</a>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground group">
                  <Clock size={20} className="text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="leading-relaxed">Mon - Fri: 9:00 AM - 6:00 PM<br />Sat: 10:00 AM - 4:00 PM</span>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h3 className="font-bold text-lg text-primary mb-6">Follow Us</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Stay connected with us on social media for updates and inspiring stories.
              </p>
              <div className="flex gap-3">
                <a 
                  href="https://www.facebook.com/share/18ee63o6Yv/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-br from-primary/10 to-primary/5 hover:from-primary hover:to-primary text-primary hover:text-white p-3 rounded-xl transition-all hover:shadow-lg hover:scale-110 group"
                  aria-label="Facebook"
                >
                  <Facebook size={24} />
                </a>
                <a 
                  href="https://www.instagram.com/goodwilltrusts?igsh=Z2ZzN3JtdXJ1MnAz" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-br from-primary/10 to-primary/5 hover:from-[#E4405F] hover:to-[#C13584] text-primary hover:text-white p-3 rounded-xl transition-all hover:shadow-lg hover:scale-110 group"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
                <a 
                  href="#" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-br from-primary/10 to-primary/5 hover:from-[#1DA1F2] hover:to-[#0d8bd9] text-primary hover:text-white p-3 rounded-xl transition-all hover:shadow-lg hover:scale-110 group"
                  aria-label="Twitter"
                >
                  <Twitter size={24} />
                </a>
                <a 
                  href="https://www.linkedin.com/company/goodwilltrust"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-br from-primary/10 to-primary/5 hover:from-[#0077B5] hover:to-[#005885] text-primary hover:text-white p-3 rounded-xl transition-all hover:shadow-lg hover:scale-110 group"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              &copy; 2026 Good Will Trust - Empowering Abilities. All rights reserved. Development and maintenance by Panacea IT Services.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-primary text-white p-3 rounded-xl hover:bg-primary/90 transition-all hover:shadow-lg hover:scale-110 group"
              aria-label="Back to top"
            >
              <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </footer>
      <ScrollToTop />
      <WhatsAppButton />
    </div>
  );
}