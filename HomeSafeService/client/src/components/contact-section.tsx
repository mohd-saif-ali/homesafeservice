import { useState } from "react";
import { Phone, Mail, MapPin, NotebookPen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import type { InsertContact } from "@shared/schema";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactSection() {
  const [formData, setFormData] = useState<InsertContact>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const { toast } = useToast();
  const queryClient = useQueryClient();

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you soon.",
      });
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      queryClient.invalidateQueries({ queryKey: ["/api/contact"] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+91 99081 27608",
      bgColor: "bg-brand-orange",
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      value: "+91 99081 27608",
      bgColor: "bg-brand-orange",
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@homesafeservice.com",
      bgColor: "bg-brand-orange",
    },
    {
      icon: MapPin,
      title: "Service Areas",
      value: "Hyderabad, Bangalore, Mumbai, Pune, Delhi, Chennai",
      bgColor: "bg-brand-orange",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-brand-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6" data-testid="contact-title">
              Get In Touch
            </h2>
            <p className="text-xl text-blue-100 mb-8" data-testid="contact-subtitle">
              Ready to transform your home? Contact us today for a free consultation and quote.
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center" data-testid={`contact-info-${index}`}>
                  <div className={`w-12 h-12 ${info.bgColor} rounded-full flex items-center justify-center mr-4`}>
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold" data-testid={`contact-title-${index}`}>
                      {info.title}
                    </h4>
                    <p className="text-blue-100" data-testid={`contact-value-${index}`}>
                      {info.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 text-gray-800">
            <h3 className="text-2xl font-bold mb-6" data-testid="contact-form-title">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input 
                  type="text" 
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                  data-testid="contact-input-name"
                />
                <Input 
                  type="email" 
                  placeholder="Email Address" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                  data-testid="contact-input-email"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input 
                  type="tel" 
                  placeholder="Phone Number" 
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                  data-testid="contact-input-phone"
                />
                <Select 
                  value={formData.service || ""} 
                  onValueChange={(value) => setFormData({ ...formData, service: value })}
                >
                  <SelectTrigger className="focus:ring-2 focus:ring-brand-orange focus:border-transparent" data-testid="contact-select-service">
                    <SelectValue placeholder="Select Service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="interior">Interior Painting</SelectItem>
                    <SelectItem value="exterior">Exterior Painting</SelectItem>
                    <SelectItem value="textures">Textures & Designs</SelectItem>
                    <SelectItem value="wallpaper">Wallpapers</SelectItem>
                    <SelectItem value="wood">Wood Finishes</SelectItem>
                    <SelectItem value="waterproofing">Waterproofing</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Textarea 
                placeholder="Your Message" 
                rows={4} 
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="focus:ring-2 focus:ring-brand-orange focus:border-transparent resize-none"
                data-testid="contact-textarea-message"
              />
              <Button 
                type="submit" 
                disabled={contactMutation.isPending}
                className="w-full bg-brand-orange hover:bg-orange-600 text-white py-4 text-lg font-semibold"
                data-testid="button-send-message"
              >
                <NotebookPen className="mr-2 h-5 w-5" />
                {contactMutation.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
