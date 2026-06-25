import { useState } from "react";
import { Search, Menu, X, ShoppingCart, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import vapLogo from "@/assets/vap-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-vap-dark text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span>📍 45 W John Street Unit B, Hicksville, NY 11801</span>
            <span className="hidden md:inline">🚚 Free Shipping on Orders Over $199</span>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="w-4 h-4" />
            <span>(516) 470-1788</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src={vapLogo} 
                alt="Vehix Auto Parts" 
                className="h-12 w-auto"
              />
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-xl mx-8">
              <div className="relative w-full">
                <Input
                  type="text"
                  placeholder="Search by part number, brand, or vehicle..."
                  className="w-full pl-4 pr-12 py-3 border-2 border-gray-200 focus:border-vap-green"
                />
                <Button 
                  variant="hero" 
                  size="sm"
                  className="absolute right-1 top-1/2 -translate-y-1/2"
                >
                  <Search className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Navigation & Cart - Desktop */}
            <div className="hidden lg:flex items-center space-x-6">
              <nav className="flex space-x-6">
                <a href="#home" className="text-gray-700 hover:text-vap-green font-medium">
                  Home
                </a>
                <a href="#products" className="text-gray-700 hover:text-vap-green font-medium">
                  Products
                </a>
                <a href="#about" className="text-gray-700 hover:text-vap-green font-medium">
                  About
                </a>
                <a href="#contact" className="text-gray-700 hover:text-vap-green font-medium">
                  Contact
                </a>
              </nav>
              
              <Button variant="outline-green" size="sm" className="relative">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Cart
                <span className="absolute -top-2 -right-2 bg-vap-green text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>

          {/* Mobile Search */}
          <div className="md:hidden pb-4">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search parts..."
                className="w-full pl-4 pr-12 py-2 border-2 border-gray-200 focus:border-vap-green"
              />
              <Button 
                variant="hero" 
                size="sm"
                className="absolute right-1 top-1/2 -translate-y-1/2"
              >
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t bg-white">
            <div className="px-4 py-2 space-y-2">
              <a href="#home" className="block py-2 text-gray-700 hover:text-vap-green font-medium">
                Home
              </a>
              <a href="#products" className="block py-2 text-gray-700 hover:text-vap-green font-medium">
                Products
              </a>
              <a href="#about" className="block py-2 text-gray-700 hover:text-vap-green font-medium">
                About
              </a>
              <a href="#contact" className="block py-2 text-gray-700 hover:text-vap-green font-medium">
                Contact
              </a>
              <Button variant="outline-green" size="sm" className="w-full mt-4">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Cart (0)
              </Button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;