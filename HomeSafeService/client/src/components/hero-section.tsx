import { useState } from "react";
import { CalendarCheck, Calculator, MapPin, NotebookPen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Link } from "wouter";
import type { InsertBooking } from "@shared/schema";

export default function HeroSection() {
  const [formData, setFormData] = useState<InsertBooking>({
    name: "",
    phone: "",
    city: "",
    requirements: "",
  });

  const { toast } = useToast();
  const queryClient = useQueryClient();

  const bookingMutation = useMutation({
    mutationFn: async (data: InsertBooking) => {
      const response = await apiRequest("POST", "/api/bookings", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Booking Submitted!",
        description: "We'll contact you soon to schedule your site visit.",
      });
      setFormData({ name: "", phone: "", city: "", requirements: "" });
      queryClient.invalidateQueries({ queryKey: ["/api/bookings"] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit booking. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.city) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    bookingMutation.mutate(formData);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/90 to-brand-blue-dark/80"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-4">
              <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center mr-3">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <span className="text-brand-orange-light text-lg font-medium" data-testid="hero-city">Hyderabad</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6" data-testid="hero-title">
              House Painting Services in <span className="text-brand-orange">Hyderabad</span> by Expert Painters
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed" data-testid="hero-description">
              Transform your home with a fresh coat of paint! Hire the best painters in Hyderabad and give your space a fresh, new look! Trust our skilled painters to bring your walls to life with precision and care.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('book-service')}
                className="bg-brand-orange hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold shadow-lg"
                data-testid="button-book-site-visit"
              >
                <CalendarCheck className="mr-2 h-5 w-5" />
                Book Site Visit
              </Button>
              <Link href="/paint-calculator">
                <Button 
                  variant="outline"
                  className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-brand-blue px-8 py-4 text-lg font-semibold transition-all"
                  data-testid="button-paint-calculator"
                >
                  <Calculator className="mr-2 h-5 w-5" />
                  Paint Calculator
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl" id="book-service">
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-6" data-testid="booking-form-title">
              Book Site Inspection
            </h3>
            <p className="text-gray-600 text-center mb-6" data-testid="booking-form-subtitle">
              Get a thorough Site Inspection and Colour Consultation from Our Experts
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-4">
                <Input 
                  type="text" 
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full h-12 text-base focus:ring-2 focus:ring-brand-orange focus:border-transparent bg-white border border-gray-300"
                  data-testid="input-name"
                />
                <Input 
                  type="tel" 
                  placeholder="Phone Number" 
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full h-12 text-base focus:ring-2 focus:ring-brand-orange focus:border-transparent bg-white border border-gray-300"
                  data-testid="input-phone"
                />
              </div>
              
              <Select 
                value={formData.city} 
                onValueChange={(value) => setFormData({ ...formData, city: value })}
              >
                <SelectTrigger className="w-full h-12 text-base focus:ring-2 focus:ring-brand-orange focus:border-transparent bg-white border border-gray-300" data-testid="select-city">
                  <SelectValue placeholder="Select City" />
                </SelectTrigger>
                <SelectContent className="bg-white border border-gray-300 shadow-lg">
                  <SelectItem value="hyderabad">Hyderabad</SelectItem>
                  <SelectItem value="bangalore">Bangalore</SelectItem>
                  <SelectItem value="mumbai">Mumbai</SelectItem>
                  <SelectItem value="pune">Pune</SelectItem>
                  <SelectItem value="delhi">Delhi</SelectItem>
                  <SelectItem value="chennai">Chennai</SelectItem>
                  <SelectItem value="kolkata">Kolkata</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              
              <Textarea 
                placeholder="Brief description of your requirements" 
                rows={4} 
                value={formData.requirements || ""}
                onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                className="w-full text-base focus:ring-2 focus:ring-brand-orange focus:border-transparent resize-none bg-white border border-gray-300 p-3"
                data-testid="textarea-requirements"
              />
              
              <Button 
                type="submit" 
                disabled={bookingMutation.isPending}
                className="w-full bg-brand-orange hover:bg-orange-600 text-white py-4 text-lg font-semibold"
                data-testid="button-submit-booking"
              >
                <NotebookPen className="mr-2 h-5 w-5" />
                {bookingMutation.isPending ? "Submitting..." : "Book Free Site Visit"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
