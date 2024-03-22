class ThemeChecker {
    constructor() {
      this.defaultTheme = 'auto';
      this.init();
    }
  
    toggleIcon(themeIcon) {
      if (themeIcon) {
        document.querySelectorAll('.theme-switcher').forEach((switcher) => {
          const _themeIcon = switcher.querySelector('svg');
          _themeIcon.innerHTML = '';
          _themeIcon.appendChild(themeIcon.cloneNode(true));
        });
      }
    }
  
    updateTableClasses() {
      document.querySelectorAll('.table').forEach((table) => {
        document.documentElement.dataset.bsTheme === 'dark' ? table.classList.add('table-dark') : table.classList.remove('table-dark');
      });
    }
  
    iconChecker() {
      const theme = localStorage.getItem('theme') ? localStorage.getItem('theme') : this.defaultTheme;
      const icon = document.querySelector(`[data-bs-theme-value=${theme}] svg`);
      this.toggleIcon(icon);
      this.updateTableClasses();
    }
  
    init() {
      const themeObserver = new MutationObserver(() => this.iconChecker());
      themeObserver.observe(document.documentElement, { attributeFilter: ['data-bs-theme'] });
      this.iconChecker();
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    new ThemeChecker();
  });