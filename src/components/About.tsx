import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Users, Clock, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Vehix Auto Parts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner for premium brake components serving luxury vehicle owners across the United States.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Excellence in Automotive Parts Since Day One
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Located in the heart of Hicksville, NY, Vehix Auto Parts has established itself as a premier 
                supplier of high-quality brake pads and rotors specifically designed for luxury and high-end vehicles. 
                Our commitment to excellence drives everything we do.
              </p>
              <p>
                We understand that luxury vehicle owners demand the highest standards of performance and safety. 
                That's why we partner exclusively with leading manufacturers like Brembo, StopTech, EBC, and other 
                industry leaders to ensure every component meets or exceeds OEM specifications.
              </p>
              <p>
                Our expert team combines decades of automotive experience with cutting-edge technology to help 
                you find the perfect brake components for your specific vehicle, ensuring optimal performance 
                and safety on every drive.
              </p>
            </div>
            <div className="mt-8">
              <Button variant="hero" size="lg">
                Learn More About Our Process
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Shield className="w-12 h-12 text-vap-green mx-auto mb-4" />
              <h4 className="font-semibold text-lg mb-2">Quality Assured</h4>
              <p className="text-gray-600 text-sm">
                Every part rigorously tested for performance and durability
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Users className="w-12 h-12 text-vap-green mx-auto mb-4" />
              <h4 className="font-semibold text-lg mb-2">Expert Support</h4>
              <p className="text-gray-600 text-sm">
                Professional guidance from certified automotive specialists
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Clock className="w-12 h-12 text-vap-green mx-auto mb-4" />
              <h4 className="font-semibold text-lg mb-2">Fast Delivery</h4>
              <p className="text-gray-600 text-sm">
                Quick processing and nationwide shipping across the USA
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Award className="w-12 h-12 text-vap-green mx-auto mb-4" />
              <h4 className="font-semibold text-lg mb-2">Trusted Brands</h4>
              <p className="text-gray-600 text-sm">
                Partnerships with industry-leading manufacturers
              </p>
            </Card>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-vap-dark text-white rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-vap-green-light mb-2">50,000+</div>
              <div className="text-lg">Parts Shipped</div>
              <div className="text-sm opacity-75">Across the United States</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-vap-green-light mb-2">15+</div>
              <div className="text-lg">Premium Brands</div>
              <div className="text-sm opacity-75">Industry-leading manufacturers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-vap-green-light mb-2">99.8%</div>
              <div className="text-lg">Customer Satisfaction</div>
              <div className="text-sm opacity-75">Based on verified reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;