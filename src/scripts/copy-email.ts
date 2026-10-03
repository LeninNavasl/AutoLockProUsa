/**
 * Progressive Copy-to-Clipboard handler for dispatch email
 * Provides accessible feedback via aria-live announcement.
 */

export function setupEmailCopy(): void {
  const btn = document.getElementById('copy-email-btn');
  const feedback = document.getElementById('copy-feedback');

  if (!btn) return;

  btn.addEventListener('click', async () => {
    const email = btn.getAttribute('data-email') || 'dispatch@autolockprousa.com';

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email);
      } else {
        // Fallback for older environments
        const textArea = document.createElement('textarea');
        textArea.value = email;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }

      btn.classList.add('btn-copied');
      const textSpan = btn.querySelector('.btn-copy-text');
      if (textSpan) textSpan.textContent = 'Copied to Clipboard!';

      if (feedback) {
        feedback.textContent = `Email ${email} copied to clipboard!`;
      }

      setTimeout(() => {
        btn.classList.remove('btn-copied');
        if (textSpan) textSpan.textContent = 'Copy Email Address';
        if (feedback) feedback.textContent = '';
      }, 3500);
    } catch (err) {
      console.error('Failed to copy email to clipboard', err);
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupEmailCopy);
} else {
  setupEmailCopy();
}
