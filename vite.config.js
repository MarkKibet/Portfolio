import { defineConfig, searchForWorkspaceRoot } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "./",
  plugins: [react()],
  server: {
    fs: {
      allow: [
        searchForWorkspaceRoot(process.cwd()), // Allow workspace root
        "/home/mark-kibet/CinqueLabs/node_modules/@fortawesome/fontawesome-free", // Allow Font Awesome access
      ],
    },
  },
});
