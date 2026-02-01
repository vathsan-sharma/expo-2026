import React from 'react';
import { 
  Palmtree, Cpu, Gem, Droplets, Handshake, Leaf, GraduationCap, BarChart3, 
  Users, Globe, TrendingUp, Presentation, Briefcase, Zap, Trophy, MessageSquare, 
  Mic2, Star, ShieldCheck, MapPin, Plane, Car, Train, Hotel, Info
} from 'lucide-react';
import { Sector, Country, Feature, Milestone, Speaker, Testimonial, FAQItem } from './types';

export const CONTACT_INFO = {
  name: "Asia’s Emerging Economies Expo 2026",
  tagline: "Gateway to Asia’s Expansion",
  phone: '(416) 902 9462',
  email: 'kula@csbconvention.org',
  address: '100 Princess Blvd, Toronto, ON, M6K 3C3',
  dates: 'October 15–17, 2026',
  organizer: 'CSB Convention'
};

export const HIGHLIGHTS: Feature[] = [
  { title: "200+ International Exhibitors", description: "Connect with leading companies showcasing cutting-edge products and services.", icon: <Globe /> },
  { title: "50+ Country Delegations", description: "Meet government officials and trade representatives from across Asia and Canada.", icon: <ShieldCheck /> },
  { title: "B2B Matchmaking", description: "Participate in pre-scheduled one-on-one meetings with potential partners.", icon: <MessageSquare /> },
  { title: "Industry Expert Panels", description: "Gain insights from thought leaders and industry veterans on trade trends.", icon: <Mic2 /> },
  { title: "Cultural Performances", description: "Experience the rich diversity of global cultures through live music and dance.", icon: <Star /> },
  { title: "Networking Opportunities", description: "Build valuable connections at exclusive networking events and gala dinners.", icon: <Users /> },
  { title: "Market Intelligence", description: "Access comprehensive market research reports and industry trends.", icon: <BarChart3 /> },
  { title: "Knowledge Sharing", description: "Participate in workshops, masterclasses, and certification programs.", icon: <GraduationCap /> },
];

export const SECTORS: Sector[] = [
  { id: 'tourism', title: 'Tourism & Hospitality', description: 'Asia–Canada travel links; tourism & travel investments.', icon: <Palmtree />, subsectors: ['Tourism Infrastructure', 'Sustainable Travel', 'Hospitality Tech'] },
  { id: 'ai', title: 'AI & Technology', description: 'Smart tech, digital innovation; Asia–Canada tech collaboration.', icon: <Cpu />, subsectors: ['SaaS & FinTech', 'Smart City Solutions', 'Cross-border R&D'] },
  { id: 'lifestyle', title: 'Lifestyle', description: 'Fashion and jewelry; precious stones; porcelain products.', icon: <Gem />, subsectors: ['Ethical Fashion', 'Gems & Jewelry', 'Luxury Goods'] },
  { id: 'energy', title: 'Energy & Sustainability', description: 'Oil and gas innovations; clean tech; green partnerships.', icon: <Droplets />, subsectors: ['Renewables', 'Carbon Management', 'Green Infrastructure'] },
  { id: 'partnerships', title: 'Partnerships & Expansion', description: 'Canada–Asia trade alliances; joint ventures; market growth.', icon: <Handshake />, subsectors: ['Joint Ventures', 'Regulatory Navigation', 'Strategic Alliances'] },
  { id: 'agriculture', title: 'Agriculture & Food Security', description: 'Agrotech; sustainable food systems.', icon: <Leaf />, subsectors: ['Precision Farming', 'Supply Chain Tech', 'Food Export'] },
  { id: 'knowledge', title: 'Knowledge Exchange', description: 'Research collaboration; global talent development.', icon: <GraduationCap />, subsectors: ['EdTech', 'Corporate Training', 'Academic Research'] },
  { id: 'trade', title: 'Trade & Investment', description: 'Supply chain integration; imports & exports; Canada–Asia investment ties.', icon: <BarChart3 />, subsectors: ['Trade Finance', 'FDI Consulting', 'Global Logistics'] }
];

export const COUNTRIES: Country[] = [
  { id: 'canada', name: 'Canada', flag: '🇨🇦', summary: 'Natural resources, manufacturing, technology.', strengths: ['High-Tech Manufacturing', 'Natural Resources'] },
  { id: 'srilanka', name: 'Sri Lanka', flag: '🇱🇰', summary: 'Apparel, IT, tourism, education.', strengths: ['Apparel Exports', 'Software Development'] },
  { id: 'indonesia', name: 'Indonesia', flag: '🇮🇩', summary: 'Natural resources, e-commerce, infrastructure.', strengths: ['Digital Economy', 'Infrastructure Development'] },
  { id: 'thailand', name: 'Thailand', flag: '🇹🇭', summary: 'Automotive, tourism, technology.', strengths: ['Automotive Hub', 'Advanced Logistics'] },
  { id: 'pakistan', name: 'Pakistan', flag: '🇵🇰', summary: 'Agriculture, textiles, cement.', strengths: ['Textile Manufacturing', 'Agri-Exports'] },
  { id: 'vietnam', name: 'Vietnam', flag: '🇻🇳', summary: 'Manufacturing, electronics, agriculture.', strengths: ['Electronics Hub', 'Regional Manufacturing'] },
  { id: 'philippines', name: 'Philippines', flag: '🇵🇭', summary: 'Tourism & hospitality, energy, BPO, fintech.', strengths: ['Fintech Growth', 'Business Process Outsourcing'] },
  { id: 'malaysia', name: 'Malaysia', flag: '🇲🇾', summary: 'Oil & gas, finance, technology.', strengths: ['Islamic Finance', 'Energy Resources'] }
];

export const IMPACT_STATS: Milestone[] = [
  { value: '10', label: 'Countries Represented', icon: <Globe /> },
  { value: '41', label: 'International Exhibitors', icon: <Briefcase /> },
  { value: '1040+', label: 'Expected Attendees', icon: <Users /> },
  { value: '208+', label: 'B2B Meetings', icon: <MessageSquare /> }
];

export const GLOBAL_REACH = [
  { region: 'North America', value: 1 },
  { region: 'Europe', value: 0 },
  { region: 'Asia Pacific', value: 1 },
  { region: 'Africa', value: 0 },
  { region: 'Middle East', value: 0 }
];

export const SPEAKERS: Speaker[] = [
  { id: '1', name: 'TBA', role: 'Technology & Innovation Leader', company: 'Global Tech Corp', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200', topic: 'AI in Trade', expertise: ['AI in Trade', 'Digital Innovation', 'Future Tech'] },
  { id: '2', name: 'TBA', role: 'International Trade Expert', company: 'World Trade Org', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200', topic: 'Cross-border Commerce', expertise: ['Global Trade', 'Market Strategy', 'Policy'] },
  { id: '3', name: 'TBA', role: 'Investment & Finance Authority', company: 'Finanace Group', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200', topic: 'FDI Opportunities', expertise: ['Investment', 'Emerging Markets', 'FDI'] },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: '1', name: 'Amarjeet K', role: 'CEO', company: 'IndoCan Trade Solutions', quote: "The Asia's Emerging Economies Expo gave our company access to new markets and investors we wouldn't have met otherwise. Truly a game-changer!", image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100' },
];

export const FAQS: FAQItem[] = [
  { question: "What does my event badge include?", answer: "Your badge includes access to the expo floor, keynote sessions, and selected networking lounges based on your registration type." },
  { question: "Do I need a visa to attend? Can you provide support?", answer: "Visa requirements depend on your country of origin. We provide official invitation letters to registered attendees to support their application." },
  { question: "Where should I stay during the expo?", answer: "We have partnered with several hotels near the venue to offer discounted rates for our attendees." },
  { question: "How do I get to the Mississauga Convention Centre?", answer: "The venue is easily accessible by car, public transit, and is located near major highways and Pearson International Airport." },
];

export const MILESTONES: Milestone[] = [
  { value: '8', label: 'Countries', icon: <Globe /> },
  { value: '300', label: 'Businesses', icon: <Briefcase /> },
  { value: '50,000+', label: 'Expected Attendees', icon: <Users /> }
];

export const EXPERIENCE_FEATURES: Feature[] = [
  { title: 'Keynote Talks', description: 'Policymakers and industry leaders shaping Asia’s growth.', icon: <Mic2 /> },
  { title: 'B2B Matchmaking', description: 'Pre-arranged meetings between buyers, investors and exhibitors.', icon: <MessageSquare /> },
  { title: 'Country Presentations', description: 'Deep dives into strategies, flagship projects and incentives.', icon: <Presentation /> },
  { title: 'Project Discussions', description: 'Focused sessions on trade, infrastructure, technology and investment deals.', icon: <Zap /> }
];
