import { useState } from 'react';
import { SERVICES } from '../data';
import { Service } from '../types';
import { Sparkles, Calendar, Clock, Check } from 'lucide-react';

interface ServiceExplorerProps {
  onSelectService: (service: Service) => void;
  selectedServiceId?: string;
}

export default function ServiceExplorer({ onSelectService, selectedServiceId }: ServiceExplorerProps) {
  const [activeTab, setActiveTab ] = useState<'all' | 'bridal' | 'hair' | 'nails' | 'color' | 'packages'>('all');

  const categories = [
    { id: 'all', name: 'ALL SERVICES' },
    { id: 'bridal', name: 'BRIDAL ARTISTRY' },
    { id: 'hair', name: 'HAIR STYLING' },
    { id: 'nails', name: 'NAIL STUDIO' },
    { id: 'color', name: 'HAIR COLORING' },
    { id: 'packages', name: 'EXCLUSIVE BUNDLES' }
  ];

  const filteredServices = SERVICES.filter(service => 
    activeTab === 'all' ? true : service.category === activeTab
  );

  return (
    <div id="services-section" className="py-20 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-primary font-semibold">Our Menu</span>
          <h2 className="font-display text-4xl font-semibold text-on-surface uppercase tracking-tight">
            Signature Services
          </h2>
          <div className="w-20 h-[1px] bg-primary mx-auto"></div>
          <p className="max-w-md mx-auto text-on-surface-variant font-sans text-xs text-center">
            Discover bespoke hair transformations, customized makeup, and high-care nail services designed for your elegance.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 border-b border-outline-variant/30 pb-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id as any)}
              className={`px-4 py-2 font-sans text-xs font-semibold tracking-widest transition-all duration-300 ${
                activeTab === cat.id
                  ? 'border-b-2 border-primary text-primary'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredServices.map((service) => {
            const isSelectedIndex = selectedServiceId === service.id;
            return (
              <div 
                key={service.id} 
                className={`flex flex-col md:flex-row bg-surface border transition-all duration-300 overflow-hidden ${
                  isSelectedIndex 
                    ? 'border-primary ring-1 ring-primary/40 shadow-md transform scale-[1.01]' 
                    : 'border-outline-variant/30 hover:border-primary/50'
                }`}
              >
                {/* Image panel */}
                <div className="w-full md:w-2/5 relative h-64 md:h-auto min-h-[220px]">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                  {service.category === 'bridal' && (
                    <span className="absolute top-4 left-4 bg-primary text-on-primary font-sans text-[9px] font-bold uppercase tracking-widest px-2 py-1">
                      SIGNATURE
                    </span>
                  )}
                </div>

                {/* Content Panel */}
                <div className="w-full md:w-3/5 p-6 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <h4 className="font-display text-md font-semibold text-on-surface uppercase leading-tight">
                        {service.name}
                      </h4>
                      <span className="font-display text-primary font-bold text-sm shrink-0 pl-3">
                        {service.price}
                      </span>
                    </div>

                    <p className="font-sans text-xs text-on-surface-variant leading-relaxed line-clamp-3">
                      {service.description}
                    </p>

                    <div className="flex items-center space-x-4 text-[11px] text-on-surface/80 pt-1">
                      <span className="flex items-center space-x-1">
                        <Clock className="w-3.5 h-3.5 text-primary-container" />
                        <span>{service.duration}</span>
                      </span>
                      <span className="flex items-center space-x-1 font-semibold text-primary">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span className="uppercase tracking-wider">{service.category}</span>
                      </span>
                    </div>
                  </div>

                  {/* Highlights checklist */}
                  <div className="border-t border-outline-variant/20 pt-3">
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((f, i) => (
                        <li key={i} className="flex items-start space-x-1 text-[11px] text-on-surface-variant">
                          <Check className="w-3 h-3 text-primary-container shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => onSelectService(service)}
                    className={`w-full py-2.5 font-sans text-[10px] uppercase font-bold tracking-widest transition-all duration-300 flex items-center justify-center space-x-2 ${
                      isSelectedIndex 
                        ? 'bg-primary text-on-primary' 
                        : 'bg-on-surface text-surface hover:bg-primary'
                    }`}
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{isSelectedIndex ? 'SELECTED FOR BOOKING' : 'BOOK AND CUSTOMIZE'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
