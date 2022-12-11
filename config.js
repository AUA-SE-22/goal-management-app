// LAYOUT
export const HEADER = {
  MOBILE_HEIGHT: 64,
  MAIN_DESKTOP_HEIGHT: 88,
  DASHBOARD_DESKTOP_HEIGHT: 92,
  DASHBOARD_DESKTOP_OFFSET_HEIGHT: 92 - 32,
};

export const defaultSettings = {
  themeMode: 'light',
  themeDirection: 'ltr',
  themeColorPresets: 'default',
  themeLayout: 'horizontal',
  themeStretch: false,
};

// -----------------------------------------------

// API
export const HOST_API = 'http://localhost:4000';

export const API_ENDPOINTS = {
  goal: {
    employeeGoal: 'e-goals',
    employerGoal: 'er-goals',
    employers: 'employers',
  },
};
