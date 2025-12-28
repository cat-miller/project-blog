export const BLOG_TITLE = "Illustrate & Iterate by Cat Miller";
export const BLOG_SUBTITLE = "Blending visual inspiration and tech innovation";
export const COLOR_THEME_COOKIE_NAME = "color-theme";

export const LIGHT_COLORS = {
  "--color-text": "hsl(246, 35%, 15%)",
  "--color-primary-100": "hsl(328, 75%, 90%)",
  "--color-primary-300": "hsl(328, 75%, 70%)",
  "--color-primary-500": "hsl(328, 75%, 60%)", //links
  "--color-primary-700": "hsl(328, 75%, 33%)",
  "--color-primary-900": "hsl(328, 75%, 20%)",
  "--color-primary-contrast": "white",
  "--color-secondary-500": "hsl(168, 75%, 50%)", //
  "--color-decorative-100": "hsl(238, 30%, 94%)", //card
  "--color-decorative-200": "hsl(238, 30%, 90%)",
  "--color-decorative-300": "hsl(238, 30%, 85%)", //oben
  "--color-decorative-500": "hsl(238, 30%, 70%)", // unten
  "--color-decorative-600": "hsl(238, 30%, 60%)", // illustration
  "--color-decorative-700": "hsl(238, 30%, 50%)",
  "--color-decorative-800": "hsl(238, 30%, 33%)",
  "--color-decorative-900": "hsl(238, 30%, 25%)",
  "--color-gray-0": "white",
  "--color-gray-100": "hsl(246, 20%, 90%)",
  "--color-gray-200": "hsl(246, 15%, 85%)",
  "--color-gray-300": "hsl(246, 10%, 70%)",
  "--color-gray-500": "hsl(246, 4%, 50%)",
  "--color-gray-700": "hsl(246, 10%, 25%)",
  "--color-gray-900": "hsl(246, 20%, 10%)",
  "--color-gray-1000": "hsl(246, 35%, 5%)",
};

export const DARK_COLORS = {
  "--color-text": "hsl(168, 75%, 95%)",
  "--color-primary-100": "hsl(168, 75%, 90%)",
  "--color-primary-300": "hsl(168, 75%, 70%)",
  "--color-primary-500": "hsl(168, 75%, 50%)",
  "--color-primary-700": "hsl(168, 75%, 35%)",
  "--color-primary-900": "hsl(168, 75%, 25%)",
  "--color-primary-contrast": "hsl(328, 75%, 65%)",
  "--color-secondary-500": "hsl(328, 75%, 75%)",
  "--color-decorative-100": "hsl(238, 30%, 5%)",
  "--color-decorative-200": "hsl(238, 30%, 10%)",
  "--color-decorative-300": "hsl(238, 30%, 15%)",
  "--color-decorative-500": "hsl(238, 30%, 30%)",
  "--color-decorative-600": "hsl(238, 30%, 40%)",
  "--color-decorative-700": "hsl(238, 30%, 50%)",
  "--color-decorative-800": "hsl(238, 30%, 65%)",
  "--color-decorative-900": "hsl(238, 30%, 80%)",
  "--color-gray-0": "hsl(246, 35%, 15%)",
  "--color-gray-100": "hsl(246, 20%, 10%)",
  "--color-gray-200": "hsl(246, 15%, 15%)",
  "--color-gray-300": "hsl(246, 10%, 30%)",
  "--color-gray-500": "hsl(246, 4%, 50%)",
  "--color-gray-700": "hsl(246, 10%, 75%)",
  "--color-gray-900": "hsl(246, 20%, 90%)",
  "--color-gray-1000": "white",
};

// Add in semantic / special colors
LIGHT_COLORS["--color-primary"] = LIGHT_COLORS["--color-primary-500"];
LIGHT_COLORS["--color-secondary"] = LIGHT_COLORS["--color-secondary-500"];
LIGHT_COLORS["--color-inline-code-bg"] = "hsl(246 74% 85%)";
LIGHT_COLORS["--color-selection-text"] = "hsl(246, 35%, 15%)";
LIGHT_COLORS["--color-selection-background"] =
  LIGHT_COLORS["--color-decorative-700"];
LIGHT_COLORS["--color-backdrop"] = LIGHT_COLORS["--color-decorative-500"];
LIGHT_COLORS["--color-backdrop-highlight"] =
  LIGHT_COLORS["--color-decorative-300"];
LIGHT_COLORS["--color-page-background"] = LIGHT_COLORS["--color-gray-0"];
LIGHT_COLORS["--color-page-border"] = "transparent";
LIGHT_COLORS["--color-card-background"] = LIGHT_COLORS["--color-gray-0"];
LIGHT_COLORS["--color-card-border"] = "transparent";

DARK_COLORS["--color-primary"] = DARK_COLORS["--color-primary-500"];
DARK_COLORS["--color-secondary"] = DARK_COLORS["--color-secondary-500"];
DARK_COLORS["--color-inline-code-bg"] = "hsl(246 30% 22%)";
DARK_COLORS["--color-selection-text"] = "white";
DARK_COLORS["--color-selection-background"] = "hsl(246 100% 30%)";
DARK_COLORS["--color-backdrop"] = DARK_COLORS["--color-decorative-200"];
DARK_COLORS["--color-backdrop-highlight"] =
  DARK_COLORS["--color-decorative-500"];
DARK_COLORS["--color-page-background"] = DARK_COLORS["--color-decorative-200"];
DARK_COLORS["--color-page-border"] = "hsl(246 30% 50% / 0.6)";
DARK_COLORS["--color-card-background"] = DARK_COLORS["--color-backdrop"];
DARK_COLORS["--color-card-border"] = DARK_COLORS["--color-page-border"];

export const LIGHT_SHADOWS = {
  "--shadow-page": `
    0px 1px 2px hsl(246 60% 50% / 0.25),
    0px 3px 6px hsl(246 60% 50% / 0.25),
    0px 9px 18px hsl(246 60% 50% / 0.25),
    0px 18px 36px hsl(246 60% 50% / 0.25),
    0px 54px 108px hsl(246 60% 50% / 0.25)
  `,
  "--shadow-card": `
    0px 1px 2px hsl(246 20% 50% / 0.2),
    0px 2px 4px hsl(246 20% 50% / 0.2),
    0px 4px 8px hsl(246 20% 50% / 0.2),
    0px 8px 16px hsl(246 20% 50% / 0.2)
  `,
};
export const DARK_SHADOWS = {
  "--shadow-page": "none",
  "--shadow-card": "none",
};

export const LIGHT_TOKENS = {
  ...LIGHT_COLORS,
  ...LIGHT_SHADOWS,
};

export const DARK_TOKENS = {
  ...DARK_COLORS,
  ...DARK_SHADOWS,
};
