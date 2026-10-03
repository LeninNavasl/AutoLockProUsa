/**
 * Contact link helpers and URI sanitization
 * Ensures tel: and mailto: protocols are safely formed without protocol injection.
 */

export function cleanPhoneNumber(phone: string): string {
  return phone.replace(/\D/g, '');
}

export function formatTelHref(phone: string): string {
  const digits = cleanPhoneNumber(phone);
  if (!digits) {
    throw new Error('Invalid phone number: no digits found.');
  }
  // If 10 digits (US area + number), prepend standard US prefix if needed or format
  return `tel:${digits}`;
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function formatMailtoHref(email: string, subject?: string): string {
  const trimmed = email.trim();
  if (!isValidEmail(trimmed)) {
    throw new Error(`Invalid email address: ${trimmed}`);
  }
  if (!subject) {
    return `mailto:${trimmed}`;
  }
  return `mailto:${trimmed}?subject=${encodeURIComponent(subject)}`;
}
