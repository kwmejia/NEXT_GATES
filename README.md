#  GATES - Next.js 14 🤖

## Introducción a Next.js 14
Next.js 14 es la última versión del popular framework React que permite construir aplicaciones web modernas con capacidades avanzadas como renderizado del lado del servidor (SSR), generación estática (SSG), API Routes, y más.

## Instalación

### Crear un Nuevo Proyecto
Para crear un nuevo proyecto en Next.js 14, utiliza el siguiente comando:
```bash
npx create-next-app@latest my-next-app
```

- Reemplaza my-next-app con el nombre de tu proyecto

## Iniciar el Servidor de Desarrollo
- Para iniciar el servidor de desarrollo:

```bash
npm run dev
```


## Estructura del Proyecto
- Después de crear un proyecto Next.js, la estructura básica es la siguiente:
```lua
my-next-app/
├── node_modules/
├── public/
├── styles/
├── app/         # Nuevo App Router en Next.js 14
│   ├── layout.tsx
│   ├── page.tsx
│   └── api/
│       └── hello/route.ts
├── .gitignore
├── package.json
├── README.md
└── next.config.js
```
- `app/`: Nueva estructura de enrutamiento basada en el App Router, introducida en Next.js 13 y mejorada en Next.js 14. Aquí defines tus páginas, layouts y rutas API.
- `public/`: Contiene activos estáticos como imágenes, fuentes, etc.
- `styles/:` Contiene archivos CSS.
- `next.config.js:` Archivo de configuración de Next.js.
- `layout.tsx:` Define el layout general de la aplicación.
- `page.tsx:` Define la página principal.
