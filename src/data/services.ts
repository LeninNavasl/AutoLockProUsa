import type { ImageMetadata } from 'astro';
import ignitionRepairImg from '@assets/images/ignition-repair.jpg';
import keyFobProgrammingImg from '@assets/images/key-fob-programming.jpg';
import laserKeyCutterImg from '@assets/images/laser-key-cutter.jpg';
import lockoutServiceImg from '@assets/images/lockout-service.jpg';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  badge: string;
  subBadge: string;
  icon: string;
  iconBg: 'primary' | 'emergency' | 'success' | 'surface';
  image: ImageMetadata;
  imageAlt: string;
  guaranteeText: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'car-lockouts',
    title: 'Emergency Vehicle Entry',
    shortDesc: 'Emergency lockouts handled on-site without scratch or window damage.',
    fullDesc:
      'Rapid, non-destructive lockout service for cars, trucks, SUVs, and commercial vehicles. Specializing in deadlocked systems and trunk releases with damage-free techniques.',
    badge: '100% Non-Destructive',
    subBadge: 'PRIORITY DISPATCH',
    icon: 'lock_open',
    iconBg: 'primary',
    image: lockoutServiceImg,
    imageAlt:
      'Automotive locksmith using specialized non-destructive tools on a modern car door handle',
    guaranteeText: '100% Damage-Free Guarantee'
  },
  {
    id: 'smart-keys',
    title: 'Smart Key & Push-to-Start Remote Programming',
    shortDesc: 'Transponder chip programming, duplicate fobs, and push-to-start keys.',
    fullDesc:
      'On-site programming for modern proximity keys, intelligent key fobs, and transponder chips. Bypasses the need for expensive vehicle towing to a dealership.',
    badge: 'All Makes & Models',
    subBadge: 'OBD-II SYNC',
    icon: 'key',
    iconBg: 'emergency',
    image: keyFobProgrammingImg,
    imageAlt:
      'Diagnostic tablet plugged into a vehicle OBD-II port programming a new smart proximity key fob',
    guaranteeText: 'Proximity & Fob Key Coding'
  },
  {
    id: 'laser-cut-keys',
    title: 'Laser Cut Keys & High-Security Duplication',
    shortDesc: 'Fully equipped mobile service vans rolling with computerized laser cutters.',
    fullDesc:
      'Computerized mobile CNC key milling for high-security sidewinder and laser-cut automotive keys. Exact factory specifications guaranteed on-site.',
    badge: 'Laser Precision',
    subBadge: 'CNC MILLING',
    icon: 'precision_manufacturing',
    iconBg: 'surface',
    image: laserKeyCutterImg,
    imageAlt:
      'Automated computerized laser key cutting machine carving high-security grooves into a blank car key',
    guaranteeText: 'Factory Tolerances Restored'
  },
  {
    id: 'ignition-repair',
    title: 'Ignition Switch & Door Lock Cylinder Service',
    shortDesc:
      'Repair and replacement for jammed tumblers, broken key extractions, and unresponsive ignitions.',
    fullDesc:
      'Repair and replacement for jammed tumblers, broken key extractions, and unresponsive ignitions. Drive away without expensive dealership rebuilds or steering column tow-ins.',
    badge: 'Steering Col Service',
    subBadge: 'RE-KEYING',
    icon: 'build',
    iconBg: 'success',
    image: ignitionRepairImg,
    imageAlt:
      'Technician servicing an automotive ignition switch assembly in a car steering column',
    guaranteeText: 'Re-keying & Jam Relief'
  }
];
