import { PaintBucket, Users, Star, Palette } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      icon: PaintBucket,
      value: "115M+",
      label: "Sqft painted",
      bgColor: "bg-brand-orange",
    },
    {
      icon: Users,
      value: "41K+",
      label: "Happy Customers",
      bgColor: "bg-brand-blue",
    },
    {
      icon: Star,
      value: "4.6",
      label: "8K+ Google Reviews",
      bgColor: "bg-brand-orange",
    },
    {
      icon: Palette,
      value: "2M+",
      label: "Crafted Designs",
      bgColor: "bg-brand-blue",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4" data-testid="stats-title">
            What We Have Offered
          </h2>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center" data-testid={`stat-${index}`}>
              <div className={`w-16 h-16 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div 
                className={`text-4xl font-bold mb-2 ${index % 2 === 0 ? 'text-brand-blue' : 'text-brand-orange'}`}
                data-testid={`stat-value-${index}`}
              >
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium" data-testid={`stat-label-${index}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
