export interface TestimonialItem {
  id: string;
  author: string;
  location: string;
  vehicle: string;
  rating: number;
  badge: string;
  quote: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'review-1',
    author: 'Marcus T.',
    location: 'Dallas, TX',
    vehicle: '2022 Ford F-150',
    rating: 5,
    badge: 'Verified Roadside Callout',
    quote:
      'Locked my keys inside the trunk at a highway rest stop. The mobile technician arrived in 20 minutes and had the vehicle opened in under 60 seconds without a single mark on the door frame.'
  },
  {
    id: 'review-2',
    author: 'Sarah L.',
    location: 'Phoenix, AZ',
    vehicle: '2021 Honda Civic',
    rating: 5,
    badge: 'Verified Roadside Callout',
    quote:
      'The dealership wanted $450 and a 4-day wait for a replacement smart key. AutoLock Pro cut and paired a new OEM transponder fob right in my driveway in 25 minutes.'
  },
  {
    id: 'review-3',
    author: 'David K.',
    location: 'Columbus, OH',
    vehicle: '2019 Toyota RAV4',
    rating: 5,
    badge: 'Verified Roadside Callout',
    quote:
      'My key snapped off inside the ignition tumbler right after work. Technician extracted the broken piece and re-keyed the tumbler on the spot. Saved me an enormous towing bill.'
  }
];
