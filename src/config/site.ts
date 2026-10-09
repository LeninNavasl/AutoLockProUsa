export interface NavItem {
  label: string;
  href: string;
  icon: string;
}

export interface StateLicense {
  state: string;
  code: string;
}

export interface SocialLinks {
  facebook?: string;
  instagram?: string;
  twitter?: string;
  linkedin?: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  phoneDisplay: string;
  phoneRaw: string;
  email: string;
  domain: string;
  operatingHours: string;
  responseWindow: string;
  ratingValue: string;
  reviewCount: string;
  navItems: NavItem[];
  licenses: StateLicense[];
  social: SocialLinks;
}

export const SITE_CONFIG: SiteConfig = {
  name: 'AutoLock Pro USA',
  shortName: 'AutoLock Pro',
  tagline: 'USA Dispatch · 24/7 Nationwide Mobile Automotive Locksmith',
  description:
    'Fast car key replacement, transponder fob programming, laser key cutting, and damage-free vehicle lockout assistance dispatched directly to your roadside location across all 50 states.',
  phoneDisplay: '(800) 555-0199',
  phoneRaw: '18005550199',
  email: 'autolockprousa@autolockprousa.com',
  domain: 'https://autolockprousa.com',
  operatingHours: '24 Hours / 7 Days / 365 Days',
  responseWindow: '15–30 Minutes',
  ratingValue: '4.9',
  reviewCount: '1,420',
  navItems: [
    { label: 'Home', href: '/', icon: 'home' },
    { label: 'Services', href: '/services/', icon: 'key' },
    { label: 'Blog', href: '/blog/', icon: 'article' },
    { label: 'Contact', href: '/contact/', icon: 'support_agent' }
  ],
  licenses: [
    { state: 'TX', code: 'B18942' },
    { state: 'CA', code: 'LCO-6102' },
    { state: 'IL', code: '192.000421' },
    { state: 'FL', code: 'Bonded & Insured' }
  ],
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=61595108823254'
  }
};
