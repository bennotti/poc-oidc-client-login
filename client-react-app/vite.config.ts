/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import VitePluginHtmlEnv from 'vite-plugin-html-env';
import loadVersion from 'vite-plugin-package-version';
import EnvironmentPlugin from "vite-plugin-environment";

const path = require('path');

export const plugins = [
  react(),
  VitePluginHtmlEnv(),
  loadVersion(),
  EnvironmentPlugin('all', { prefix: 'REACT_APP_' }),
  EnvironmentPlugin('all', { prefix: 'VITE_APP_' })
];

const build = {
  chunkSizeWarningLimit: 600,
  rollupOptions: {
    output: {
    },
  },
};

export const resolve = {
  alias: [
    { find: '@', replacement: path.resolve(__dirname, './src') },
    { find: '@assets', replacement: path.resolve(__dirname, './src/assets') },
    { find: '@layouts', replacement: path.resolve(__dirname, './src/layouts') },
    { find: '@infra', replacement: path.resolve(__dirname, './src/infraestrutura') },
    { find: '@infraestrutura', replacement: path.resolve(__dirname, './src/infraestrutura') },
    { find: '@funcionalidades', replacement: path.resolve(__dirname, './src/funcionalidades') },
    { find: '@modulos', replacement: path.resolve(__dirname, './src/funcionalidades') },
    { find: '@componentes', replacement: path.resolve(__dirname, './src/componentes') }
  ],
};

export default defineConfig(({ command, mode }) => {
  if (command == 'serve') {
    return {
      server: {
        port: 3000,
        open: mode !== 'webmocke2e' ? '/' : undefined,
        disableHostCheck: true,
        hot: true,
      },
      resolve,
      build,
      plugins,
    };
  }

  return {
    base: './',
    build,
    resolve,
    plugins,
  };
});
