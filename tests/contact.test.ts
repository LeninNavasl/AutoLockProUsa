import { describe, expect, it } from 'vitest';
import {
  cleanPhoneNumber,
  formatMailtoHref,
  formatTelHref,
  isValidEmail
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
    expect(isValidEmail('dispatch@autolockprousa.com')).toBe(true);
    expect(isValidEmail('invalid-email')).toBe(false);
    expect(isValidEmail('test@domain')).toBe(false);
  });

  it('formatMailtoHref formats clean mailto links', () => {
    expect(formatMailtoHref('dispatch@autolockprousa.com')).toBe(
      'mailto:dispatch@autolockprousa.com'
    );
    expect(formatMailtoHref('dispatch@autolockprousa.com', 'Emergency Service')).toBe(
      'mailto:dispatch@autolockprousa.com?subject=Emergency%20Service'
    );
  });
});
