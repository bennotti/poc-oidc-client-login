import { defineEnv } from './utils/define-env';

const isDevelopment = 
  import.meta.env.MODE === 'webdevelopment' ||
  import.meta.env.MODE === 'development';

export const env = {
  VERSION: import.meta.env.PACKAGE_VERSION,
  MODE: import.meta.env.MODE,
  IS_DEVELOPMENT: isDevelopment,
  TITLE: defineEnv('VITE_APP_TITLE', true),
  USUARIO: defineEnv('VITE_APP_USUARIO'),
  SENHA: defineEnv('VITE_APP_SENHA'),
  API_URL: defineEnv('VITE_API_URL', true),
};
