import { useState, useEffect } from 'react';

// Cloudinary Media Configuration & Dynamic Cloud Fetcher
// Connected to Cloudinary Cloud: s8b4ps7b

export const getApiBaseUrl = () => {
  const envUrl = (typeof process !== 'undefined' && process.env?.REACT_APP_API_URL) || 
                 (typeof import.meta !== 'undefined' && import.meta.env?.VITE_API_URL);
  if (envUrl) {
    const clean = envUrl.replace(/\/+$/, '');
    return clean.endsWith('/api') ? clean : `${clean}/api`;
  }
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
      return 'http://localhost:5000/api';
    }
  }
  return 'https://api.maytriambhuja.in/api';
};

export const API_BASE_URL = getApiBaseUrl();

export const CLOUDINARY_MEDIA = {
  // Brand & Logos
  logo: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1788786505/maytri_ambhuja/brand/ambhuja_logo.png',
  sanghiLogo: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1789064425/maytri_ambhuja/brand/sanghicity_logo.png',
  heroPoster: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1788786507/maytri_ambhuja/brand/hero_poster.jpg',
  heroBgImage: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1788786507/maytri_ambhuja/brand/hero_poster.jpg',
  ctaPoster: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1788786509/maytri_ambhuja/brand/cta_poster.jpg',
  ctaBgImage: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1788786509/maytri_ambhuja/brand/cta_poster.jpg',
  
  // Streaming Optimized Videos on Cloudinary CDN
  heroVideo: 'https://res.cloudinary.com/s8b4ps7b/video/upload/v1788786606/maytri_ambhuja/videos/hero_video.mp4',
  ctaVideo: 'https://res.cloudinary.com/s8b4ps7b/video/upload/v1788786656/maytri_ambhuja/videos/cta_video.mp4',

  // Floor Plans
  floorplans: {
    east222Ground: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1789064446/maytri_ambhuja/floorplans/222_east_ground.webp',
    east222First: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1789064448/maytri_ambhuja/floorplans/222_east_first.webp',
    east222Terrace: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1789064449/maytri_ambhuja/floorplans/222_east_terrace.webp',
    west222Ground: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1789064450/maytri_ambhuja/floorplans/222_west_ground.jpg',
    west222First: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1789064452/maytri_ambhuja/floorplans/222_west_first.jpg',
    west222Terrace: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1789064453/maytri_ambhuja/floorplans/222_west_terrace.jpg',
    east300Ground: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1789064455/maytri_ambhuja/floorplans/300_east_ground.jpg',
    east300First: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1789064456/maytri_ambhuja/floorplans/300_east_first.jpg',
    east300Terrace: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1789064457/maytri_ambhuja/floorplans/300_east_terrace.jpg',
    west300Ground: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1789064458/maytri_ambhuja/floorplans/300_west_ground.jpg',
    west300First: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1789064459/maytri_ambhuja/floorplans/300_west_first.jpg',
    west300Terrace: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1789064461/maytri_ambhuja/floorplans/300_west_terrace.jpg',
  },

  // Clubhouse Specific Renders
  clubhouse: {
    frontPanorama: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1789064427/maytri_ambhuja/clubhouse/clubhouse_front_panorama.webp',
    poolAerial: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1789064428/maytri_ambhuja/clubhouse/clubhouse_pool_aerial.webp',
    eveningElevation: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1789064429/maytri_ambhuja/clubhouse/clubhouse_evening_elevation.webp',
    courtyardLawn: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1789064430/maytri_ambhuja/clubhouse/clubhouse_courtyard_lawn.webp',
  },

  // Villa & Community Elevations
  elevations: {
    elevation01: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1789064432/maytri_ambhuja/elevations/elevation_01.webp',
    elevation02: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1789064433/maytri_ambhuja/elevations/elevation_02.webp',
    elevation03: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1789064435/maytri_ambhuja/elevations/elevation_03.webp',
    elevation04: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1789064436/maytri_ambhuja/elevations/elevation_04.webp',
    elevation05: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1789064437/maytri_ambhuja/elevations/elevation_05.webp',
    elevation06: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1789064438/maytri_ambhuja/elevations/elevation_06.webp',
    elevation07: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1789064440/maytri_ambhuja/elevations/elevation_07.webp',
    pool: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1789064442/maytri_ambhuja/elevations/elevation_pool.webp',
    cricketPitch: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1789064443/maytri_ambhuja/elevations/elevation_cricket_pitch.webp',
    parkDay: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1789064444/maytri_ambhuja/elevations/elevation_park_day.webp',
  },

  // Gallery & Clubhouse Showcase Images
  gallery: [
    {
      id: 1,
      title: 'Grand 90,000 SFT Club House & Pool',
      subtitle: '90,000 Sq.Ft of Unmatched Opulence with Infinity Pool Deck',
      category: 'Clubhouse',
      tag: 'Grand Facade',
      url: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1789064427/maytri_ambhuja/clubhouse/clubhouse_front_panorama.webp',
    },
    {
      id: 2,
      title: 'Resort Style Pool & Sun Deck',
      subtitle: 'Grand Swimming Pool with Loungers & Private Cabanas',
      category: 'Aquatics',
      tag: 'Sun Deck',
      url: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1789064428/maytri_ambhuja/clubhouse/clubhouse_pool_aerial.webp',
    },
    {
      id: 3,
      title: 'Illuminated Evening Clubhouse Elevation',
      subtitle: 'Breathtaking Night View with Poolside Reflection',
      category: 'Architecture',
      tag: 'Night Elevation',
      url: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1789064429/maytri_ambhuja/clubhouse/clubhouse_evening_elevation.webp',
    },
    {
      id: 4,
      title: 'Landscaped Courtyard & Central Lawn',
      subtitle: 'Lush Green Courtyard Promenade with Palm Trees',
      category: 'Landscaping',
      tag: 'Central Lawn',
      url: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1789064430/maytri_ambhuja/clubhouse/clubhouse_courtyard_lawn.webp',
    },
    {
      id: 5,
      title: 'Indoor International Multi-Sport Arena',
      subtitle: 'Hardwood Badminton Courts & Squash',
      category: 'Sports',
      tag: 'Sports Arena',
      url: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1788786519/maytri_ambhuja/gallery/gallery_005.jpg',
    },
    {
      id: 6,
      title: 'Boutique Executive Air-Conditioned Guest Suites',
      subtitle: 'Hotel-Grade Hospitality for Relatives & Guests',
      category: 'Suites',
      tag: 'Guest Suites',
      url: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1788786520/maytri_ambhuja/gallery/gallery_006.jpg',
    },
    {
      id: 7,
      title: 'Children\'s Creative Activity Creche & Play Zone',
      subtitle: 'Safe, Monitored Edutainment for Toddlers & Kids',
      category: 'Kids Zone',
      tag: 'Kids Arena',
      url: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1788786522/maytri_ambhuja/gallery/gallery_007.jpg',
    },
    {
      id: 8,
      title: 'Private 4K Dolby Atmos Acoustic Preview Theatre',
      subtitle: 'Recliner Seating for Private Movie Screenings',
      category: 'Entertainment',
      tag: 'Preview Theatre',
      url: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1788786523/maytri_ambhuja/gallery/gallery_008.jpg',
    },
    {
      id: 9,
      title: 'State-of-the-Art Technogym Fitness Center',
      subtitle: 'Cardio, Strength & Dedicated CrossFit Studio',
      category: 'Fitness',
      tag: 'Fitness Center',
      url: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1788786525/maytri_ambhuja/gallery/gallery_009.jpg',
    },
    {
      id: 10,
      title: 'Starlit Rooftop Sky Lounge & Alfresco Deck',
      subtitle: 'Panoramic 360° Views of Hyderabad Skyline',
      category: 'Lounge',
      tag: 'Sky Lounge',
      url: 'https://res.cloudinary.com/s8b4ps7b/image/upload/v1788786526/maytri_ambhuja/gallery/gallery_010.jpg',
    },
  ]
};

// API Key to nested path mapping for reactive updates
export const API_KEY_TO_NESTED_PATH = {
  // Brand & Logos
  logo: ['logo'],
  brandLogo: ['logo'],
  sanghiLogo: ['sanghiLogo'],
  ambhujaLogo: ['sanghiLogo'],
  heroPoster: ['heroPoster'],
  heroBgImage: ['heroBgImage'],
  heroVideo: ['heroVideo'],
  ctaPoster: ['ctaPoster'],
  ctaBgImage: ['ctaBgImage'],
  ctaVideo: ['ctaVideo'],

  // Clubhouse (both snake_case and camelCase keys)
  clubhouse_front_panorama: ['clubhouse', 'frontPanorama'],
  frontPanorama: ['clubhouse', 'frontPanorama'],
  clubhouse_pool_aerial: ['clubhouse', 'poolAerial'],
  poolAerial: ['clubhouse', 'poolAerial'],
  clubhouse_evening_elevation: ['clubhouse', 'eveningElevation'],
  eveningElevation: ['clubhouse', 'eveningElevation'],
  clubhouse_courtyard_lawn: ['clubhouse', 'courtyardLawn'],
  courtyardLawn: ['clubhouse', 'courtyardLawn'],

  // Elevations (both snake_case and camelCase keys)
  elevation_01: ['elevations', 'elevation01'],
  elevation01: ['elevations', 'elevation01'],
  elevation_02: ['elevations', 'elevation02'],
  elevation02: ['elevations', 'elevation02'],
  elevation_03: ['elevations', 'elevation03'],
  elevation03: ['elevations', 'elevation03'],
  elevation_04: ['elevations', 'elevation04'],
  elevation04: ['elevations', 'elevation04'],
  elevation_05: ['elevations', 'elevation05'],
  elevation05: ['elevations', 'elevation05'],
  elevation_06: ['elevations', 'elevation06'],
  elevation06: ['elevations', 'elevation06'],
  elevation_07: ['elevations', 'elevation07'],
  elevation07: ['elevations', 'elevation07'],
  elevation_pool: ['elevations', 'pool'],
  pool: ['elevations', 'pool'],
  elevation_cricket_pitch: ['elevations', 'cricketPitch'],
  cricketPitch: ['elevations', 'cricketPitch'],
  elevation_park_day: ['elevations', 'parkDay'],
  parkDay: ['elevations', 'parkDay'],

  // Floor Plans (both snake_case and camelCase keys)
  floorplan_222_east_ground: ['floorplans', 'east222Ground'],
  east222Ground: ['floorplans', 'east222Ground'],
  floorplan_222_east_first: ['floorplans', 'east222First'],
  east222First: ['floorplans', 'east222First'],
  floorplan_222_east_terrace: ['floorplans', 'east222Terrace'],
  east222Terrace: ['floorplans', 'east222Terrace'],

  floorplan_222_west_ground: ['floorplans', 'west222Ground'],
  west222Ground: ['floorplans', 'west222Ground'],
  floorplan_222_west_first: ['floorplans', 'west222First'],
  west222First: ['floorplans', 'west222First'],
  floorplan_222_west_terrace: ['floorplans', 'west222Terrace'],
  west222Terrace: ['floorplans', 'west222Terrace'],

  floorplan_300_east_ground: ['floorplans', 'east300Ground'],
  east300Ground: ['floorplans', 'east300Ground'],
  floorplan_300_east_first: ['floorplans', 'east300First'],
  east300First: ['floorplans', 'east300First'],
  floorplan_300_east_terrace: ['floorplans', 'east300Terrace'],
  east300Terrace: ['floorplans', 'east300Terrace'],

  floorplan_300_west_ground: ['floorplans', 'west300Ground'],
  west300Ground: ['floorplans', 'west300Ground'],
  floorplan_300_west_first: ['floorplans', 'west300First'],
  west300First: ['floorplans', 'west300First'],
  floorplan_300_west_terrace: ['floorplans', 'west300Terrace'],
  west300Terrace: ['floorplans', 'west300Terrace'],
};

// Dynamic Media Cache and Real-Time Cross-Tab Synchronization
const MEDIA_CACHE_KEY = 'maytri_website_media_cache_v2';

function applyMapToMedia(target, map) {
  if (!map || typeof map !== 'object') return;
  for (const [apiKey, url] of Object.entries(map)) {
    const path = API_KEY_TO_NESTED_PATH[apiKey];
    if (path && path.length === 1) {
      target[path[0]] = url;
    } else if (path && path.length === 2) {
      if (target[path[0]] && typeof target[path[0]] === 'object' && !Array.isArray(target[path[0]])) {
        target[path[0]][path[1]] = url;
      }
    } else {
      target[apiKey] = url;
    }
  }
}

function getInitialCachedMedia() {
  try {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(MEDIA_CACHE_KEY);
      if (stored) {
        const map = JSON.parse(stored);
        const merged = JSON.parse(JSON.stringify(CLOUDINARY_MEDIA));
        applyMapToMedia(merged, map);
        applyMapToMedia(CLOUDINARY_MEDIA, map);
        return merged;
      }
    }
  } catch (e) {
    console.warn('Error reading media cache:', e);
  }
  return null;
}

let cachedMedia = getInitialCachedMedia();
const mediaListeners = new Set();
let cmsMediaChannel = null;

try {
  if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
    cmsMediaChannel = new BroadcastChannel('maytri_cms_sync_channel');
    cmsMediaChannel.onmessage = (event) => {
      if (event.data?.type === 'MEDIA_UPDATED' || event.data?.type === 'CONTENT_UPDATED') {
        fetchWebsiteMedia();
      }
    };
  }
} catch (e) {
  console.warn('BroadcastChannel not supported', e);
}

export async function fetchWebsiteMedia() {
  try {
    const baseUrl = getApiBaseUrl();
    const res = await fetch(`${baseUrl}/media`);
    if (!res.ok) throw new Error('API fetch failed');
    const json = await res.json();
    if (json.success && json.map) {
      const merged = JSON.parse(JSON.stringify(CLOUDINARY_MEDIA));
      applyMapToMedia(merged, json.map);
      applyMapToMedia(CLOUDINARY_MEDIA, json.map);

      try {
        if (typeof window !== 'undefined') {
          localStorage.setItem(MEDIA_CACHE_KEY, JSON.stringify(json.map));
        }
      } catch (e) {}

      cachedMedia = merged;
      mediaListeners.forEach((fn) => fn(cachedMedia));
      return cachedMedia;
    }
  } catch (err) {
    console.warn('Dynamic media fetch fallback to static:', err.message);
  }
  return cachedMedia || CLOUDINARY_MEDIA;
}

export async function getDynamicCloudMedia() {
  return fetchWebsiteMedia();
}

export function useWebsiteMedia() {
  const [media, setMedia] = useState(() => cachedMedia || getInitialCachedMedia() || CLOUDINARY_MEDIA);

  useEffect(() => {
    const listener = (newMedia) => setMedia(newMedia);
    mediaListeners.add(listener);

    fetchWebsiteMedia();

    return () => {
      mediaListeners.delete(listener);
    };
  }, []);

  return media;
}
