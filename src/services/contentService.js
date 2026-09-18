import { useState, useEffect } from 'react';
import { API_BASE_URL } from './mediaConfig';

export const DEFAULT_CONTENT = {
  hero: {
    badge: 'MAYTRI GROUP',
    reraNumber: 'P02400007647',
    title: 'Exclusive Villa Township in Hyderabad',
    subheading: 'Spacious Villas with Picturesque Pathways & Rich Finishes',
    description: 'Surrounded by pristine landscapes and tree-lined avenues, experience an eco-friendly lifestyle designed for comfortable community living.',
    startingPrice: '₹3.8 Cr*',
    tokenAdvance: '₹5 Lakhs'
  },
  about: {
    sectionTitle: 'Where Nature Meets Architectural Opulence',
    tagline: 'A Masterpiece of Luxury Living in Shamshabad',
    description1: 'Nestled amidst 35+ acres of verdant serenity, Maytri Ambhuja is Hyderabad’s pinnacle luxury villa community crafted for discerning global citizens.',
    description2: 'Strategically located minutes from Shamshabad & ORR Exit 12, each villa is an epitome of timeless contemporary architecture with 100% Vaastu compliance.',
    totalVillas: '150+ Luxury Villas',
    totalAcres: '35+ Acres Township',
    clubhouseSize: '90,000 Sq.Ft Clubhouse'
  },
  clubhouse: {
    title: 'The Grand Ambhuja Clubhouse',
    tagline: '90,000 Sq.Ft of Resort-Class Leisure & Wellness',
    description: 'An architectural marvel offering 30+ bespoke luxury amenities including infinity pools, private 4K preview theatres, Olympic multi-sport arenas, and Ayurvedic spas.'
  },
  contact: {
    phone: '+91 98490 12345',
    whatsapp: '+91 98490 12345',
    email: 'sales@ambhujamaytri.in',
    infoEmail: 'sales@ambhujamaytri.in',
    websiteUrl: 'https://www.maytriambhuja.in',
    siteAddress: 'Maytri Ambhuja, Near ORR Exit 12, Shamshabad - Sanghi Nagar Road, Hyderabad, Telangana 501511',
    officeHours: 'Monday – Sunday: 9:30 AM – 7:30 PM'
  },
  brochure: {
    url: '/assets/maytri-ambhuja-brochure.pdf',
    modalTitle: 'Download Maytri Ambhuja Brochure',
    modalDesc: 'Receive the official villa township brochure featuring master plan details, 90,000 sq.ft clubhouse features, and 222 & 300 SQ YD floor plans.'
  },
  amenitiesSection: {
    eyebrowTag: 'RESORT-STYLE CONVENIENCES',
    title: 'Amenities',
    subtitle: 'A comprehensive suite of modern lifestyle, wellness, sports, and daily conveniences curated for all age groups.',
    items: [
      { name: 'Playing Area', category: 'Recreation', img: '', iconName: 'Gamepad2' },
      { name: 'Swimming Pool', category: 'Wellness', img: '', iconName: 'Waves' },
      { name: 'Club House', category: 'Community', img: '', iconName: 'Building2' },
      { name: 'Grocery Store', category: 'Convenience', img: '', iconName: 'ShoppingBag' },
      { name: 'Gym', category: 'Fitness', img: '', iconName: 'Dumbbell' },
      { name: 'Indoor Games', category: 'Leisure', img: '', iconName: 'Dices' },
      { name: 'Jogging Track', category: 'Fitness', img: '', iconName: 'Footprints' },
      { name: 'Intercom System', category: 'Security', img: '', iconName: 'PhoneCall' },
      { name: 'High-Speed Lifts', category: 'Infrastructure', img: '', iconName: 'ArrowUpDown' },
      { name: '4.5 Acre Central Park', category: 'Nature', img: '', iconName: 'Trees' },
      { name: '24/7 Security & CCTV', category: 'Safety', img: '', iconName: 'ShieldCheck' },
      { name: 'Tennis Court', category: 'Sports', img: '', iconName: 'Trophy' },
      { name: 'Badminton & Shuttle', category: 'Sports', img: '', iconName: 'Activity' },
      { name: 'Squash Arena', category: 'Sports', img: '', iconName: 'Target' },
      { name: 'Grand Banquets', category: 'Celebration', img: '', iconName: 'PartyPopper' },
      { name: 'ATM & Banking Kiosk', category: 'Convenience', img: '', iconName: 'CreditCard' }
    ]
  },
  projectsSection: {
    eyebrowTag: 'LANDMARK DEVELOPMENTS',
    title: 'Our Projects',
    subtitle: 'Explore premier master-planned townships and signature villa communities developed with unmatched luxury, architectural brilliance, and strategic connectivity.',
    items: [
      {
        id: 'ambhuja',
        title: 'Maytri Ankura',
        tagline: 'Open Plots',
        location: 'Maheshwaram, Shamshabad Airport, Hyderabad',
        status: 'Ready for VIP Booking',
        image: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1789725505/maytri_ambhuja/gallery/project_img_0.jpg',
        buttonText: 'For More Info',
        specs: [],
        features: []
      },
      {
        id: 'palms',
        title: 'Maytri Susheela Kuteer',
        tagline: 'Luxury Flats',
        location: 'Vanasthalipuram, Injapur, Hyderabad',
        status: 'Phase 1 Fast Selling',
        image: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1789728586/maytri_ambhuja/gallery/project_img_1.jpg',
        buttonText: 'For More Info',
        specs: [],
        features: []
      }
    ]
  }
};

const CONTENT_CACHE_KEY = 'maytri_website_content_cache_v2';

// Synchronous cache hydration from localStorage for instant, zero-flicker render
let cachedContent = null;
if (typeof window !== 'undefined') {
  try {
    const raw = localStorage.getItem(CONTENT_CACHE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object') {
        cachedContent = {
          ...DEFAULT_CONTENT,
          ...parsed,
          projectsSection: {
            ...DEFAULT_CONTENT.projectsSection,
            ...(parsed.projectsSection || {}),
            items: (Array.isArray(parsed.projectsSection?.items) && parsed.projectsSection.items.length > 0)
              ? parsed.projectsSection.items
              : DEFAULT_CONTENT.projectsSection.items
          }
        };
      }
    }
  } catch (e) {
    console.warn('Error reading content cache from localStorage:', e);
  }
}

const listeners = new Set();

function updateAndPersistContent(newContent) {
  cachedContent = newContent;
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(CONTENT_CACHE_KEY, JSON.stringify(newContent));
    } catch (e) {}
  }
  listeners.forEach(fn => fn(cachedContent));
}

let cmsChannel = null;
try {
  if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
    cmsChannel = new BroadcastChannel('maytri_cms_sync_channel');
    cmsChannel.onmessage = (event) => {
      if (event.data && event.data.type === 'CONTENT_UPDATED' && event.data.content) {
        const merged = {
          ...DEFAULT_CONTENT,
          ...event.data.content,
          projectsSection: {
            ...DEFAULT_CONTENT.projectsSection,
            ...(event.data.content.projectsSection || {}),
            items: (Array.isArray(event.data.content.projectsSection?.items) && event.data.content.projectsSection.items.length > 0)
              ? event.data.content.projectsSection.items
              : DEFAULT_CONTENT.projectsSection.items
          }
        };
        updateAndPersistContent(merged);
      }
    };
  }
} catch (e) {}

export async function fetchWebsiteContent() {
  try {
    const res = await fetch(`${API_BASE_URL}/content`);
    if (!res.ok) throw new Error('API fetch failed');
    const json = await res.json();
    if (json.success && json.data) {
      const merged = {
        ...DEFAULT_CONTENT,
        ...json.data,
        hero: { ...DEFAULT_CONTENT.hero, ...(json.data.hero || {}) },
        about: { ...DEFAULT_CONTENT.about, ...(json.data.about || {}) },
        clubhouse: { ...DEFAULT_CONTENT.clubhouse, ...(json.data.clubhouse || {}) },
        contact: { ...DEFAULT_CONTENT.contact, ...(json.data.contact || {}) },
        brochure: { ...DEFAULT_CONTENT.brochure, ...(json.data.brochure || {}) },
        amenitiesSection: { ...DEFAULT_CONTENT.amenitiesSection, ...(json.data.amenitiesSection || {}) },
        projectsSection: {
          ...DEFAULT_CONTENT.projectsSection,
          ...(json.data.projectsSection || {}),
          items: (Array.isArray(json.data.projectsSection?.items) && json.data.projectsSection.items.length > 0)
            ? json.data.projectsSection.items
            : DEFAULT_CONTENT.projectsSection.items
        }
      };
      updateAndPersistContent(merged);
      return merged;
    }
  } catch (err) {
    // Graceful fallback
  }
  return cachedContent || DEFAULT_CONTENT;
}

export function useWebsiteContent() {
  const [content, setContent] = useState(cachedContent || DEFAULT_CONTENT);

  useEffect(() => {
    fetchWebsiteContent().then(setContent);

    const handler = (newContent) => setContent(newContent);
    listeners.add(handler);
    return () => listeners.delete(handler);
  }, []);

  return content;
}
