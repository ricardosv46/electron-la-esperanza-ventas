import react from '@vitejs/plugin-react';
import { UserConfig, ConfigEnv } from 'vite';
import { join, resolve } from 'path';

const srcRoot = join(__dirname, 'src');

export default ({ command }: ConfigEnv): UserConfig => {
  // DEV
  if (command === 'serve') {
    return {
      root: srcRoot,
      base: '/',
      plugins: [react()],
      resolve: {
        alias: {
          '@hooks': resolve(__dirname, './src/hooks'),
          '@pages': resolve(__dirname, './src/pages'),
          '@store': resolve(__dirname, './src/store'),
          '@utils': resolve(__dirname, './src/utils'),
          '@icons': resolve(__dirname, './src/icons'),
          '@graphql': resolve(__dirname, './src/graphql'),
          '@interface': resolve(__dirname, './src/interface'),
          '@generated': resolve(__dirname, './src/generated'),
          '@components': resolve(__dirname, './src/components'),
          '@sections': resolve(__dirname, './src/sections'),
          '@services': resolve(__dirname, './src/services'),
          '@imgs': resolve(__dirname, './src/imgs'),
          '@modules': resolve(__dirname, './src/modules'),
          '@validation': resolve(__dirname, './src/validation'),
          '@assets': resolve(__dirname, './src/assets'),
          '@data': resolve(__dirname, './src/data'),
          '@routes': resolve(__dirname, './src/routes')
        }
      },
      build: {
        outDir: join(srcRoot, '/out'),
        emptyOutDir: true,
        rollupOptions: {}
      },
      server: {
        port: process.env.PORT === undefined ? 3000 : +process.env.PORT
      },
      optimizeDeps: {
        exclude: ['path']
      }
    };
  }
  // PROD
  return {
    root: srcRoot,
    base: './',
    plugins: [react()],
    resolve: {
      alias: {
        '@hooks': resolve(__dirname, './src/hooks'),
        '@pages': resolve(__dirname, './src/pages'),
        '@store': resolve(__dirname, './src/store'),
        '@utils': resolve(__dirname, './src/utils'),
        '@icons': resolve(__dirname, './src/icons'),
        '@graphql': resolve(__dirname, './src/graphql'),
        '@interface': resolve(__dirname, './src/interface'),
        '@generated': resolve(__dirname, './src/generated'),
        '@components': resolve(__dirname, './src/components'),
        '@sections': resolve(__dirname, './src/sections'),
        '@services': resolve(__dirname, './src/services'),
        '@imgs': resolve(__dirname, './src/imgs'),
        '@modules': resolve(__dirname, './src/modules'),
        '@validation': resolve(__dirname, './src/validation'),
        '@assets': resolve(__dirname, './src/assets'),
        '@data': resolve(__dirname, './src/data'),
        '@routes': resolve(__dirname, './src/routes')
      }
    },
    build: {
      outDir: join(srcRoot, '/out'),
      emptyOutDir: true,
      rollupOptions: {}
    },
    server: {
      port: process.env.PORT === undefined ? 3000 : +process.env.PORT
    },
    optimizeDeps: {
      exclude: ['path']
    }
  };
};
