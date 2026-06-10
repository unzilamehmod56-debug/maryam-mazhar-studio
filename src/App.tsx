import { useState } from 'react';
import { FAQS } from './data';
import { Service } from './types';

// Luxury Components
import ServiceExplorer from './components/ServiceExplorer';
import ArtistryGallery from './components/ArtistryGallery';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import AppointmentForm from './components/AppointmentForm';
import ReviewsSection from './components/ReviewsSection';
import InstagramFeed from './components/InstagramFeed';

// Lucide Icons
import { 
  Menu, X, Sparkles, MessageCircle, CalendarRange, 
  MapPin, HelpCircle, ChevronDown, ChevronUp, Instagram, 
  Youtube, Award, Milestone, Smartphone
} from 'lucide-react';

export default function App() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaqId, setActiveFaqId] = useState<string | null>(null);
  
  // Custom Bento-grid trigger state which flows down to ServiceExplorer active filter
  const [bentoFilterTrigger, setBentoFilterTrigger] = useState<string | null>(null);

  const scrollSmoothTo = (elementId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectService = (service: Service) => {
    setSelectedService(service);
    scrollSmoothTo('booking-section');
  };

  const toggleFaq = (id: string) => {
    setActiveFaqId(activeFaqId === id ? null : id);
  };

  // Bridal category quick selection
  const selectQuickCategory = (catId: string) => {
    // Scroll directly to dynamic service list
    scrollSmoothTo('services-section');
    // If we want to trigger active tab alteration, we can directly trigger a page-level action, or let the user click
  };

  return (
    <div className="min-h-screen bg-background text-on-surface selection:bg-primary-container selection:text-on-primary-container font-sans antialiased">
      
      {/* TopAppBar Navigation */}
      <header className="fixed top-0 left-0 w-full z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant/30 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="text-on-surface hover:text-primary transition-colors cursor-pointer mr-3"
            aria-label="Toggle menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>

        <div 
          onClick={() => scrollSmoothTo('hero-section')}
          className="font-display text-lg md:text-xl tracking-[0.25em] text-on-surface font-extrabold uppercase cursor-pointer hover:opacity-85 text-center flex-grow md:flex-grow-0"
        >
          MARYAM AZHAR
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => scrollSmoothTo('services-section')}
            className="font-sans text-[10px] font-bold tracking-widest text-on-surface-variant hover:text-primary transition-colors uppercase cursor-pointer"
          >
            SERVICES
          </button>
          <button 
            onClick={() => scrollSmoothTo('artistry-gallery')}
            className="font-sans text-[10px] font-bold tracking-widest text-on-surface-variant hover:text-primary transition-colors uppercase cursor-pointer"
          >
            ARTISTRY
          </button>
          <button 
            onClick={() => scrollSmoothTo('booking-section')}
            className="bg-primary text-on-primary font-sans text-[10px] font-bold tracking-widest px-6 py-2.5 hover:bg-primary/95 transition-all text-center rounded-sm cursor-pointer"
          >
            BOOK NOW
          </button>
        </div>

        {/* Mobile quick reservation icon */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => scrollSmoothTo('booking-section')}
            className="text-primary hover:opacity-85"
            aria-label="Direct booking"
          >
            <CalendarRange className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Slideout Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 transition-opacity duration-300" onClick={() => setMobileMenuOpen(false)}>
          <div 
            className="w-72 max-w-full bg-surface h-full p-6 flex flex-col justify-between space-y-8 shadow-xl" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-outline-variant/30 pb-4">
                <span className="font-display font-extrabold text-[#735c00] tracking-widest uppercase">MARYAM AZHAR</span>
                <button onClick={() => setMobileMenuOpen(false)}>
                  <X className="w-5 h-5 text-on-surface-variant" />
                </button>
              </div>

              <div className="flex flex-col space-y-4 font-sans text-xs font-semibold tracking-widest">
                <button 
                  onClick={() => { setMobileMenuOpen(false); scrollSmoothTo('hero-section'); }}
                  className="text-left text-on-surface hover:text-primary py-2 border-b border-outline-variant/10"
                >
                  HOME
                </button>
                <button 
                  onClick={() => { setMobileMenuOpen(false); scrollSmoothTo('about-section'); }}
                  className="text-left text-on-surface hover:text-primary py-2 border-b border-outline-variant/10"
                >
                  STUDIO HERITAGE
                </button>
                <button 
                  onClick={() => { setMobileMenuOpen(false); scrollSmoothTo('services-section'); }}
                  className="text-left text-on-surface hover:text-primary py-2 border-b border-outline-variant/10"
                >
                  SIGNATURE SERVICES
                </button>
                <button 
                  onClick={() => { setMobileMenuOpen(false); scrollSmoothTo('artistry-gallery'); }}
                  className="text-left text-on-surface hover:text-primary py-2 border-b border-outline-variant/10"
                >
                  THE ARTISTRY GALLERY
                </button>
                <button 
                  onClick={() => { setMobileMenuOpen(false); scrollSmoothTo('booking-section'); }}
                  className="text-left text-on-surface hover:text-primary py-2 border-b border-outline-variant/10"
                >
                  BOOK SUITE APPOINTMENT
                </button>
              </div>
            </div>

            <div className="space-y-4 pt-10 border-t border-outline-variant/20 font-sans">
              <p className="text-[10px] text-on-surface-variant tracking-wider uppercase font-bold">DHA PHASE 4, LAHORE</p>
              <div className="flex space-x-3 text-on-surface-variant">
                <a href="https://wa.me/923217973113" target="_blank" rel="noreferrer" className="hover:text-primary"><MessageCircle className="w-5 h-5" /></a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-primary"><Instagram className="w-5 h-5" /></a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main content viewport */}
      <main className="pt-16">

        {/* Hero Section */}
        <section id="hero-section" className="relative h-[680px] md:h-[760px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlq1s_xk2yH9Vf1EisZPdLwFczA6Y6t5JDXdzPSrqAvbkBght17FO0cc5AKgOT-NXe9iINc5uP8VdYzcX4iAvlZYK9oI-vMDYod1MuKKPfAFxe-_B8eRfGOlDmfAn76oW-mGMYmDLrRi2z_qy-nyv-nVOZtVdaq0FgQHYH6P5RyCD5pnhXcuedkPbmhyRj_tlpEvlMjVj8Ki4SSZ0Nc3pTwJqShCJI2zMWQsERNGSLP9c2gDGIkfVnYKarvbPf0kCdYUAzr6eJXMTl" 
              alt="Luxury Beauty Salon Interior Lahore"
              className="w-full h-full object-cover filter brightness-[0.35]"
            />
          </div>
          
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto space-y-6">
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-primary-container font-extrabold bg-on-primary-container/20 px-3 py-1.5 border border-primary-container/30">
              DHA LAHORE PREMIER SALON
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-6xl text-surface uppercase leading-none tracking-tight font-bold">
              Luxury Beauty Experience <br /> in Lahore
            </h1>
            <p className="font-sans text-xs sm:text-sm md:text-md text-surface-variant/90 max-w-2xl mx-auto leading-relaxed">
              Expert makeup artistry, bespoke hair transformations, premium hand-painted gel extensions, and signature luxury pampering curated exclusively for Lahore's modern woman.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button 
                onClick={() => scrollSmoothTo('booking-section')}
                className="w-full sm:w-auto bg-primary text-on-primary font-sans text-xs font-bold tracking-widest px-10 py-4.5 hover:bg-primary-container hover:text-on-primary-container transition-all hover:scale-105 duration-300 rounded-sm cursor-pointer"
              >
                BOOK APPOINTMENT
              </button>
              <button 
                onClick={() => scrollSmoothTo('services-section')}
                className="w-full sm:w-auto border border-primary-container text-primary-container font-sans text-xs font-bold tracking-widest px-10 py-4.5 hover:bg-primary-container/10 transition-all rounded-sm cursor-pointer"
              >
                VIEW SERVICES
              </button>
            </div>
          </div>
        </section>

        {/* Heritage / About Us Section */}
        <section id="about-section" className="py-24 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Story Panel */}
            <div className="space-y-8">
              <div className="space-y-2">
                <span className="font-sans text-xs tracking-[0.3em] uppercase text-primary font-semibold block">The Studio Heritage</span>
                <h2 className="font-display text-4xl font-semibold text-on-surface uppercase tracking-tight">
                  A Trusted Destination <br /> For Transformation
                </h2>
                <div className="w-16 h-[2px] bg-primary"></div>
              </div>
              <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                Located in the heart of Lahore's upscale DHA Phase 4 commercial CCA sector, Maryam Azhar Studio stands as an elegant sanctuary for editorial-grade, professional beauty craftsmanship. Under the creative direction of master artist Maryam Azhar, we blend high-fashion techniques with timeless grace.
              </p>
              <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                Empowered by premium original product line preservation (Tom Ford, Chanel, Dior, Charlotte Tilbury) and a fully certified junior technician board, our studio provides bridal consults, gorgeous balayages, and advanced gel extensions to over 400 satisfied luxury clients yearly.
              </p>
              
              <div className="pt-4">
                <div className="flex items-center space-x-6 border-l-2 border-primary-container pl-6 py-2">
                  <span className="font-display text-4xl font-extrabold text-primary shrink-0">12+</span>
                  <span className="font-sans text-[10px] font-bold tracking-widest text-on-surface-variant uppercase">
                    YEARS OF MASTERFUL<br />ARTISTRY IN LAHORE
                  </span>
                </div>
              </div>
            </div>

            {/* Decorative Image Overlap frame */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-primary-container"></div>
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuADGsaH9XGSiJAFU3GO7PBwh3STgBfrJ2Oxlrt7jktZq6ubOkigxYApXoeLySf4wMdGGIEPJTAHMVw9hvU_S7IirMH5R2bOhoxpOcpPwlFv8tH0491A_MvZs0iHWtq-B-4GO7F9qYJ1Rg__d5YvIpvse--x50wTh7RWRwea4vQqS0G88BTLmEmuSAtpe-Rxq0kwO4zpkQEFXN-hmMAhmZXXMB49Y9Gt3qXEOnJFeBLMDqlb-GeCEGTmwCrkG6Cmcx6JKbXkR1nBYlba" 
                alt="Bridal Makeup Application Lahore" 
                className="w-full aspect-[4/5] object-cover luxury-shadow"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b border-r border-primary-container"></div>
            </div>

          </div>
        </section>

        {/* Signature Services Bento Grid Quick Selection Links */}
        <section className="py-20 bg-surface-container-low border-y border-outline-variant/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center space-y-3 mb-12">
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-primary font-semibold block">CHOOSE YOUR FOCUS</span>
              <h3 className="font-display text-3xl font-semibold text-on-surface uppercase tracking-tight">Explore Artistry Categories</h3>
              <p className="max-w-md mx-auto text-on-surface-variant font-sans text-xs">
                Click any luxurious focus below to instantly navigate to our hand-picked services menu and customized packages.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              
              {/* Major service: Bridal */}
              <div 
                onClick={() => selectQuickCategory('bridal')}
                className="md:col-span-7 group relative overflow-hidden h-[360px] cursor-pointer rounded-sm border border-outline-variant/10 shadow-sm"
              >
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhFjBJ0bl420GojhYUgW5y9AZIPiX2FFqHjXo08G9U-NCf0UCiDj5IY0MZpkQ8EDSvfBpAzPyliTEYcMJ6n7UdFYsFjRIU4I8G5DaqM-0ANqdEw4RQ8z73AGj7DOtFHm59QuYEiNR5axmgiIHpldOPvNuBDXLSXdhHaHzzJtqvhmU6MDKFKTshcFBOe76XqNGxCWNl6biQd6P63083vfxiLMwq0HgXvlyXBeBTL91JD-EARLMLIHNEHQSzFzYxm_mO16rqdoiDjJ6D" 
                  alt="Bridal Artistry Highlight"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 space-y-2">
                  <span className="font-sans text-[9px] text-primary-container px-3 py-1 border border-primary-container rounded-full font-bold uppercase tracking-widest">
                    SIGNATURE
                  </span>
                  <h4 className="font-display text-2xl text-surface uppercase font-bold">Bridal Makeup Artistry</h4>
                  <p className="font-sans text-xs text-surface-variant/90 max-w-md">Our world-renowned traditional wedding experience styled completely customized for your biggest day.</p>
                  <span className="inline-block font-sans text-[10px] text-primary-container pt-1 uppercase font-bold tracking-widest group-hover:translate-x-2 transition-transform duration-300">
                    EXPLORE COLLECTION →
                  </span>
                </div>
              </div>

              {/* Service: Hair styling */}
              <div 
                onClick={() => selectQuickCategory('hair')}
                className="md:col-span-5 group relative overflow-hidden h-[360px] cursor-pointer rounded-sm border border-outline-variant/10 shadow-sm"
              >
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAjBCRJALpAkNrj4Ppt3hqTc4GAC-CyxXY6LJHmqd70aSLWPau1-YQ6v49DNub56cWzZDGdBlKeHqRnbCQ5T6NeKhBbJ1vV6h9oZQ6LVb7XLAUgl20JlfzQMtrdgyAPItNnXmKyjYVcmpjKOyX0mO4muro9tiPsGTh1iLhXbnQkOFsf2XqkBqVw1Q8qdNnMKUIRvb6TuhHTfF-nL99YIkMKGuuzAAMP90B_YwnSmV7Wryok2htbaWC8LlMXdMUWtrnxqQnTyIBZoAH" 
                  alt="Hair Work Highlight"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 space-y-2">
                  <h4 className="font-display text-2xl text-surface uppercase font-bold">Hair Waves & Styling</h4>
                  <p className="font-sans text-xs text-surface-variant/90">Editorial bouncy blowouts, French conditioning wash, and signature keratin repairs.</p>
                  <span className="inline-block font-sans text-[10px] text-primary-container pt-1 uppercase font-bold tracking-widest group-hover:translate-x-2 transition-transform duration-300">
                    EXPLORE COLLECTION →
                  </span>
                </div>
              </div>

              {/* Service: Nails */}
              <div 
                onClick={() => selectQuickCategory('nails')}
                className="md:col-span-4 group relative overflow-hidden h-[260px] cursor-pointer rounded-sm border border-outline-variant/10 shadow-sm"
              >
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCdf5W92PcsMPBMCviLSzpw7AGNBFa6mRuXLIzAfdGAWvIO2b1473eGH4ctQA9FGybWUF2qOoDov7SVRjPVW2CmZopudtcwtKRYR_vYnHLtJPyPXSrHZE0EXKQpmcPUdNh7GPCA3BCWG4Iz1OQQ1RbQAKMUYJ8uVtOcjAD5FSNPN9bGH79i-S2EvG8c8AA_wNRstMgu-VaYixL5qnYNNjDACl2R4NqhOyZ5fFK-hysxdSbI_9B5FlGBJP4h_cID58I8dFFx3aGmPLr" 
                  alt="Nail Artistry Highlight"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/55 group-hover:bg-black/45 transition-colors"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 space-y-1">
                  <h4 className="font-display text-lg text-surface uppercase font-bold tracking-wide">Premium Nails</h4>
                  <p className="font-sans text-[10px] text-surface-variant/85 uppercase tracking-widest">Acrylics, Gel overlays & Extensions</p>
                </div>
              </div>

              {/* Service: Color */}
              <div 
                onClick={() => selectQuickCategory('color')}
                className="md:col-span-4 group relative overflow-hidden h-[260px] cursor-pointer rounded-sm border border-outline-variant/10 shadow-sm"
              >
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYY4Fze6v1G2Telm42e4OBHp_JDaaUMdV5HRj5oM8XJvczDd00Y9GGX3_kLRl_ugDOlD2ON2ERplhUjjqRcJW_HB8-D9PnE16QRkD6WtdXJP71pzyG3tmjmL0KVlL1aAeW5HhyNMvJ4DQzWn32AwDwvmOME3MZOmb-RC3D47je-oB6sn4XI3Bl2V-Bp3pDXAj7JjzPRFY-V5St9juIVWQSOtXiSLmd2u3JSnp113mEdv5J6AYmbS1h5CaUSVWs7jmoczvLpaknaME2" 
                  alt="Coloring Work Highlight"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/55 group-hover:bg-black/45 transition-colors"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 space-y-1">
                  <h4 className="font-display text-lg text-surface uppercase font-bold tracking-wide">Hair Coloring</h4>
                  <p className="font-sans text-[10px] text-surface-variant/85 uppercase tracking-widest">Multitonal Balayage & Highlight Blends</p>
                </div>
              </div>

              {/* Service: Packages */}
              <div 
                onClick={() => selectQuickCategory('packages')}
                className="md:col-span-4 group relative overflow-hidden h-[260px] cursor-pointer rounded-sm bg-primary-container/95 flex flex-col justify-center items-center text-center p-8 space-y-3"
              >
                <Sparkles className="w-8 h-8 text-on-primary-container" />
                <h4 className="font-display text-lg text-on-primary-container uppercase font-bold tracking-wide">Beauty Packages</h4>
                <p className="font-sans text-xs text-on-primary-container/90 max-w-xs leading-relaxed">
                  Curated premium beauty bundles for high-end pampering and wedding guests.
                </p>
                <span className="font-sans text-[9px] font-bold tracking-widest bg-on-primary-container text-white px-3 py-1 rounded-sm uppercase">
                  VIEW BUNDLES
                </span>
              </div>

            </div>
          </div>
        </section>

        {/* Dynamic Interactive Services Listing */}
        <ServiceExplorer onSelectService={handleSelectService} />

        {/* Why Choose Us Highlight Metrics Banner */}
        <section className="py-20 bg-on-surface text-surface">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              <div className="space-y-2">
                <div className="font-display text-4xl md:text-5xl font-extrabold gold-gradient-text">400+</div>
                <div className="font-sans text-[10px] tracking-widest text-surface-variant/80 uppercase font-bold block">Happy Lahore Clients</div>
              </div>
              <div className="space-y-2">
                <div className="font-display text-4xl md:text-5xl font-extrabold gold-gradient-text">4.7 ★</div>
                <div className="font-sans text-[10px] tracking-widest text-surface-variant/80 uppercase font-bold block">Google Verified Rating</div>
              </div>
              <div className="space-y-2">
                <div className="font-display text-4xl md:text-5xl font-extrabold gold-gradient-text">100% ORIGINAL</div>
                <div className="font-sans text-[10px] tracking-widest text-surface-variant/80 uppercase font-bold block">Premium Brands Only</div>
              </div>
              <div className="space-y-2">
                <div className="font-display text-4xl md:text-5xl font-extrabold gold-gradient-text">DHA PHASE 4</div>
                <div className="font-sans text-[10px] tracking-widest text-surface-variant/80 uppercase font-bold block">Secure Luxury Suite</div>
              </div>
            </div>
          </div>
        </section>

        {/* Before / After Transformation visualizers */}
        <BeforeAfterSlider />

        {/* Lookbooks Filterable Portfolio */}
        <ArtistryGallery />

        {/* Studio Official Instagram Feed Experience */}
        <InstagramFeed />

        {/* Guest comments section */}
        <ReviewsSection />

        {/* Reservation form section */}
        <AppointmentForm 
          selectedService={selectedService} 
          onClearSelectedService={() => setSelectedService(null)} 
        />

        {/* FAQs Accordion Block */}
        <section className="py-20 bg-surface-container-lowest border-t border-outline-variant/30">
          <div className="max-w-4xl mx-auto px-6 space-y-12">
            <div className="text-center space-y-3">
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-primary font-semibold block">FAQ ENQUIRIES</span>
              <h3 className="font-display text-3xl font-semibold text-on-surface uppercase tracking-tight">Frequently Asked</h3>
              <div className="w-12 h-[1.5px] bg-primary mx-auto"></div>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq) => {
                const isOpen = activeFaqId === faq.id;
                return (
                  <div 
                    key={faq.id} 
                    className="border-b border-outline-variant/40 pb-4"
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full flex justify-between items-center py-3 text-left font-sans text-xs md:text-sm font-semibold text-on-surface hover:text-primary transition-colors focus:outline-none"
                    >
                      <span>{faq.question}</span>
                      {isOpen ? <ChevronUp className="w-4 h-4 text-primary" /> : <ChevronDown className="w-4 h-4 text-outline-variant" />}
                    </button>
                    {isOpen && (
                      <p className="font-sans text-xs text-on-surface-variant leading-relaxed pb-3 pr-6 transition-all duration-300">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

      </main>

      {/* Luxury Footer */}
      <footer className="bg-surface border-t border-outline-variant py-20 px-6 flex flex-col items-center text-center space-y-6">
        <div 
          onClick={() => scrollSmoothTo('hero-section')}
          className="font-display text-primary uppercase text-2xl md:text-4xl font-extrabold tracking-[0.2em] mb-4 cursor-pointer hover:opacity-80"
        >
          MARYAM AZHAR
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 mb-4">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="font-sans text-[10px] font-bold text-on-surface-variant hover:text-primary transition-colors tracking-widest uppercase">
            INSTAGRAM
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer" className="font-sans text-[10px] font-bold text-on-surface-variant hover:text-primary transition-colors tracking-widest uppercase">
            YOUTUBE
          </a>
          <button 
            onClick={() => scrollSmoothTo('services-section')}
            className="font-sans text-[10px] font-bold text-on-surface-variant hover:text-primary transition-colors tracking-widest uppercase cursor-pointer"
          >
            STUDIO SERVICES
          </button>
          <span className="font-sans text-[10px] text-on-surface-variant tracking-widest uppercase">
            DHA PHASE 4, LAHORE
          </span>
        </div>

        <div className="text-[9px] font-sans text-outline tracking-wider uppercase">
          © {new Date().getFullYear()} MARYAM AZHAR STUDIO. ALL RIGHTS RESERVED.
        </div>
      </footer>

      {/* BottomNavBar (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-4 pt-2 bg-surface/95 backdrop-blur-md shadow-[0px_-4px_12px_rgba(0,0,0,0.05)] border-t border-outline-variant/20 rounded-t-lg">
        <button 
          onClick={() => scrollSmoothTo('hero-section')}
          className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:text-primary transition-colors cursor-pointer"
        >
          <span className="font-sans text-[9px] font-bold uppercase tracking-wider mt-0.5">Home</span>
        </button>

        <button 
          onClick={() => scrollSmoothTo('services-section')}
          className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:text-primary transition-colors cursor-pointer"
        >
          <span className="font-sans text-[9px] font-bold uppercase tracking-wider mt-0.5">Services</span>
        </button>

        <a 
          href="https://wa.me/923217973113" 
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:text-primary transition-colors cursor-pointer bg-primary-container/20 px-3 rounded-full"
        >
          <span className="font-sans text-[9px] font-bold text-primary uppercase tracking-wider mt-0.5">WhatsApp</span>
        </a>

        <button 
          onClick={() => scrollSmoothTo('booking-section')}
          className="flex flex-col items-center justify-center bg-primary text-on-primary rounded-md px-3 py-1.5 hover:bg-primary-container transition-colors cursor-pointer text-center"
        >
          <span className="font-sans text-[9px] font-bold uppercase tracking-widest">Book Suite</span>
        </button>
      </nav>

      {/* Floating WhatsApp Button (Desktop Only Contextual FAB) */}
      <a 
        className="hidden md:flex fixed bottom-10 right-10 z-[60] bg-[#25D366] text-white w-14 h-14 rounded-full items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer" 
        href="https://wa.me/923217973113" 
        target="_blank" 
        rel="noreferrer"
        title="Direct Chat with Reservation Officer"
      >
        <svg fill="currentColor" height="28" viewBox="0 0 16 16" width="28" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
        </svg>
      </a>

    </div>
  );
}
