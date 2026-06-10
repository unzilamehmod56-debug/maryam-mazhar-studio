import { Service, GalleryItem, Review, FAQItem } from './types';

export const SERVICES: Service[] = [
  {
    id: 'bridal-signature',
    name: 'Signature Bridal Experience',
    category: 'bridal',
    price: 'PKR 85,000',
    description: 'Our premier traditional or contemporary South Asian bridal makeup experience. Customized consultation, high-definition flawless airbrush finish, premium false eyelashes, hair setting, and jewelry/dupatta draping.',
    features: [
      'Personalized consultation & trial session',
      'Flawless HD Airbrush or HD Manual high-glamour base',
      'Intricate traditional or editorial modern eye makeup',
      'Premium 3D mink eyelashes & matching accessories',
      'Exquisite dupatta setting & heavy jewelry placement',
      'Dedicated styling team for full comfort & luxury'
    ],
    duration: '240 mins',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhFjBJ0bl420GojhYUgW5y9AZIPiX2FFqHjXo08G9U-NCf0UCiDj5IY0MZpkQ8EDSvfBpAzPyliTEYcMJ6n7UdFYsFjRIU4I8G5DaqM-0ANqdEw4RQ8z73AGj7DOtFHm59QuYEiNR5axmgiIHpldOPvNuBDXLSXdhHaHzzJtqvhmU6MDKFKTshcFBOe76XqNGxCWNl6biQd6P63083vfxiLMwq0HgXvlyXBeBTL91JD-EARLMLIHNEHQSzFzYxm_mO16rqdoiDjJ6D'
  },
  {
    id: 'bridal-valima',
    name: 'Royal Valima / Reception Look',
    category: 'bridal',
    price: 'PKR 75,000',
    description: 'A glowing, sophisticated beauty experience crafted for reception or walima events. Features a modern dewy, soft sheen look with sophisticated custom styling and classic elegance.',
    features: [
      'Glow-from-within customized skin prep',
      'Dewy liquid glass or soft matte high-end finish',
      'Metallic/shimmer luxury eye contouring',
      'Elegant hair styling (textured or premium bun)',
      'Dupatta, hijab, or hair ornament adjustments'
    ],
    duration: '180 mins',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkknO5Y8dRPF3FnG6KRAqO6FNbXY0LnxLYpcug8esaLPzLuEyRi6iiXZZDNJjGrZY5p3OxOSeU-KSKV0U_o9rp65xwKbmdRvydd6IbYBbz37iiorNZOFMFPXRabWM_wjLegxRIka2f0YHXf3Vm3uL46JN4EVp9gznJsCIf36-vjGTI5tjcltLDRqxwiqRR_hrv1TpTOOe38SMv2EXfxY-0zJjLokv6ghWerHBNR0-9wnkk78y5TVr2grmYoZdrSNFTstDhFEBufGtW'
  },
  {
    id: 'hair-styling',
    name: 'Editorial Blowout & Hair Styling',
    category: 'hair',
    price: 'PKR 12,000',
    description: 'Get voluminous, bouncy, and highly glossy hair crafted with specialized tools and high-end thermal protectants. Perfect for special parties, high-profile events, or elegant dinners.',
    features: [
      'Luxury clarifying hair bath & damage-repair mask',
      'Professional thermal styling & dynamic bouncy curls',
      'Sleek straight or Hollywood vintage waves',
      'High-grade lock-in sprays for multi-day shine'
    ],
    duration: '60 mins',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAjBCRJALpAkNrj4Ppt3hqTc4GAC-CyxXY6LJHmqd70aSLWPau1-YQ6v49DNub56cWzZDGdBlKeHqRnbCQ5T6NeKhBbJ1vV6h9oZQ6LVb7XLAUgl20JlfzQMtrdgyAPItNnXmKyjYVcmpjKOyX0mO4muro9tiPsGTh1iLhXbnQkOFsf2XqkBqVw1Q8qdNnMKUIRvb6TuhHTfF-nL99YIkMKGuuzAAMP90B_YwnSmV7Wryok2htbaWC8LlMXdMUWtrnxqQnTyIBZoAH'
  },
  {
    id: 'keratin-treatment',
    name: 'Signature Keratin Repair Therapy',
    category: 'hair',
    price: 'PKR 35,000',
    description: 'Restore natural protein reserves in brittle, frizzy hair with our premium keratin formulation. Delivers up to 6 months of ultra-smooth, silky, humidity-resistant lock control.',
    features: [
      'Deep amino acid assessment & custom prep treatment',
      'Infusion of premium French or Brazilian liquid keratin',
      'Precise thermal sealing lock-in technique',
      'Post-treatment blowdry & care kit advisory'
    ],
    duration: '150 mins',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCz7OtTU3we_Eg7B48pBCQiW0V8xTZCmAonARPQ5p5644ghP0PciBSRR4Rix7ffmhwwhBdvxvHtYB9GwjgTaephsnmr2vN9G1htWwc6Z9uYoVefyktDZFkTVShogTVGtX4TJUK7kfXcqQ4bGqKSoYEhrJfDIfaSS79nK3UfRC68pZL-sztlQAzzbWvsDz_3FjEbwGygg6HaAx-QO9gLBLSwrw5fFZKsHA-xOobJmTQA-ytbnaNZvpk2D0k1783gFlV0mJUWOCBn1oGZ'
  },
  {
    id: 'nail-extensions',
    name: 'Premium Acrylic & Gel Extensions',
    category: 'nails',
    price: 'PKR 9,500',
    description: 'Expertly designed extensions leveraging high-grade tip extensions. Finished with flawless shaping, dual-cured LED gel polish, and customized, hand-painted luxurious gold accent elements or decals.',
    features: [
      'Comprehensive sterile cuticle dry prep',
      'Natural length extensions with flawless structural apex',
      'Non-chipping high-shine gel coating',
      'Hand-crafted gold leaf, chrome, or delicate pearl accents'
    ],
    duration: '75 mins',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCdf5W92PcsMPBMCviLSzpw7AGNBFa6mRuXLIzAfdGAWvIO2b1473eGH4ctQA9FGybWUF2qOoDov7SVRjPVW2CmZopudtcwtKRYR_vYnHLtJPyPXSrHZE0EXKQpmcPUdNh7GPCA3BCWG4Iz1OQQ1RbQAKMUYJ8uVtOcjAD5FSNPN9bGH79i-S2EvG8c8AA_wNRstMgu-VaYixL5qnYNNjDACl2R4NqhOyZ5fFK-hysxdSbI_9B5FlGBJP4h_cID58I8dFFx3aGmPLr'
  },
  {
    id: 'hair-balayage',
    name: 'Luxury Balayage & Highlight Blend',
    category: 'color',
    price: 'PKR 28,000',
    description: 'Indulge in hand-painted highlights, bespoke balayage, and custom caramel, ash-blonde, or honey-gold coloring. Leverages ammonia-free high-end toners to protect and shine.',
    features: [
      'Under-light mapping according to facial bone structure',
      'Ammonia-free bonding protective developer formulas',
      'Multitonal color wash & bespoke organic toner lock',
      'Deep nourishing hydration lock therapy'
    ],
    duration: '180 mins',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYY4Fze6v1G2Telm42e4OBHp_JDaaUMdV5HRj5oM8XJvczDd00Y9GGX3_kLRl_ugDOlD2ON2ERplhUjjqRcJW_HB8-D9PnE16QRkD6WtdXJP71pzyG3tmjmL0KVlL1aAeW5HhyNMvJ4DQzWn32AwDwvmOME3MZOmb-RC3D47je-oB6sn4XI3Bl2V-Bp3pDXAj7JjzPRFY-V5St9juIVWQSOtXiSLmd2u3JSnp113mEdv5J6AYmbS1h5CaUSVWs7jmoczvLpaknaME2'
  },
  {
    id: 'package-pamper',
    name: 'Ultimate Pamper & Radiant Glow Bundle',
    category: 'packages',
    price: 'PKR 32,000',
    description: 'A meticulously curated absolute comfort package. Includes deep hair therapy with blowdry, flawless nail extensions, express renewal facial, and high-glamour party makeup.',
    features: [
      'Express Vitamin-C Renewal Facial treatment',
      'Flawless manicure and fresh gel dynamic overlay',
      'Premium party makeup and lashes installation',
      'Special luxury treatment with bounce styling'
    ],
    duration: '150 mins',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlq1s_xk2yH9Vf1EisZPdLwFczA6Y6t5JDXdzPSrqAvbkBght17FO0cc5AKgOT-NXe9iINc5uP8VdYzcX4iAvlZYK9oI-vMDYod1MuKKPfAFxe-_B8eRfGOlDmfAn76oW-mGMYmDLrRi2z_qy-nyv-nVOZtVdaq0FgQHYH6P5RyCD5pnhXcuedkPbmhyRj_tlpEvlMjVj8Ki4SSZ0Nc3pTwJqShCJI2zMWQsERNGSLP9c2gDGIkfVnYKarvbPf0kCdYUAzr6eJXMTl'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Editorial Bridal Portrait',
    category: 'bridal',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAxe7HcO-Cal1WdbbFCgE9ZVd_P164e-LWO8UO7d_ak40AdWkq5G2RKfoQ3TNNGn9I0JpCcQS4haBzb6CTPjKxoV5A9b8SyhAc4gZG9Kzs9ZWjLLEf9f5CBB-KHLr39WGR5zhcZh-OqQOd2aVIWEXoF4qcx0WCIx25F6InDtu0xhZOwolaDBZxfVZeilc2ig6GRdBEyP0i4dHPivApRngmf9yZ6Sv-GlimW-EU-icHFe4QBxJNLzeY1si8D9Xj6XuKl2LCxWhFpbQ_',
    description: 'A striking profile showcasing flawless skin work and dramatic smokey metallic eye details.'
  },
  {
    id: 'g2',
    title: 'Intricate Wedding Royalty Style',
    category: 'bridal',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkknO5Y8dRPF3FnG6KRAqO6FNbXY0LnxLYpcug8esaLPzLuEyRi6iiXZZDNJjGrZY5p3OxOSeU-KSKV0U_o9rp65xwKbmdRvydd6IbYBbz37iiorNZOFMFPXRabWM_wjLegxRIka2f0YHXf3Vm3uL46JN4EVp9gznJsCIf36-vjGTI5tjcltLDRqxwiqRR_hrv1TpTOOe38SMv2EXfxY-0zJjLokv6ghWerHBNR0-9wnkk78y5TVr2grmYoZdrSNFTstDhFEBufGtW',
    description: 'Exquisite jewelry setting and shimmering eyeshadow for traditional South Asian brides.'
  },
  {
    id: 'g3',
    title: 'Gold Leaf Signature Nails',
    category: 'nails',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7RxeeS_tx_-pxM-fVsXGxeL-oZmN4zpFElU3-kZayhUHE5fgkii2z7hKuxCPuigRIgtoHAygdEfHWoz9q50iH7IZO0jdTI4AcNjJkZOWa5JNQGERuWq2HfhbZC1M7R30z4H7BCvx7vk_jxIirnAWblzrsgPZjPguwpDSkv_fleTP8h-CjQZJsJC54f02bcoSJDw5FHACbvnJiSwgUYVJlmNnbX5fROpKnunNDZ8w5trsPuCN5WcVNmCGbA3eiEAdW9Qy4pv9aPoLU',
    description: 'Sleek neutral base coated with 24k gold foil abstract art for the modern minimalistic bride.'
  },
  {
    id: 'g4',
    title: 'Premium Caramel Balayage',
    category: 'color',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCz7OtTU3we_Eg7B48pBCQiW0V8xTZCmAonARPQ5p5644ghP0PciBSRR4Rix7ffmhwwhBdvxvHtYB9GwjgTaephsnmr2vN9G1htWwc6Z9uYoVefyktDZFkTVShogTVGtX4TJUK7kfXcqQ4bGqKSoYEhrJfDIfaSS79nK3UfRC68pZL-sztlQAzzbWvsDz_3FjEbwGygg6HaAx-QO9gLBLSwrw5fFZKsHA-xOobJmTQA-ytbnaNZvpk2D0k1783gFlV0mJUWOCBn1oGZ',
    description: 'Gorgeously blended caramel waves capturing incredible dimensional highlights.'
  },
  {
    id: 'g5',
    title: 'Premium Brand Artistry Workspace',
    category: 'studio',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQLzRhZGY_Pl2KVePlu_ZmYvpcC2krxjSKvGEn0AiUAOb1DXZZh5Ju_mcaCTiX02XQRJ38jDBLqpHaD25wb8OdEh-tT_Znb5sJdT5vWRSjqAWqggYJkODgu0MTHR4zQ-pFkJb4cCMSQoLDJZweU9xMdod29bWdt55_mFGWmO5wyhAMDgXrVuMhVPorfJxCv4byWD5cFUucAB8n6pZkYBrzobtd3HySeGaTqljWR-PF8e6cj0Z7_1InRKETs2Vsh_VXKu8sLB53DuaY',
    description: 'We prioritize original, luxury grade cosmetics from Tom Ford, Chanel, and Dior.'
  },
  {
    id: 'g6',
    title: 'Elegant DHA Studio Interior',
    category: 'studio',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAa1IX1o0LP5zHc80OboQ1PtMjDEGHyauKFj4JLyGtuWvTIvgzteJ0r3vdJcUPV8SIKgZbh2oG9rXoiIwLYwWnBTqFIWvDG9hyhApX5G3hGRTUOIuF1IPg1B1DCwT9Ryn_XbAICsj0MXTbNRxODEDkcrvitC7_7bmc7GZc7_0iX90taRUMn_0D37_KsfNxbruPmpjejRip8apbfrO9gXv29IDnT-k9eZ73hDulkbQquyvd9dWSLULxRyCIU7Ykp5JrEdkK_HrzbKQKY',
    description: 'Our luxurious vanity spaces equipped with warm ring diffusers and velvet seats.'
  }
];

export const INITIAL_REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'SARA AHMED',
    rating: 5,
    text: 'Maryam made my bridal dreams come true! The makeup was flawless, felt unbelievably lightweight, and stayed entirely perfect all night. Truly the finest premium make-up experience in Lahore.',
    date: 'Jun 3, 2026',
    isVerified: true
  },
  {
    id: 'r2',
    author: 'FATIMA KHAN',
    rating: 5,
    text: 'Excellent caramel hair coloring. My stylists understood exactly what undertone matched my skin. Superbly warm service, delicious complementary high-tea, and exceptionally gorgeous outcome.',
    date: 'May 28, 2026',
    isVerified: true
  },
  {
    id: 'r3',
    author: 'ZAINAB MALIK',
    rating: 5,
    text: "The gold-leaf nail extensions were done with so much care and precision! I've finally found my absolute go-to regular salon spot in DHA Phase 4. Highly recommend their professional nail technician.",
    date: 'May 14, 2026',
    isVerified: true
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq1',
    question: 'How do I book for Bridal services?',
    answer: 'Bridal services can be requested on our web form or requested directly via WhatsApp. Bridal appointments require a 50% reservation deposit because we block out a dedicated team of junior stylists alongside Maryam Azhar to cater exclusively to your bridal suite.'
  },
  {
    id: 'faq2',
    question: 'What are your peak hour timings?',
    answer: 'Our peak hours are usually Friday through Sunday from 2:00 PM to 7:00 PM. We recommend booking at least 3-5 days in advance for weekend blowouts, hair treatments, and manicure extensions.'
  },
  {
    id: 'faq3',
    question: 'Do you offer on-site/destination makeup?',
    answer: 'Yes, we offer premium on-location destination bridal services both nationwide inside Pakistan and internationally. Travel arrangements, security clearances, and specialty equipment transport charges apply depending on the destination.'
  },
  {
    id: 'faq4',
    question: 'What premium cosmetic brands do you use?',
    answer: 'We exclusively use original high-end luxury products including Charlotte Tilbury, Tom Ford Beauty, Chanel, Dior, NARS, and Anastasia Beverly Hills. We never compromise on product quality, ensuring a lasting and skin-safe makeup look.'
  }
];
