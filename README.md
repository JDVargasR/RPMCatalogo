# RPM Autopartes - Catálogo Virtual

## Descripción del Proyecto

RPM Autopartes es un catálogo virtual responsive para una empresa dedicada a la fabricación y distribución de silenciadores, catalizadores, flexibles, accesorios y componentes para vehículos. La plataforma permite a los usuarios explorar productos organizados por categorías con funcionalidades interactivas como modal expandible y vista adaptable a diferentes dispositivos.

## Características Principales

✅ **Página Principal (Index)** - Diseño atractivo con navegación y presentación de categorías
✅ **5 Categorías** - Silenciadores, Catalizadores, Flexibles, Accesorios y Extras
✅ **Tarjetas de Productos** - Visualización clara de producto, precio y descripción
✅ **Modal Expandible** - Visualización detallada con galería de imágenes y especificaciones
✅ **Responsive Design** - Compatible con dispositivos móviles, tablets y desktop
✅ **Ordenamiento** - Por precio (ascendente/descendente) y por nombre (A-Z / Z-A)
✅ **Vistas Dinámicas** - Vista de cuadrícula y vista de lista
✅ **Galería de Imágenes** - Múltiples imágenes por producto con navegación
✅ **Favorites** - Sistema de favoritos con almacenamiento en localStorage
✅ **Menú Responsivo** - Menú hamburguesa para dispositivos móviles

## Estructura de Archivos

```
FrontEnd/
├── Index.html                 # Página principal
├── Css/
│   ├── Index.css              # Estilos principales y responsive
│   └── categoria.css          # Estilos de la página de categoría
├── Js/
│   ├── Index.js               # Funcionalidad de página principal
│   ├── categoria.js           # Lógica de categorías y modal
│   └── data/
│       └── productos.js       # Base de datos de productos
├── Html/
│   └── categoria.html         # Página de categoría
└── Img/
    ├── Logo/
    │   └── logo.png           # Logo de la empresa
    ├── Silenciadores/         # Imágenes de silenciadores
    ├── Catalizadores/         # Imágenes de catalizadores
    ├── Flexibles/             # Imágenes de flexibles
    ├── Accesorios/            # Imágenes de accesorios
    └── Extras/                # Imágenes de extras
```

## Colores Utilizados

- **Primario**: #1a1a2e (Azul oscuro) - Header, títulos
- **Secundario**: #d63031 (Rojo) - Botones, acentos
- **Terciario**: #f39c12 (Naranja) - Enlaces, detalles
- **Fondo Claro**: #ecf0f1 (Gris claro) - Fondos secundarios
- **Blanco**: #ffffff - Fondos principales, texto claro

## Cómo Usar

### 1. Acceder a la Página Principal
Abre `Index.html` en tu navegador. Verás:
- Header con navegación
- Hero section con bienvenida
- Grid de categorías (5 tarjetas)
- Footer con información de contacto

### 2. Explorar Categorías
Haz click en cualquier categoría para ir a la página de productos. Verás:
- Breadcrumb de navegación
- Filtros de ordenamiento y vista
- Grid de productos con tarjetas

### 3. Ver Detalles del Producto
Haz click en "Ver Detalles" en cualquier tarjeta para:
- Abrir un modal elegante y expandible
- Ver galería de imágenes del producto
- Revisar especificaciones técnicas
- Seleccionar cantidad
- Agregar al carrito

### 4. Funcionalidades Interactivas
- **Ordenar**: Selecciona por precio o nombre
- **Cambiar Vista**: Toggle entre cuadrícula y lista
- **Favoritos**: Click en el corazón para guardar productos
- **Contacto**: Botón para enviar consulta por email

## Responsive Breakpoints

- **Desktop** (1200px+): Layout completo con navegación horizontal
- **Tablet** (768px - 1199px): Ajustes de espaciado y tamaño de elementos
- **Móvil** (480px - 767px): Menú hamburguesa, una columna
- **Móvil Pequeño** (<480px): Optimizado para pantallas muy pequeñas

## Personalización

### Agregar Productos
Edita `Js/data/productos.js`:
```javascript
{
    id: 1,
    nombre: "Nombre del Producto",
    precio: 999.99,
    imagen: "../Img/categoria/imagen.jpg",
    imagenes: [/* array de imágenes */],
    descripcion: "Descripción del producto",
    especificaciones: {
        propiedad: "valor"
    }
}
```

### Cambiar Colores
Edita las variables CSS en `Css/Index.css`:
```css
:root {
    --primary-color: #1a1a2e;
    --secondary-color: #d63031;
    --accent-color: #f39c12;
    /* ... */
}
```

### Agregar Imágenes
1. Crea carpetas en `Img/` según la categoría
2. Coloca las imágenes con nombres descriptivos
3. Actualiza las rutas en `productos.js`

## Funcionalidades en Desarrollo

- Carrito de compras completo con localStorage
- Sistema de login/registro
- Página de checkout
- Historial de pedidos
- Integración con pasarela de pago
- Buscador global
- Filtros avanzados (precio, material, etc.)
- Comentarios y calificaciones
- Sistema de wishlist compartible

## Requerimientos Técnicos

- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Soporte para:
  - CSS Grid y Flexbox
  - JavaScript ES6+
  - localStorage API
  - Intersection Observer API

## Notas de Desarrollo

- Los datos de productos se cargan desde `productos.js`
- Se utiliza localStorage para guardar favoritos
- Las imágenes usan placeholders si no existen
- Los modales se pueden cerrar con Escape o click fuera
- El diseño es mobile-first

## Contacto

Para soporte o consultas sobre el catálogo:
- 📞 +1 (555) 123-4567
- 📧 info@rpautopartes.com
- 🌐 www.rpautopartes.com

---

**Versión**: 1.0
**Última actualización**: Mayo 2026
**Licencia**: Todos los derechos reservados © RPM Autopartes
