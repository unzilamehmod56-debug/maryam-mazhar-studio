import React, { useState, useEffect } from 'react';
import { SERVICES } from '../data';
import { Booking, Service } from '../types';
import { Calendar, Phone, Clock, FileText, CheckCircle2, Trash2, Send, MapPin, Eye, Check, X } from 'lucide-react';

interface AppointmentFormProps {
  selectedService: Service | null;
  onClearSelectedService: () => void;
}

export default function AppointmentForm({ selectedService, onClearSelectedService }: AppointmentFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceId, setServiceId] = useState(selectedService?.id || SERVICES[0].id);
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('11:00 AM');
  const [notes, setNotes] = useState('');
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [successMsg, setSuccessMsg] = useState('');
  const [showManager, setShowManager] = useState(false);

  // Available luxurious slots
  const slots = [
    '11:00 AM', '12:30 PM', '2:00 PM', '3:30 PM', '5:00 PM', '6:30 PM'
  ];

  // Sync selected service if changed from parent
  useEffect(() => {
    if (selectedService) {
      setServiceId(selectedService.id);
    }
  }, [selectedService]);

  // Load from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('maryam_appointments');
      if (saved) {
        setBookings(JSON.parse(saved));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  // Save to localStorage helper
  const saveBookings = (newBookings: Booking[]) => {
    setBookings(newBookings);
    try {
      localStorage.setItem('maryam_appointments', JSON.stringify(newBookings));
    } catch (e) {
      console.error(e);
    }
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return alert('Please enter your full name');
    if (!phone.trim()) return alert('Please enter your phone number');
    if (!date) return alert('Please pick a preferred date');

    const chosenServiceObj = SERVICES.find(s => s.id === serviceId);
    const serviceName = chosenServiceObj ? chosenServiceObj.name : 'Beauty Styling';

    const newBooking: Booking = {
      id: 'book_' + Date.now(),
      name: name.trim(),
      phone: phone.trim(),
      serviceId,
      serviceName,
      date,
      timeSlot,
      status: 'pending',
      notes: notes.trim() || undefined,
      createdAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    };

    const updated = [newBooking, ...bookings];
    saveBookings(updated);

    // Reset inputs
    setName('');
    setPhone('');
    setNotes('');
    onClearSelectedService();

    setSuccessMsg('Your appointment request was received! Click the WhatsApp button below to instantly secure your slot.');
    setTimeout(() => {
      setSuccessMsg('');
    }, 8000);
  };

  const deleteBooking = (id: string) => {
    const updated = bookings.filter(b => b.id !== id);
    saveBookings(updated);
  };

  // Simulate owner status change for demo
  const updateStatus = (id: string, newStatus: 'pending' | 'confirmed' | 'cancelled') => {
    const updated = bookings.map(b => b.id === id ? { ...b, status: newStatus } : b);
    saveBookings(updated);
  };

  // WhatsApp helper redirect generator
  const getWhatsAppURL = (booking: Booking) => {
    const chosenServiceObj = SERVICES.find(s => s.id === booking.serviceId);
    const textMessage = `Salam Maryam Azhar Studio! I would like to confirm my requested appointment:\n\n*Name:* ${booking.name}\n*Phone:* ${booking.phone}\n*Service:* ${booking.serviceName}\n*Investment:* ${chosenServiceObj?.price || 'Quote on arrival'}\n*Date:* ${booking.date}\n*Slot:* ${booking.timeSlot}\n*Notes:* ${booking.notes || 'None'}\n\nThank you!`;
    return `https://wa.me/923217973113?text=${encodeURIComponent(textMessage)}`;
  };

  return (
    <div id="booking-section" className="py-24 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Reservation Form */}
        <div className="lg:col-span-7 space-y-10">
          <div className="space-y-3">
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-primary font-semibold block">RESERVATIONS</span>
            <h2 className="font-display text-3xl font-semibold text-on-surface uppercase tracking-tight">Reserve Your Seat</h2>
            <div className="w-16 h-[1.5px] bg-primary"></div>
            <p className="font-sans text-xs text-on-surface-variant">
              Confirm your tailored beauty experience in DHA Lahore. Please enter your authentic details below. Our reservation officer will verify and locks your suite.
            </p>
          </div>

          {successMsg && (
            <div className="p-4 bg-primary/10 border-l-4 border-primary text-on-primary-container font-sans text-xs space-y-2 rounded-sm">
              <div className="flex items-center space-x-2 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>REQUEST DEPOSITED SUCCESSFULLY</span>
              </div>
              <p>{successMsg}</p>
            </div>
          )}

          <form onSubmit={handleBookingSubmit} className="space-y-6">
            {/* Input row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="font-sans text-[10px] font-bold text-on-surface-variant uppercase tracking-wider block">Full Name</label>
                <div className="relative">
                  <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g., Ayesha Rahman"
                    className="w-full border-0 border-b border-outline-variant bg-transparent py-3 focus:ring-0 focus:border-primary transition-colors text-xs text-on-surface placeholder:text-outline-variant/60"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-sans text-[10px] font-bold text-on-surface-variant uppercase tracking-wider block">Phone Number</label>
                <div className="relative">
                  <input 
                    type="tel" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g., 0321-7973113"
                    className="w-full border-0 border-b border-outline-variant bg-transparent py-3 focus:ring-0 focus:border-primary transition-colors text-xs text-on-surface placeholder:text-outline-variant/60"
                  />
                </div>
              </div>
            </div>

            {/* Input row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="font-sans text-[10px] font-bold text-on-surface-variant uppercase tracking-wider block">Preferred Service</label>
                <select 
                  value={serviceId}
                  onChange={(e) => setServiceId(e.target.value)}
                  className="w-full border-0 border-b border-outline-variant bg-transparent py-3 focus:ring-0 focus:border-primary transition-colors text-xs text-on-surface-variant"
                >
                  {SERVICES.map(s => (
                    <option key={s.id} value={s.id} className="text-on-surface bg-surface">{s.name} ({s.price})</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-sans text-[10px] font-bold text-on-surface-variant uppercase tracking-wider block">Preferred Date</label>
                <input 
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full border-0 border-b border-outline-variant bg-transparent py-3 focus:ring-0 focus:border-primary transition-colors text-xs text-on-surface-variant"
                />
              </div>
            </div>

            {/* Time Slot Selection */}
            <div className="space-y-2">
              <label className="font-sans text-[10px] font-bold text-on-surface-variant uppercase tracking-wider block">Preferred Time Slot</label>
              <div className="flex flex-wrap gap-2">
                {slots.map((sl) => (
                  <button
                    type="button"
                    key={sl}
                    onClick={() => setTimeSlot(sl)}
                    className={`px-4 py-2 font-sans text-[10px] font-bold rounded-sm border uppercase transition-all duration-300 ${
                      timeSlot === sl
                        ? 'bg-primary text-on-primary border-primary'
                        : 'bg-transparent text-on-surface-variant border-outline-variant/30 hover:border-primary'
                    }`}
                  >
                    {sl}
                  </button>
                ))}
              </div>
            </div>

            {/* Notes */}
            <div className="space-y-1">
              <label className="font-sans text-[10px] font-bold text-on-surface-variant uppercase tracking-wider block">Special Notes or Requests (Optional)</label>
              <textarea 
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Ex: Hair volume details, skin allergies, or heavy dupatta settings requests..."
                rows={2}
                className="w-full border-0 border-b border-outline-variant bg-transparent py-3 focus:ring-0 focus:border-primary transition-colors text-xs text-on-surface placeholder:text-outline-variant/60 resize-none"
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-on-surface text-surface py-4 font-sans text-xs font-bold tracking-widest hover:bg-primary transition-colors uppercase cursor-pointer"
            >
              Request Appointment Room
            </button>
          </form>

          {/* User Booked List */}
          {bookings.length > 0 && (
            <div className="pt-8 border-t border-outline-variant/30 space-y-4">
              <div className="flex justify-between items-center">
                <h4 className="font-display text-lg font-bold text-on-surface uppercase tracking-wider">
                  My Booked Sessions ({bookings.length})
                </h4>
                <button
                  type="button"
                  onClick={() => {
                    if(confirm("Do you want to clear your local session history?")) saveBookings([]);
                  }}
                  className="text-xs text-red-600 hover:underline flex items-center space-x-1"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Clear History</span>
                </button>
              </div>

              <div className="space-y-3">
                {bookings.map((booking) => (
                  <div key={booking.id} className="p-4 border border-outline-variant/25 bg-surface-container-low flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1.5">
                      <div className="flex items-center space-x-2">
                        <span className="font-display text-xs font-bold text-on-surface uppercase">{booking.serviceName}</span>
                        <span className={`px-2 py-0.5 font-sans text-[8px] font-bold uppercase rounded-sm border ${
                          booking.status === 'confirmed' 
                            ? 'bg-green-100 text-green-800 border-green-300' 
                            : booking.status === 'cancelled'
                            ? 'bg-red-100 text-red-800 border-red-300'
                            : 'bg-yellow-100 text-yellow-800 border-yellow-300'
                        }`}>
                          {booking.status.toUpperCase()}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-1 text-[10px] text-on-surface-variant font-sans">
                        <span className="flex items-center space-x-1">
                          <Calendar className="w-3.5 h-3.5 text-primary" />
                          <span>{booking.date}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Clock className="w-3.5 h-3.5 text-primary" />
                          <span>{booking.timeSlot}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Phone className="w-3.5 h-3.5 text-primary" />
                          <span>{booking.phone}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <FileText className="w-3.5 h-3.5 text-primary" />
                          <span>{booking.name}</span>
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-2 shrink-0 self-end md:self-center">
                      <a 
                        href={getWhatsAppURL(booking)}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-[#25D366] hover:bg-[#1ebd5d] text-white px-3 py-1.5 font-sans text-[9px] font-bold uppercase tracking-wider flex items-center space-x-1 transition-colors duration-200"
                      >
                        <Send className="w-3 h-3" />
                        <span>Instant WhatsApp Verify</span>
                      </a>
                      <button
                        onClick={() => deleteBooking(booking.id)}
                        className="p-1.5 text-on-surface-variant hover:text-red-600 transition-colors"
                        title="Remove Booking Record"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Console Toggle to change pending/fulfilled for showcase */}
              <div className="pt-4">
                <button 
                  onClick={() => setShowManager(!showManager)}
                  className="font-sans text-[10px] text-primary hover:underline uppercase tracking-wide flex items-center space-x-1"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>{showManager ? 'Hide Studio Admin Panel' : 'Show Studio Admin Panel (Demo)'}</span>
                </button>

                {showManager && (
                  <div className="p-4 mt-2 border border-primary/20 bg-primary/5 rounded-sm space-y-2">
                    <p className="font-sans font-bold text-[9px] text-primary uppercase tracking-widest">
                      Studio Admin Simulation Panel (Local Client Only)
                    </p>
                    <p className="font-sans text-[10px] text-on-surface-variant">
                      In production, the studio logs into this console to process incoming client bookings. Press the buttons below to toggle booking status:
                    </p>
                    <div className="space-y-1.5 pt-1">
                      {bookings.map(b => (
                        <div key={b.id} className="flex justify-between items-center p-2 bg-surface border border-outline-variant/30 text-[11px]">
                          <span>{b.name} ({b.serviceName.slice(0,18)}...)</span>
                          <div className="flex space-x-1">
                            <button 
                              onClick={() => updateStatus(b.id, 'confirmed')} 
                              className="px-2 py-0.5 bg-green-700 text-white font-sans text-[9px] font-semibold hover:opacity-90"
                            >
                              Confirm
                            </button>
                            <button 
                              onClick={() => updateStatus(b.id, 'cancelled')} 
                              className="px-2 py-0.5 bg-red-700 text-white font-sans text-[9px] font-semibold hover:opacity-90"
                            >
                              Cancel
                            </button>
                            <button 
                              onClick={() => updateStatus(b.id, 'pending')} 
                              className="px-2 py-0.5 bg-gray-700 text-white font-sans text-[9px] font-semibold hover:opacity-90"
                            >
                              Reset
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Studio Info Panel */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-6">
            <h3 className="font-display text-2xl font-bold text-on-surface uppercase tracking-tight">Studio Location</h3>
            <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
              We are located in Sector CCA of DHA Lahores prestigious Phase 4. Easy access with exclusive, highly safe private valet parking facilities.
            </p>
          </div>

          {/* Map Representation - Proper Interactive Map */}
          <div className="w-full h-[280px] bg-surface-container border border-outline-variant/30 overflow-hidden relative rounded-sm shadow-sm">
            <iframe
              src="https://maps.google.com/maps?q=Maryam%20Azhar%20Studio%20Plaza%20169%20DD%20Sector%20CCA%20DHA%20Phase%204%20Lahore&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 filter grayscale hover:grayscale-0 transition-all duration-700"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Maryam Azhar Studio DHA Lahore Phase 4 Interactive Map"
            ></iframe>
          </div>

          {/* Quick Contact Details */}
          <div className="space-y-6 pt-4 border-t border-outline-variant/30">
            <div className="flex items-start space-x-4">
              <MapPin className="w-5 h-5 text-primary mt-1" />
              <div>
                <p className="font-sans text-[11px] font-bold text-on-surface uppercase tracking-wider">Our Studio Address</p>
                <p className="font-sans text-xs text-on-surface-variant mt-0.5"> Plaza 169 DD, Sector CCA, DHA Phase 4, Lahore, Pakistan.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Clock className="w-5 h-5 text-primary mt-1" />
              <div>
                <p className="font-sans text-[11px] font-bold text-on-surface uppercase tracking-wider">Studio Timings</p>
                <p className="font-sans text-xs text-on-surface-variant mt-0.5">Wed - Mon: 11:00 AM - 8:00 PM</p>
                <p className="font-sans text-[11px] text-red-700 italic mt-0.5">Tuesdays Closed</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="w-5 h-5 text-primary mt-1" />
              <div>
                <p className="font-sans text-[11px] font-bold text-on-surface uppercase tracking-wider">Call or WhatsApp</p>
                <p className="font-sans text-xs text-on-surface-variant mt-0.5">0321-7973113 / 0321-7973113</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
