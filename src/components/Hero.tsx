import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Truck, Award, Clock } from "lucide-react";
import heroImage from "@/assets/hero-brake-parts.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Hero Background */}
      <div className="relative h-[70vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-vap-dark/90 to-vap-dark/50"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Premium Brake Parts for 
              <span className="text-vap-green-light block">Luxury Vehicles</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Professional-grade brake pads and rotors designed for high-end performance and safety.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl">
                Shop Now
              </Button>
              <Button variant="outline-green" size="xl">
                Find My Parts
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Bar */}
      <div className="bg-white py-12 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Shield className="w-12 h-12 text-vap-green mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Premium Quality</h3>
              <p className="text-gray-600">OEM and aftermarket parts from trusted brands</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Truck className="w-12 h-12 text-vap-green mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Fast Shipping</h3>
              <p className="text-gray-600">Free shipping on orders over $199</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Award className="w-12 h-12 text-vap-green mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Expert Support</h3>
              <p className="text-gray-600">Professional guidance for your specific vehicle</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Clock className="w-12 h-12 text-vap-green mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Quick Delivery</h3>
              <p className="text-gray-600">Same-day processing for in-stock items</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;