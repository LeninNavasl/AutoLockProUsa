import { describe, expect, it } from 'vitest';
import {
  cleanPhoneNumber,
  formatMailtoHref,
  formatSocialHref,
  formatTelHref,
  isValidEmail,
  isValidHttpsUrl
} from '../src/lib/contact';

describe('Contact Utilities', () => {
  it('cleanPhoneNumber removes non-digits', () => {
    expect(cleanPhoneNumber('(800) 555-0199')).toBe('8005550199');
    expect(cleanPhoneNumber('+1 (800) 555-0199')).toBe('18005550199');
  });

  it('formatTelHref formats valid tel URI', () => {
    expect(formatTelHref('(800) 555-0199')).toBe('tel:8005550199');
    expect(formatTelHref('1-800-555-0199')).toBe('tel:18005550199');
  });

  it('formatTelHref throws on empty or invalid phone', () => {
    expect(() => formatTelHref('abc')).toThrow();
  });

  it('isValidEmail detects valid and invalid formats', () => {
    expect(isValidEmail('autolockprousa@autolockprousa.com')).toBe(true);
    expect(isValidEmail('invalid-email')).toBe(false);
    expect(isValidEmail('test@domain')).toBe(false);
  });

  it('formatMailtoHref formats clean mailto links', () => {
    expect(formatMailtoHref('autolockprousa@autolockprousa.com')).toBe(
      'mailto:autolockprousa@autolockprousa.com'
    );
    expect(formatMailtoHref('autolockprousa@autolockprousa.com', 'Emergency Service')).toBe(
      'mailto:autolockprousa@autolockprousa.com?subject=Emergency%20Service'
    );
  });

  it('isValidHttpsUrl validates secure URLs correctly', () => {
    expect(isValidHttpsUrl('https://www.facebook.com/profile.php?id=61595108823254')).toBe(true);
    expect(isValidHttpsUrl('http://insecure.com')).toBe(false);
    expect(isValidHttpsUrl('javascript:alert(1)')).toBe(false);
    expect(isValidHttpsUrl('not-a-url')).toBe(false);
  });

  it('formatSocialHref validates and returns clean HTTPS URL', () => {
    const fbUrl = 'https://www.facebook.com/profile.php?id=61595108823254';
    expect(formatSocialHref(fbUrl)).toBe(fbUrl);
    expect(() => formatSocialHref('http://insecure-site.com')).toThrow();
  });
});
