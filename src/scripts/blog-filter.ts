/**
 * Progressive blog category filter
 * Runs on client with 0 external dependencies.
 * If JS is disabled, all article cards remain visible.
 */

export function setupBlogFilter(): void {
  const container = document.getElementById('articles-container');
  const filterBar = document.getElementById('category-filter-bar');

  if (!container || !filterBar) return;

  const buttons = filterBar.querySelectorAll<HTMLButtonElement>('[data-category]');
  const cards = container.querySelectorAll<HTMLElement>('.article-card');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const category = button.getAttribute('data-category');
      if (!category) return;

      // Update active states on buttons
      buttons.forEach((btn) => {
        btn.classList.remove('filter-pill--active');
        btn.setAttribute('aria-pressed', 'false');
      });

      button.classList.add('filter-pill--active');
      button.setAttribute('aria-pressed', 'true');

      // Filter articles
      cards.forEach((card) => {
        const cardCats = card.getAttribute('data-category') || '';
        if (category === 'all' || cardCats.includes(category)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// Auto-run if DOM loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupBlogFilter);
} else {
  setupBlogFilter();
}
