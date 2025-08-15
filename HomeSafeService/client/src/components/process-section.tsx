import { CalendarCheck, Search, Palette, FileText, PaintBucket, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProcessSection() {
  const processSteps = [
    {
      number: 1,
      icon: CalendarCheck,
      title: "Book Site Visit",
      description: "Schedule a free site inspection with our painting experts",
    },
    {
      number: 2,
      icon: Search,
      title: "Site Inspection",
      description: "Detailed assessment of your space and painting requirements",
    },
    {
      number: 3,
      icon: Palette,
      title: "Color Consultation",
      description: "Expert guidance on color selection and design options",
    },
    {
      number: 4,
      icon: FileText,
      title: "Quote & Approval",
      description: "Transparent pricing with detailed quotation for your approval",
    },
    {
      number: 5,
      icon: PaintBucket,
      title: "Professional Painting",
      description: "Skilled painters execute the work with precision and care",
    },
    {
      number: 6,
      icon: ThumbsUp,
      title: "Quality Check",
      description: "Final inspection and cleanup for your complete satisfaction",
    },
  ];

  const scrollToBooking = () => {
    const element = document.getElementById('book-service');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4" data-testid="process-title">
            How <span className="text-brand-orange">It Works</span>
          </h2>
          <p className="text-xl text-gray-600" data-testid="process-subtitle">
            HomeSafeService will help renovate your house in 6 simple steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step) => (
            <div 
              key={step.number} 
              className="bg-white rounded-2xl p-8 shadow-lg text-center relative"
              data-testid={`process-step-${step.number}`}
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-brand-orange text-white rounded-full flex items-center justify-center font-bold">
                {step.number}
              </div>
              <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4 mt-4">
                <step.icon className="h-8 w-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3" data-testid={`step-title-${step.number}`}>
                {step.title}
              </h3>
              <p className="text-gray-600" data-testid={`step-description-${step.number}`}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            onClick={scrollToBooking}
            className="bg-brand-orange hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold shadow-lg"
            data-testid="button-book-inspection"
          >
            <CalendarCheck className="mr-2 h-5 w-5" />
            Book Site Inspection
          </Button>
        </div>
      </div>
    </section>
  );
}
