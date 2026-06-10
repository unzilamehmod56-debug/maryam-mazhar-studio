import { useState } from 'react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';
import { Eye, X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

export default function ArtistryGallery() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'bridal' | 'hair' | 'nails' | 'color' | 'studio'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filterTabs = [
    { id: 'all', label: 'ALL ARTISTRY' },
    { id: 'bridal', label: 'BRIDALS' },
    { id: 'hair', label: 'HAIR WORK' },
    { id: 'nails', label: 'NAIL DESIGNS' },
    { id: 'color', label: 'BALAYAGES & TONES' },
    { id: 'studio', label: 'THE STUDIO' }
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => 
    activeFilter === 'all' ? true : item.category === activeFilter
  );

  const openLightbox = (item: GalleryItem) => {
    const originalIndex = GALLERY_ITEMS.findIndex((gi) => gi.id === item.id);
    if (originalIndex !== -1) {
      setLightboxIndex(originalIndex);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === null ? 0 : (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length));
    }
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === null ? 0 : (prev + 1) % GALLERY_ITEMS.length));
    }
  };

  return (
    <div id="artistry-gallery" className="py-24 bg-surface-bright">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-4">
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-primary font-semibold block">LOOKBOOK</span>
            <h2 className="font-display text-4xl font-semibold text-on-surface uppercase tracking-tight">The Artistry</h2>
            <div className="w-20 h-[1.5px] bg-primary"></div>
            <p className="font-sans text-xs text-on-surface-variant max-w-lg leading-relaxed">
              Explore our curated portfolio of real client transformations, traditional luxury bridal beauty, and modern hair styling designed right here in DHA Lahore.
            </p>
          </div>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noreferrer" 
            className="font-sans text-xs font-semibold tracking-widest text-primary border-b border-primary hover:text-on-primary-container hover:border-on-primary-container transition-colors pb-1 uppercase whitespace-nowrap"
          >
            FOLLOW ON INSTAGRAM →
          </a>
        </div>

        {/* Gallery Filter Navigation */}
        <div className="flex flex-wrap gap-2 mb-8">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-4 py-1.5 font-sans text-[10px] font-bold tracking-wider transition-all duration-300 border rounded-sm ${
                activeFilter === tab.id
                  ? 'bg-primary text-on-primary border-primary'
                  : 'bg-transparent text-on-surface-variant border-outline-variant/30 hover:border-primary/50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="group relative h-80 overflow-hidden bg-on-surface cursor-pointer rounded-sm grayscale hover:grayscale-0 transition-all duration-700 shadow-sm"
              onClick={() => openLightbox(item)}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Blur Overlay & Meta on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="text-primary-container font-sans text-[9px] uppercase tracking-widest font-semibold flex items-center space-x-1.5 mb-1">
                  <Camera className="w-3.5 h-3.5 text-primary-container" />
                  <span>{item.category}</span>
                </div>
                <h4 className="font-display text-lg text-surface uppercase font-medium leading-tight">
                  {item.title}
                </h4>
                <p className="font-sans text-[11px] text-surface-variant/90 line-clamp-2 mt-1">
                  {item.description}
                </p>
                <span className="mt-2 inline-flex items-center space-x-1 text-primary-container font-sans text-[10px] tracking-widest font-semibold uppercase">
                  <Eye className="w-3.5 h-3.5" />
                  <span>ZOOM ARTISTRY</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20 bg-surface-container-low border border-dashed border-outline-variant/30">
            <p className="font-sans text-xs text-on-surface-variant uppercase tracking-widest">No matching items to display.</p>
          </div>
        )}

        {/* Lightbox Modal */}
        {lightboxIndex !== null && (
          <div className="fixed inset-0 bg-black/95 z-[999] flex flex-col justify-between p-4" onClick={closeLightbox}>
            {/* Header Controls */}
            <div className="flex justify-between items-center w-full max-w-7xl mx-auto py-2 z-10" onClick={(e) => e.stopPropagation()}>
              <div className="text-surface font-sans text-xs tracking-wider">
                <span className="text-primary-container font-bold uppercase tracking-widest mr-2">
                  {GALLERY_ITEMS[lightboxIndex].category}
                </span>
                <span>{lightboxIndex + 1} / {GALLERY_ITEMS.length}</span>
              </div>
              <button 
                onClick={closeLightbox}
                className="p-2 text-surface hover:text-primary-container transition-colors rounded-full bg-white/10 hover:bg-white/20"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Slider Space */}
            <div className="flex-grow flex items-center justify-center p-2 relative" onClick={(e) => e.stopPropagation()}>
              {/* Prev Button */}
              <button 
                onClick={handlePrev}
                className="absolute left-4 p-3 bg-black/55 text-surface rounded-full hover:bg-primary transition-colors hover:text-on-primary z-20"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="max-w-4xl max-h-[70vh] flex flex-col items-center">
                <img 
                  src={GALLERY_ITEMS[lightboxIndex].image} 
                  alt={GALLERY_ITEMS[lightboxIndex].title} 
                  className="max-h-[60vh] max-w-full object-contain border border-white/10"
                />
              </div>

              {/* Next Button */}
              <button 
                onClick={handleNext}
                className="absolute right-4 p-3 bg-black/55 text-surface rounded-full hover:bg-primary transition-colors hover:text-on-primary z-20"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Footer Text */}
            <div className="text-center w-full max-w-2xl mx-auto pb-4 z-10" onClick={(e) => e.stopPropagation()}>
              <h3 className="font-display text-xl text-surface uppercase font-bold tracking-wider">
                {GALLERY_ITEMS[lightboxIndex].title}
              </h3>
              <p className="font-sans text-xs text-surface-variant/80 mt-1">
                {GALLERY_ITEMS[lightboxIndex].description}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
