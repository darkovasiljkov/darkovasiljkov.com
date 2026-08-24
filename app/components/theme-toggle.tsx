"use client";

const THEME_STORAGE_KEY = "darko-portfolio-theme";

export function ThemeToggle() {
  function toggleTheme() {
    const root = document.documentElement;
    const nextTheme = root.dataset.theme === "light" ? "dark" : "light";

    root.dataset.theme = nextTheme;
    root.style.colorScheme = nextTheme;

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch {
      // The selected theme still applies for this visit if storage is unavailable.
    }
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle between dark and light themes"
      title="Toggle color theme"
    >
      <svg
        className="theme-icon theme-icon-sun"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="3.25" />
        <path d="M12 2.5v2M12 19.5v2M4.5 12h-2M21.5 12h-2M5.29 5.29l1.42 1.42M17.29 17.29l1.42 1.42M18.71 5.29l-1.42 1.42M6.71 17.29l-1.42 1.42" />
      </svg>
      <svg
        className="theme-icon theme-icon-moon"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path d="M20 15.15A8.6 8.6 0 0 1 8.85 4a8.6 8.6 0 1 0 11.15 11.15Z" />
      </svg>
    </button>
  );
}
