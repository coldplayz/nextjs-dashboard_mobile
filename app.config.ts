import { join } from "path";
import { URL, URLSearchParams } from "url";
// import  from "node:URLSearchParams";

export const ops = {
  tasks: {
    create: 'createTask',
    find: 'findTasks',
    findOne: 'findTask',
    edit: 'editTask',
    delete: 'deleteTask',
  },
  users: {
    create: 'createUser',
    find: 'findUsers',
    findOne: 'findUser',
    edit: 'editUser',
    delete: 'deleteUser',
  },
  auth: {
    signin: 'signin',
    signout: 'signout',
    refreshToken: 'refreshToken',
  },
};

export const BACKEND_HOST = process.env.BACKEND_HOST || 'http://localhost:3456';

export const API_PREFIX = process.env.API_PREFIX || '/api/v1';

export const MAX_BREADCRUMB_ITEMS = 3;

export const ClientRoutes = {
  marketing: '/',
  signin: '/signin',
  signup: '/signup',
  dashboard: {
    home: '/dashboard',
    pendingTasks: '/dashboard/pending',
    completedTasks: '/dashboard/completed',
  },
};

export const DashboardActions = {
  TRIGGERED_RENDER: 'triggeredRender',
};

type QueryObj = Record<string, string>;

/**
 * Joins a host with path to a query object to form a full URL.
 */
function getUrl(uri: string, queryObj: QueryObj = {}) {
  const searchParams = new URLSearchParams(queryObj);

  const url = new URL(uri);
  url.search = searchParams.toString();

  return url.toString();
}

/**
* Single source of truth for backend API endpoint addresses.
*/
export function getApiEndpoint(
  op: string,
  slug: string = '',
  queryObj: QueryObj = {}
) {
  const uri = join(BACKEND_HOST, API_PREFIX);

  switch (op) {
    case ops.tasks.create:
    case ops.tasks.find:
    case ops.tasks.findOne:
    case ops.tasks.edit:
    case ops.tasks.delete:
      return getUrl(join(uri, '/tasks', slug), queryObj);
    case ops.users.create:
    case ops.users.find:
    case ops.users.findOne:
    case ops.users.edit:
    case ops.users.delete:
      return getUrl(join(uri, '/users', slug), queryObj);
    case ops.auth.signin:
      return getUrl(join(uri, '/auth/signin'));
    case ops.auth.signout:
      return getUrl(join(uri, '/auth/signout'));
    case ops.auth.refreshToken:
      return getUrl(join(uri, '/auth/refresh-token'));
    default:
      throw new Error(`getApiEndpoint: Endpoint ${op} does not exist`);
  }
}

export class CredentialsError extends Error {
  constructor(public message: string) {
    super(message);
  }
}

const config = {
  BACKEND_HOST,
  API_PREFIX,
  getApiEndpoint,
  ops,
};

export default config;
