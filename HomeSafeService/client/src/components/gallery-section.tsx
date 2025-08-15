import React from "react";

export default function GallerySection() {
  const galleryImages = [
    {
      before: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      after: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      beforeAlt: "Before renovation - old interior",
      afterAlt: "After renovation - modern living room",
    },
    {
      before: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      after: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      beforeAlt: "Before exterior renovation",
      afterAlt: "After exterior renovation",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4" data-testid="gallery-title">
            Our <span className="text-brand-orange">Work</span>
          </h2>
          <p className="text-xl text-gray-600" data-testid="gallery-subtitle">
            See the transformation we bring to homes
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <React.Fragment key={index}>
              <div 
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all"
                data-testid={`gallery-before-${index}`}
              >
                <img 
                  src={image.before} 
                  alt={image.beforeAlt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-sm bg-red-500 px-2 py-1 rounded">Before</span>
                  </div>
                </div>
              </div>
              
              <div 
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all"
                data-testid={`gallery-after-${index}`}
              >
                <img 
                  src={image.after} 
                  alt={image.afterAlt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-sm bg-green-500 px-2 py-1 rounded">After</span>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
