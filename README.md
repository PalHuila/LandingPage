Página de aterrizaje de Pal Huila

Este repositorio contiene el código fuente de la página de aterrizaje de Pal Huila, una aplicación web construida con Astro.

Estructura del proyecto

/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Banner.astro
│   │   └── Footer.astro
│   │   └── Header.astro
│   │   └── AsContactanos.astro
│   │   └── AsDestinosPopulares.astro
│   │   └── sExplora.astro
│   │   └── sFeatures.astro
│   ├── Fonts
│   │   └── Blinker
│   │   └── Josefin Sans
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json

Comandos

Todos los comandos se ejecutan desde la raíz del proyecto, desde un terminal:

| Comando | Acción |
|---|---|---|
| npm install | Instala las dependencias |
| npm run dev | Inicia un servidor de desarrollo local en localhost:4321 |
| npm run build | Construye tu sitio de producción en ./dist/ |
| npm run preview | Previsualiza tu build localmente, antes de desplegar |
| npm run astro ... | Ejecuta comandos de la CLI como astro add, astro check |
| npm run astro -- --help | Obtén ayuda para usar la CLI de Astro |