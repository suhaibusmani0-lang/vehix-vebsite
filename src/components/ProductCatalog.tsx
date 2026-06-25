import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Filter, Search, ShoppingCart, Star } from "lucide-react";

// Mock data for demonstration
const mockProducts = [
  {
    id: 1,
    name: "Premium Ceramic Brake Pads",
    brand: "Brembo",
    model: "BMW 5 Series",
    partNumber: "P06077N",
    price: 189.99,
    originalPrice: 229.99,
    rating: 4.8,
    reviews: 124,
    inStock: true,
    category: "brake-pads",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop"
  },
  {
    id: 2,
    name: "Performance Brake Rotors",
    brand: "StopTech",
    model: "Mercedes C-Class",
    partNumber: "ST126.35113",
    price: 299.99,
    originalPrice: 349.99,
    rating: 4.9,
    reviews: 89,
    inStock: true,
    category: "rotors",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop"
  },
  {
    id: 3,
    name: "High-Carbon Brake Rotors",
    brand: "EBC",
    model: "Audi A4",
    partNumber: "RK7584",
    price: 159.99,
    originalPrice: null,
    rating: 4.7,
    reviews: 203,
    inStock: false,
    category: "rotors",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop"
  },
  // Add more mock products as needed
];

const ProductCatalog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [brandFilter, setBrandFilter] = useState("");
  const [modelFilter, setModelFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  const filteredProducts = mockProducts.filter(product => {
    return (
      (searchTerm === "" || 
       product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
       product.partNumber.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (brandFilter === "" || brandFilter === "all-brands" || product.brand === brandFilter) &&
      (modelFilter === "" || modelFilter === "all-models" || product.model === modelFilter) &&
      (categoryFilter === "" || categoryFilter === "all-parts" || product.category === categoryFilter)
    );
  });

  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Premium Product Catalog
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find the perfect brake pads and rotors for your luxury vehicle with our advanced filtering system.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search by part number or product name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <Select value={brandFilter} onValueChange={setBrandFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Brand" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-brands">All Brands</SelectItem>
                <SelectItem value="BMW">BMW</SelectItem>
                <SelectItem value="Audi">Audi</SelectItem>
                <SelectItem value="Mercedes">Mercedes</SelectItem>
                <SelectItem value="Brembo">Brembo</SelectItem>
                <SelectItem value="StopTech">StopTech</SelectItem>
                <SelectItem value="EBC">EBC</SelectItem>
              </SelectContent>
            </Select>

            <Select value={modelFilter} onValueChange={setModelFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Vehicle Model" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-models">All Models</SelectItem>
                <SelectItem value="BMW 5 Series">BMW 5 Series</SelectItem>
                <SelectItem value="Mercedes C-Class">Mercedes C-Class</SelectItem>
                <SelectItem value="Audi A4">Audi A4</SelectItem>
              </SelectContent>
            </Select>

            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Part Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-parts">All Parts</SelectItem>
                <SelectItem value="brake-pads">Brake Pads</SelectItem>
                <SelectItem value="rotors">Brake Rotors</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button variant="outline-green" size="sm" className="w-full md:w-auto">
            <Filter className="w-4 h-4 mr-2" />
            Advanced Filters
          </Button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <div className="relative mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-md group-hover:scale-105 transition-transform"
                  />
                  {!product.inStock && (
                    <Badge variant="destructive" className="absolute top-2 left-2">
                      Out of Stock
                    </Badge>
                  )}
                  {product.originalPrice && (
                    <Badge variant="secondary" className="absolute top-2 right-2">
                      Sale
                    </Badge>
                  )}
                </div>

                <h3 className="font-semibold text-lg mb-2 group-hover:text-vap-green transition-colors">
                  {product.name}
                </h3>
                
                <div className="space-y-1 text-sm text-gray-600 mb-3">
                  <p><span className="font-medium">Brand:</span> {product.brand}</p>
                  <p><span className="font-medium">Fits:</span> {product.model}</p>
                  <p><span className="font-medium">Part #:</span> {product.partNumber}</p>
                </div>

                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm font-medium">{product.rating}</span>
                    <span className="ml-1 text-sm text-gray-500">({product.reviews})</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-vap-green">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="ml-2 text-sm text-gray-500 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>

              <CardFooter className="p-4 pt-0">
                <Button 
                  variant={product.inStock ? "hero" : "secondary"} 
                  className="w-full"
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  {product.inStock ? "Add to Cart" : "Request Quote"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Request Form CTA */}
        <div className="bg-vap-green text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Can't Find What You're Looking For?</h3>
          <p className="text-lg mb-6 opacity-90">
            Our experts can help you find the exact parts you need for your vehicle.
          </p>
          <Button variant="automotive" size="lg">
            Request Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;