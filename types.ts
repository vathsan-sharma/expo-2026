
import React from 'react';

export interface NavItem {
  label: string;
  path: string;
}

export interface Milestone {
  value: string;
  label: string;
  icon: React.ReactNode;
  subValue?: string;
}

export interface Sector {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  subsectors?: string[];
}

export interface Country {
  id: string;
  name: string;
  flag: string;
  summary: string;
  strengths: string[];
  investmentAreas?: string[];
  tradeOpportunities?: string[];
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Speaker {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  topic: string;
  expertise: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Hotel {
  name: string;
  distance: string;
  image?: string;
}
