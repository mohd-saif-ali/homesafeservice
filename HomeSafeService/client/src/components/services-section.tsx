import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import type { Service } from "@shared/schema";

export default function ServicesSection() {
  const { data: services, isLoading } = useQuery<Service[]>({
    queryKey: ["/api/services"],
  });

  const handleBookService = (serviceCategory: string) => {
    const element = document.getElementById('book-service');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (isLoading) {
    return (
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-lg">Loading services...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4" data-testid="services-title">
            Book Our Service
          </h2>
          <p className="text-xl text-gray-600" data-testid="services-subtitle">
            Professional painting services with transparent pricing
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services?.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden"
              data-testid={`service-card-${service.category}`}
            >
              <img 
                src={service.image} 
                alt={service.name}
                className="w-full h-48 object-cover" 
                data-testid={`service-image-${service.category}`}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2" data-testid={`service-name-${service.category}`}>
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4" data-testid={`service-description-${service.category}`}>
                  {service.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span 
                    className="text-2xl font-bold text-brand-orange"
                    data-testid={`service-price-${service.category}`}
                  >
                    From ₹{service.priceFrom}/{service.unit}
                  </span>
                  <div className="flex items-center text-yellow-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span 
                      className="ml-1 text-sm text-gray-600"
                      data-testid={`service-rating-${service.category}`}
                    >
                      {(service.rating / 10).toFixed(1)} ({(service.reviewCount / 1000).toFixed(1)}k)
                    </span>
                  </div>
                </div>
                <Button 
                  onClick={() => handleBookService(service.category)}
                  className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white py-3 font-semibold"
                  data-testid={`button-book-${service.category}`}
                >
                  Book Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
