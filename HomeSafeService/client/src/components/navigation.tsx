import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-brand-blue">
                HomeSafe<span className="text-brand-orange">Service</span>
              </h1>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-brand-blue px-3 py-2 text-sm font-medium transition-colors"
                data-testid="nav-services"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-gray-700 hover:text-brand-blue px-3 py-2 text-sm font-medium transition-colors"
                data-testid="nav-how-it-works"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('reviews')}
                className="text-gray-700 hover:text-brand-blue px-3 py-2 text-sm font-medium transition-colors"
                data-testid="nav-reviews"
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-brand-blue px-3 py-2 text-sm font-medium transition-colors"
                data-testid="nav-contact"
              >
                Contact
              </button>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-brand-orange" />
                <span className="text-gray-700" data-testid="nav-phone">+91 99081 27608</span>
              </div>
            </div>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-brand-blue"
              data-testid="mobile-menu-button"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection('services')}
                className="block text-gray-700 hover:text-brand-blue px-3 py-2 text-base font-medium w-full text-left"
                data-testid="mobile-nav-services"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="block text-gray-700 hover:text-brand-blue px-3 py-2 text-base font-medium w-full text-left"
                data-testid="mobile-nav-how-it-works"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('reviews')}
                className="block text-gray-700 hover:text-brand-blue px-3 py-2 text-base font-medium w-full text-left"
                data-testid="mobile-nav-reviews"
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-gray-700 hover:text-brand-blue px-3 py-2 text-base font-medium w-full text-left"
                data-testid="mobile-nav-contact"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
