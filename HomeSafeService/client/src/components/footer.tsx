import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  const serviceLinks = [
    "Interior Painting",
    "Exterior Painting", 
    "Textures & Designs",
    "Wallpapers",
    "Wood Finishes",
    "Waterproofing",
  ];

  const cityLinks = [
    "Hyderabad",
    "Bangalore",
    "Mumbai",
    "Pune",
    "Delhi",
    "Chennai",
  ];

  const quickLinks = [
    "About Us",
    "Paint Calculator",
    "Career",
    "Privacy Policy",
    "Terms & Conditions",
    "Contact Us",
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4" data-testid="footer-brand">
              HomeSafe<span className="text-brand-orange">Service</span>
            </h3>
            <p className="text-gray-400 mb-6" data-testid="footer-description">
              Professional painting and home renovation services across major Indian cities. Transform your space with quality and trust.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
                  aria-label={social.label}
                  data-testid={`social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="h-5 w-5 text-white" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4" data-testid="footer-services-title">
              Services
            </h4>
            <ul className="space-y-2 text-gray-400">
              {serviceLinks.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="hover:text-white transition-colors"
                    data-testid={`footer-service-${index}`}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4" data-testid="footer-cities-title">
              Cities
            </h4>
            <ul className="space-y-2 text-gray-400">
              {cityLinks.map((city, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="hover:text-white transition-colors"
                    data-testid={`footer-city-${index}`}
                  >
                    {city}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4" data-testid="footer-links-title">
              Quick Links
            </h4>
            <ul className="space-y-2 text-gray-400">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="hover:text-white transition-colors"
                    data-testid={`footer-link-${index}`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p data-testid="footer-copyright">
            &copy; 2025 HomeSafeService. All rights reserved. | Designed with care for your home.
          </p>
        </div>
      </div>
    </footer>
  );
}
