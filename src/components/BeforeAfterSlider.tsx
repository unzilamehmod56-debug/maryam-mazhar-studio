import { useState } from 'react';
import { Sparkles, Heart, Eye } from 'lucide-react';

export default function BeforeAfterSlider() {
  const [activeView, setActiveView] = useState<'before' | 'after'>('after');
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      title: "Step 1: Hydration Prep",
      desc: "Double-cleansing with luxury botanical water, followed by an absolute-moisture hyaluronic matrix application to secure a fresh, plump, dewy surface."
    },
    {
      title: "Step 2: Brow & Contour Mapping",
      desc: "Bespoke bone-structure architectural brow styling and cream-shaping of facial dimensions to create editorial highlights under key studio lights."
    },
    {
      title: "Step 3: Royal Blend & Placement",
      desc: "Luminous gold-dust manual base, premium 3D mink eyelashes setting, and hand-blended crimson lips, sealed with high-fidelity setting agents."
    }
  ];

  // Images for before and after
  // For 'After' we use the gorgeous bridal close-up
  const afterImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuBhFjBJ0bl420GojhYUgW5y9AZIPiX2FFqHjXo08G9U-NCf0UCiDj5IY0MZpkQ8EDSvfBpAzPyliTEYcMJ6n7UdFYsFjRIU4I8G5DaqM-0ANqdEw4RQ8z73AGj7DOtFHm59QuYEiNR5axmgiIHpldOPvNuBDXLSXdhHaHzzJtqvhmU6MDKFKTshcFBOe76XqNGxCWNl6biQd6P63083vfxiLMwq0HgXvlyXBeBTL91JD-EARLMLIHNEHQSzFzYxm_mO16rqdoiDjJ6D";
  
  // For 'Before' we use a beauty workspace setup representation. (Or we can use the main about portrait as before and highlight with custom filters).
  // Let's use the high quality profile picture but apply a custom soft desaturation & raw lighting layer style for "Before" to let them interactively appreciate the high contrast makeup application process.
  const beforeImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuADGsaH9XGSiJAFU3GO7PBwh3STgBfrJ2Oxlrt7jktZq6ubOkigxYApXoeLySf4wMdGGIEPJTAHMVw9hvU_S7IirMH5R2bOhoxpOcpPwlFv8tH0491A_MvZs0iHWtq-B-4GO7F9qYJ1Rg__d5YvIpvse--x50wTh7RWRwea4vQqS0G88BTLmEmuSAtpe-Rxq0kwO4zpkQEFXN-hmMAhmZXXMB49Y9Gt3qXEOnJFeBLMDqlb-GeCEGTmwCrkG6Cmcx6JKbXkR1nBYlba";

  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Interactive Visual Slider */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative aspect-[4/5] overflow-hidden luxury-shadow bg-on-surface select-none group border border-outline-variant/20 rounded-sm">
              
              {/* Main Image Layer */}
              <img 
                src={activeView === 'after' ? afterImage : beforeImage} 
                alt="Transformation View" 
                className={`w-full h-full object-cover transition-all duration-700 ${
                  activeView === 'before' ? 'brightness-90 contrast-95' : 'brightness-105 contrast-100'
                }`}
              />

              {/* View Tags */}
              <div className="absolute top-6 left-6 z-10 flex space-x-2">
                <span className={`px-4 py-1.5 font-sans text-[10px] tracking-widest font-bold uppercase rounded-sm transition-colors duration-300 ${
                  activeView === 'before' ? 'bg-primary text-on-primary' : 'bg-black/60 text-white'
                }`}>
                  BEFORE PREP
                </span>
                <span className={`px-4 py-1.5 font-sans text-[10px] tracking-widest font-bold uppercase rounded-sm transition-colors duration-300 ${
                  activeView === 'after' ? 'bg-primary-container text-on-primary-container' : 'bg-black/60 text-white'
                }`}>
                  SIGNATURE AFTER GLOW
                </span>
              </div>

              {/* Interaction Overlay Banner */}
              <div className="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur-md p-4 border-l-2 border-primary-container flex items-center justify-between">
                <div>
                  <h4 className="text-white font-display text-sm font-semibold uppercase tracking-wide">
                    {activeView === 'after' ? 'Luxury Airbrush Look' : 'Raw Skin canvas Prep'}
                  </h4>
                  <p className="text-surface-variant/80 font-sans text-[11px] mt-0.5">
                    {activeView === 'after' ? 'Premium 3D Shimmer, Royal Dupatta, Tom Ford Contouring' : 'Fresh pH Hydration, Brow Outline, Pore Seal'}
                  </p>
                </div>
                <button 
                  onClick={() => setActiveView(prev => prev === 'before' ? 'after' : 'before')}
                  className="px-4 py-2 bg-primary text-on-primary font-sans text-[10px] font-bold tracking-widest hover:bg-primary-container hover:text-on-primary-container transition-colors duration-200"
                >
                  TOGGLE GLOW
                </button>
              </div>
            </div>

            {/* Toggle bar */}
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => setActiveView('before')}
                className={`flex-grow md:flex-grow-0 px-8 py-3.5 font-sans text-[11px] font-bold tracking-widest border transition-all duration-300 ${
                  activeView === 'before' 
                    ? 'bg-on-surface text-surface border-on-surface' 
                    : 'bg-transparent text-on-surface-variant border-outline-variant/30 hover:border-on-surface'
                }`}
              >
                1. SURFACE SKIN PREP
              </button>
              <button
                onClick={() => setActiveView('after')}
                className={`flex-grow md:flex-grow-0 px-8 py-3.5 font-sans text-[11px] font-bold tracking-widest border transition-all duration-300 ${
                  activeView === 'after' 
                    ? 'bg-primary text-on-primary border-primary' 
                    : 'bg-transparent text-on-surface-variant border-outline-variant/30 hover:border-primary'
                }`}
              >
                2. VIEW ROYAL AFTER GLOW
              </button>
            </div>
          </div>

          {/* Details & Commentary */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-2">
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-primary font-semibold">THE METHOD PART 1</span>
              <h3 className="font-display text-3xl font-semibold text-on-surface uppercase tracking-tight">
                Transformation Method
              </h3>
              <div className="w-16 h-[1.5px] bg-primary"></div>
            </div>

            <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
              True beauty artistry isn’t about masking, but dimensional calibration. At Maryam Azhar Studio, we study bone structures, professional flash setups, and ambient outdoor temperatures to secure a makeup finish that looks incredibly luxurious both in high-res zoom lenses and in natural sunlight.
            </p>

            {/* Steps interactive list */}
            <div className="space-y-4">
              {steps.map((st, idx) => {
                const isCurrent = activeStep === idx;
                return (
                  <div 
                    key={idx} 
                    onClick={() => setActiveStep(idx)}
                    className={`p-4 border transition-all duration-300 cursor-pointer rounded-sm ${
                      isCurrent 
                        ? 'bg-surface-container-lowest border-primary shadow-sm' 
                        : 'bg-transparent border-outline-variant/30 hover:border-primary/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <h4 className={`font-display text-xs font-semibold uppercase ${isCurrent ? 'text-primary' : 'text-on-surface'}`}>
                        {st.title}
                      </h4>
                      {isCurrent && <Heart className="w-4 h-4 text-primary fill-current" />}
                    </div>
                    {isCurrent && (
                      <p className="font-sans text-[11px] text-on-surface-variant mt-2 leading-relaxed">
                        {st.desc}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="pt-4 flex items-center space-x-3 text-xs text-on-surface font-semibold font-sans">
              <Eye className="w-4 h-4 text-primary" />
              <span>Click on any step or toggle photo to investigate our artistry.</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
