import { defineEnv } from './utils/define-env';

const isDevelopment = 
  import.meta.env.MODE === 'webdevelopment' ||
  import.meta.env.MODE === 'development';

export const env = {
  VERSION: import.meta.env.PACKAGE_VERSION,
  MODE: import.meta.env.MODE,
  IS_DEVELOPMENT: isDevelopment,
  TITLE: defineEnv('VITE_APP_TITLE', true),
  OIDC: {
    AUTHORITY: defineEnv('VITE_APP_OIDC_AUTHORITY', true),
    CLIENT_ID: defineEnv('VITE_APP_OIDC_CLIENT_ID', true),
    REDIRECT_URI: defineEnv('VITE_APP_OIDC_REDIRECT_URI', true),
    RESPONSE_TYPE: defineEnv('VITE_APP_OIDC_RESPONSE_TYPE', true),
    SCOPE: defineEnv('VITE_APP_OIDC_SCOPE', true),
    CLIENT_SECRET: defineEnv('VITE_APP_OIDC_CLIENT_SECRET'),
    SILENT_REDIRECT_URI: defineEnv('VITE_APP_OIDC_SILENT_REDIRECT_URI'),
    LOGOUT_REDIRECT_URI: defineEnv('VITE_APP_OIDC_LOGOUT_REDIRECT_URI')
  }
};
