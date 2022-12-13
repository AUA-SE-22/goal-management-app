function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = '/auth';
const ROOTS_DASHBOARD = '/';

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, '/login'),
};

export const PATH_PAGE = {
  root: ROOTS_DASHBOARD,
  goals: path(ROOTS_DASHBOARD, 'goals'),
  new: path(ROOTS_DASHBOARD, 'goals/new-goal'),
  edit: path(ROOTS_DASHBOARD, `goals/:id/edit`),
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
};
