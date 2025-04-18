# VDR Salud – Sitio Web Oficial

¡Bienvenido al repositorio oficial del proyecto **VDR Salud**!  
**VDR Salud** es una plataforma digital diseñada para ofrecer información integral y accesible para pacientes y profesionales de la salud. Este sitio web se construyó utilizando [Astro](https://astro.build/) y [Tailwind CSS 4.0](https://tailwindcss.com/), combinando un rendimiento excepcional con un diseño moderno y profesional. Además, se utilizan archivos Markdown (.md) con frontmatter para gestionar contenido dinámico, facilitando actualizaciones y mantenimiento sin necesidad de modificar el código base.

---

## Tabla de Contenidos

- [Descripción General](#descripción-general)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Generación de Contenido Dinámico](#generación-de-contenido-dinámico)
- [Instalación y Ejecución](#instalación-y-ejecución)
- [Comandos Disponibles](#comandos-disponibles)
- [Personalización](#personalización)
- [Contribuciones](#contribuciones)
- [Contacto](#contacto)

---

## Descripción General

**VDR Salud** es un proyecto orientado a brindar información de valor en el área de la salud, integrando:

- **Especialidades Médicas:** Detalles actualizados y completos sobre cada área de atención.
- **Contacto Rápido:** Formularios y datos para una comunicación efectiva.
- **Portal de Clientes:** Acceso seguro para la gestión y seguimiento de servicios.
- **Diseño Accesible:** Navegación clara y elementos visuales optimizados para usuarios de todas las edades, con especial atención a la legibilidad y facilidad de uso.

---

## Tecnologías Utilizadas

- **[Astro](https://astro.build/):** Framework para crear sitios web rápidos y escalables.
- **[Tailwind CSS 4.0](https://tailwindcss.com/):** Framework CSS utilitario que facilita la creación de interfaces responsivas y personalizadas.
- **Markdown (.md):** Se utilizan archivos Markdown con frontmatter para generar contenido dinámico.
- **HTML5, CSS3 y JavaScript:** Tecnologías esenciales para la estructura, estilos e interactividad del sitio.
- **Firestore (Firebase Storage):** Plataforma para almacenar y servir activos multimedia (por ejemplo, videos).

---

## Estructura del Proyecto

La organización del proyecto es modular y escalable, lo que facilita su mantenimiento y expansión. A continuación, se muestra la estructura principal:

├─ public/ 
│ ├─ especialidades/ 
│ ├─ icons/ 
│ ├─ images/ 
│ └─ favicon.svg 
│ ├─ src/ 
│ ├─ assets/ # Recursos como estilos, fuentes y scripts personalizados. 
│ ├─ components/ # Componentes reutilizables (Navbar, Footer, Hero, etc.) 
│ │ ├─ BeneficiosVDR/ 
│ │ ├─ EspecialidadesDestacadas/ 
│ │ ├─ Footer/ 
│ │ ├─ Header/ 
│ │ ├─ Hero/ 
│ │ └─ NavBar/ 
│ ├─ content/ # Archivos Markdown (.md) para contenido dinámico. 
│ │ └─ especialidades/ 
│ ├─ pages/ # Páginas del sitio; cada archivo .astro representa una ruta. 
│ │ ├─ especialidades/ 
│ │ │ └─ [id].astro # Páginas dinámicas generadas a partir de archivos .md 
│ │ ├─ contacto.astro 
│ │ ├─ especialidades.astro 
│ │ ├─ index.astro 
│ │ └─ unite.astro 
│ ├─ layouts/ # Plantillas globales compartidas entre páginas. 
│ └─ ts/ # Configuraciones y scripts TypeScript. 
│ └─ config.ts 
│ ├─ .gitignore 
├─ astro.config.mjs # Configuración principal de Astro. 
├─ package.json # Dependencias y scripts del proyecto. 
├─ package-lock.json 
├─ tsconfig.json 
└─ README.md

- **public/**: Contiene archivos estáticos que se sirven directamente desde la raíz (imágenes, íconos, videos, etc.).
- **src/components/**: Componentes de la interfaz, reutilizables en múltiples páginas.
- **src/content/**: Archivos Markdown para generar contenido dinámico, aprovechando el frontmatter.
- **src/pages/**: Cada archivo `.astro` define una página del sitio.
- **layouts/**: Plantillas globales que proporcionan una estructura consistente.
- **ts/**: Configuraciones y scripts en TypeScript que soportan la lógica del proyecto.

---

## Generación de Contenido Dinámico

Una de las características clave de **VDR Salud** es la capacidad de generar contenido dinámico a partir de archivos Markdown. Cada archivo `.md` incluye un frontmatter que define metadatos esenciales (como el título, descripción, fecha, etc.) y el contenido principal en formato Markdown. Esto permite:

- **Actualizar el contenido de forma sencilla:** Basta con editar el archivo Markdown correspondiente.
- **Generar páginas dinámicas:** Por ejemplo, las páginas de especialidades se generan a partir de los archivos en `src/content/especialidades/`.
- **Mantener una estructura de datos centralizada:** Los metadatos se utilizan para organizar y presentar la información de manera consistente.

## Clona el repositorio:
git clone https://github.com/tu-usuario/vdr-salud.git

## Ingresa a la carpeta del proyecto:
cd vdr-salud

## Instala las dependencias:
npm install

## Inicia el servidor de desarrollo:
npm run dev

