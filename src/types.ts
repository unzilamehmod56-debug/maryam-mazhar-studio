export interface Service {
  id: string;
  name: string;
  category: 'bridal' | 'hair' | 'nails' | 'color' | 'packages';
  price: string;
  description: string;
  features: string[];
  duration: string;
  image: string;
}

export interface Booking {
  id: string;
  name: string;
  phone: string;
  serviceId: string;
  serviceName: string;
  date: string;
  timeSlot: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  notes?: string;
  createdAt: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  isVerified: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'bridal' | 'hair' | 'nails' | 'color' | 'studio';
  image: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
