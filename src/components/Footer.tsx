import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import vapLogo from "@/assets/vap-logo.png";

const Footer = () => {
  return (
    <footer className="bg-vap-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img 
              src={vapLogo} 
              alt="Vehix Auto Parts" 
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-300 mb-4">
              Premium brake pads and rotors for luxury and high-end vehicles. 
              Your trusted partner for automotive excellence.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-vap-green">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-vap-green">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-vap-green">
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-vap-green-light">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-white transition-colors">Products</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Returns</a></li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-vap-green-light">Product Categories</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Brake Pads</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Brake Rotors</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">BMW Parts</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Mercedes Parts</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Audi Parts</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Luxury Vehicle Parts</a></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-vap-green-light">Stay Connected</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-vap-green" />
                <span className="text-gray-300">(777) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-vap-green" />
                <span className="text-gray-300">info@vehixautoparts.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 text-vap-green mt-1" />
                <span className="text-gray-300">
                  1 Main Street<br />
                   NY 12345, USA
                </span>
              </div>
            </div>

            <div>
              <h5 className="font-medium mb-2">Newsletter</h5>
              <p className="text-gray-300 text-sm mb-3">Get updates on new products and special offers</p>
              <div className="flex">
                <Input 
                  placeholder="Your email" 
                  className="rounded-r-none border-gray-600 bg-vap-gray text-white placeholder:text-gray-400"
                />
                <Button variant="hero" className="rounded-l-none">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-600 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Vehix Auto Parts. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Warranty</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;