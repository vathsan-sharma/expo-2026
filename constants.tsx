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
  { id: 'tourism', title: 'Tourism & Hospitality', description: 'Asia – Canada Travel links; Tourism & Travel Investments.', icon: <Palmtree />, subsectors: ['Tourism Infrastructure', 'Sustainable Travel', 'Hospitality Tech'] },
  { id: 'ai', title: 'AI & Technology', description: 'Smart Tech & Digital Innovation; Asia – CanadaTech Collaboration.', icon: <Cpu />, subsectors: ['SaaS & FinTech', 'Smart City Solutions', 'Cross-border R&D'] },
  { id: 'lifestyle', title: 'Lifestyle', description: 'Fashion & Jewelry; Precious stones; Porcelain products.', icon: <Gem />, subsectors: ['Ethical Fashion', 'Gems & Jewelry', 'Luxury Goods'] },
  { id: 'energy', title: 'Energy & Sustainability', description: 'Oil & Gas Innovations; Clean tech; Green Partnerships.', icon: <Droplets />, subsectors: ['Renewables', 'Carbon Management', 'Green Infrastructure'] },
  { id: 'partnerships', title: 'Partnerships & Expansion', description: 'Canada– Asia Trade alliances and joint ventures; Market Growth.', icon: <Handshake />, subsectors: ['Joint Ventures', 'Regulatory Navigation', 'Strategic Alliances'] },
  { id: 'agriculture', title: 'Agriculture & Food Security', description: 'Agro tech & Sustainable Food Systems.', icon: <Leaf />, subsectors: ['Precision Farming', 'Supply Chain Tech', 'Food Export'] },
  { id: 'knowledge', title: 'Knowledge Exchange', description: 'Research Collaboration; Global talent development.', icon: <GraduationCap />, subsectors: ['EdTech', 'Corporate Training', 'Academic Research'] },
  { id: 'trade', title: 'Trade & Investment', description: 'Supply chain integration; Imports & Exports; Canada– Asia Investment Ties.', icon: <BarChart3 />, subsectors: ['Trade Finance', 'FDI Consulting', 'Global Logistics'] }
];

export const COUNTRIES: Country[] = [
  { 
    id: 'canada', 
    name: 'Canada', 
    flag: '🇨🇦', 
    summary: 'Natural resources, Manufacturing, Technology.', 
    strengths: ['Natural Resources', 'Manufacturing', 'Technology'],
    investmentAreas: ['Clean Energy', 'AI & Quantum Computing', 'Critical Minerals'],
    tradeOpportunities: ['Tech Export', 'Raw Material Supply', 'Joint R&D']
  },
  { 
    id: 'srilanka', 
    name: 'Sri Lanka', 
    flag: '🇱🇰', 
    summary: 'Apparel | IT, Tourism | Education.', 
    strengths: ['Apparel', 'IT', 'Tourism', 'Education'],
    investmentAreas: ['Port City Development', 'Renewable Energy', 'Tech Parks'],
    tradeOpportunities: ['Apparel Sourcing', 'IT Outsourcing', 'Ceylon Tea Export']
  },
  { 
    id: 'philippines', 
    name: 'Philippines', 
    flag: '🇵🇭', 
    summary: 'Energy | BPO, Fintech.', 
    strengths: ['Energy', 'BPO', 'Fintech'],
    investmentAreas: ['Digital Infrastructure', 'Renewable Energy', 'Manufacturing'],
    tradeOpportunities: ['BPO Services', 'Electronics Export', 'Fintech Partnerships']
  },
  { 
    id: 'indonesia', 
    name: 'Indonesia', 
    flag: '🇮🇩', 
    summary: 'Natural Resources, E-commerce, Infrastructure.', 
    strengths: ['Natural Resources', 'E-commerce', 'Infrastructure'],
    investmentAreas: ['Nickel Processing', 'New Capital City', 'Digital Economy'],
    tradeOpportunities: ['Commodity Trade', 'E-commerce Expansion', 'Infrastructure Dev']
  },
  { 
    id: 'thailand', 
    name: 'Thailand', 
    flag: '🇹🇭', 
    summary: 'Automotive | Tourism, Technology.', 
    strengths: ['Automotive', 'Tourism', 'Technology'],
    investmentAreas: ['Eastern Economic Corridor', 'EV Manufacturing', 'Smart Electronics'],
    tradeOpportunities: ['Auto Parts Supply', 'Food Processing', 'Medical Tourism']
  },
  { 
    id: 'pakistan', 
    name: 'Pakistan', 
    flag: '🇵🇰', 
    summary: 'Agriculture | Textiles, Cement.', 
    strengths: ['Agriculture', 'Textiles', 'Cement'],
    investmentAreas: ['Special Economic Zones', 'IT Services', 'Agro-processing'],
    tradeOpportunities: ['Textile Export', 'Surgical Instruments', 'Software Dev']
  },
  { 
    id: 'vietnam', 
    name: 'Vietnam', 
    flag: '🇻🇳', 
    summary: 'Manufacturing, Electronics | Agriculture.', 
    strengths: ['Manufacturing', 'Electronics', 'Agriculture'],
    investmentAreas: ['High-tech Manufacturing', 'Logistics Hubs', 'Energy Transition'],
    tradeOpportunities: ['Electronics Supply Chain', 'Footwear Export', 'Coffee Trade']
  },
  { 
    id: 'malaysia', 
    name: 'Malaysia', 
    flag: '🇲🇾', 
    summary: 'Oil & Gas, Finance.', 
    strengths: ['Oil & Gas', 'Finance'],
    investmentAreas: ['Semiconductor Hub', 'Islamic Finance', 'Digital Transformation'],
    tradeOpportunities: ['Halal Industry', 'Palm Oil Products', 'Tech Services']
  }
];

export const PARTNER_SKYLINES: Record<string, string> = {
  canada: "https://images.unsplash.com/photo-1506970845246-18f21d533b20?auto=format&fit=crop&q=80&w=1200",
  srilanka: "https://images.unsplash.com/photo-1529154036614-a60975f5c760?auto=format&fit=crop&q=80&w=1200",
  indonesia: "https://images.unsplash.com/photo-1555899434-94d1368aa7af?auto=format&fit=crop&q=80&w=1200",
  thailand: "https://images.unsplash.com/photo-1501179691627-eeaa65ea017c?auto=format&fit=crop&q=80&w=1200",
  pakistan: "https://images.unsplash.com/photo-1569330112438-3b90189a8ce1?auto=format&fit=crop&q=80&w=1200",
  vietnam: "https://images.unsplash.com/photo-1509030450996-93f25ef2499a?auto=format&fit=crop&q=80&w=1200",
  philippines: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&q=80&w=1200",
  malaysia: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&q=80&w=1200"
};

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
