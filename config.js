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

/*
API - added here instead of .env for easy access
change to :4000 for json server
*/
export const HOST_API = 'http://localhost:4000';

/*
change default endpoints for json server
*/
export const API_ENDPOINTS = {
  goal: {
    employeeGoal: 'employee/goals', //'e-goals'
    employerGoal: 'employer/goals', //'er-goals'
    employers: 'employers', // users/employers
  },
};
