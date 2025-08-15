import { Shield, Users, Clock, DollarSign, Wrench, Headphones } from "lucide-react";

export default function WhyChooseSection() {
  const benefits = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Premium quality paints and materials with 100% satisfaction guarantee",
      bgColor: "bg-brand-orange/10",
      iconColor: "text-brand-orange",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled and experienced painters with years of expertise in the field",
      bgColor: "bg-brand-blue/10",
      iconColor: "text-brand-blue",
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Projects completed on time without compromising on quality standards",
      bgColor: "bg-brand-orange/10",
      iconColor: "text-brand-orange",
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "No hidden costs with detailed quotations and competitive pricing",
      bgColor: "bg-brand-blue/10",
      iconColor: "text-brand-blue",
    },
    {
      icon: Wrench,
      title: "Professional Tools",
      description: "Latest equipment and techniques for superior painting results",
      bgColor: "bg-brand-orange/10",
      iconColor: "text-brand-orange",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock customer support for all your queries and concerns",
      bgColor: "bg-brand-blue/10",
      iconColor: "text-brand-blue",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4" data-testid="why-choose-title">
            Why Choose <span className="text-brand-orange">Us</span>
          </h2>
          <p className="text-xl text-gray-600" data-testid="why-choose-subtitle">
            Celebrate Quality, Trust, and Craftsmanship with Us
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center" data-testid={`benefit-${index}`}>
              <div className={`w-20 h-20 ${benefit.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <benefit.icon className={`${benefit.iconColor} h-10 w-10`} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4" data-testid={`benefit-title-${index}`}>
                {benefit.title}
              </h3>
              <p className="text-gray-600" data-testid={`benefit-description-${index}`}>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
