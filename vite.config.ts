import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src', // Dossier source
  build: {
    outDir: '../dist', // Met le build final dans un dossier à la racine
    emptyOutDir: true, // Vide le dossier de build avant de le remplir
  },
});
