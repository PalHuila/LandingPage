# Landing Page _Turismo Huila_


## 🚀 Estructura del proyecto

Esta es la estructura del proyecto:

```
/
├── public/
    └── Imagenes en webp o svg
├── src/
│   └── components/
│       └── landing/
│            └── Bannner.astro
│            └── Footer.astro
│            └── Header.astro
│            └── sContactanos.astro
│            └── sDestinosPopulares.astro
│            └── sExplora.astro
│            └── sFeatures.astro
│   └── layouts/
│       └── Layout.astro
│   └── pages/
│       └── AboutUs.astro
│       └── index.astro
│   └── styles/
│       └── Layout.css
└── package.json
```

Astro busca archivos .astro o .md en el directorio src/pages/. Cada página se expone como una ruta basada en el nombre de su archivo.

Los componentes Astro/React/Vue/Svelte/Preact se encuentran en el directorio src/components/.

El directorio public/ es donde puedes colocar activos estáticos, como imágenes en formato webp o svg.

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto, desde una terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala las dependencias                         |
| `npm run dev`             | Inicia el servidor de desarrollo local en localhost:3000 |
| `npm run build`           | Construye tu sitio de producción en ./dist/          |
| `npm run preview`         | Previsualiza tu construcción localmente antes de implementar     |
| `npm run astro ...`       | Ejecuta comandos de la CLI de Astro, como astro add, astro check` |
| `npm run astro -- --help` | Obtén ayuda usando la CLI de Astro                  |

