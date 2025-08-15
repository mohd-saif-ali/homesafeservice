import { Star } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { Testimonial } from "@shared/schema";

export default function TestimonialsSection() {
  const { data: testimonials, isLoading } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  if (isLoading) {
    return (
      <section id="reviews" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-lg">Loading testimonials...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4" data-testid="testimonials-title">
            What <span className="text-brand-orange">People Say</span>
          </h2>
          <div className="flex items-center justify-center mb-4">
            <div className="flex text-yellow-400 text-2xl mr-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-current" />
              ))}
            </div>
            <span className="text-3xl font-bold text-gray-800" data-testid="overall-rating">
              4.6/5 Rating
            </span>
          </div>
          <p className="text-xl text-gray-600" data-testid="reviews-count">
            Based on 8,000+ Google Reviews
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials?.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-2xl p-6 shadow-lg"
              data-testid={`testimonial-${testimonial.id}`}
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"} 
                  alt={`${testimonial.customerName} profile`}
                  className="w-12 h-12 rounded-full mr-4" 
                  data-testid={`avatar-${testimonial.id}`}
                />
                <div>
                  <h4 className="font-semibold text-gray-800" data-testid={`name-${testimonial.id}`}>
                    {testimonial.customerName}
                  </h4>
                  <p className="text-sm text-gray-600" data-testid={`date-${testimonial.id}`}>
                    {testimonial.date}
                  </p>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-gray-700" data-testid={`text-${testimonial.id}`}>
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
