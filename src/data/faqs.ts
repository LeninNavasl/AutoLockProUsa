export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    question: 'How fast does a mobile technician arrive?',
    answer:
      'Typical arrival time is between 15 to 30 minutes across major metro areas and highway corridors. Our nearest GPS-tracked mobile van is assigned immediately upon your call to the 24/7 dispatch desk.'
  },
  {
    question: 'Do you make keys for luxury or foreign vehicles?',
    answer:
      'Yes. Our mobile vans carry specialized European and domestic diagnostic programming computers compatible with Audi, BMW, Mercedes-Benz, Lexus, Ford, Chevrolet, Honda, Toyota, Hyundai, Subaru, Nissan, and commercial fleet vans.'
  },
  {
    question: 'What details do I need when calling dispatch?',
    answer:
      'Please have your vehicle year, make, model, current street location (or highway mile marker/landmark), and proof of ownership (driver license matching vehicle registration or insurance document) ready for verification.'
  },
  {
    question: 'Is your lockout entry process 100% damage-free?',
    answer:
      'Absolutely. All technicians use professional automotive bypass picks, precision lock decoders, and non-marring specialized polymer air jacks. We never break glass, scratch vehicle paint, or damage door weather seals.'
  },
  {
    question: 'What if I lost all keys with no spare available?',
    answer:
      'No problem. Our mobile locksmiths do not require an existing key. We decode your vehicle VIN or door cylinder tumblers directly on-site and cut fresh factory-specification keys with integrated transponder chip pairing.'
  }
];
