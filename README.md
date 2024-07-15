


# Panadería - Aplicación Web

Esta es una aplicación web para una panadería, desarrollada con Node.js, Express y MongoDB. La aplicación incluye funcionalidades de autenticación de usuarios, gestión de productos, y un carrito de compras.

## Instalación

1. **Instalar dependencias:**
    
    ```bash
    (asegurarse de tener las siguientes dependencias instaladas)
    npm install bcrypt body-parser connect-mongo dotenv ejs express express-session mongoose
    
    ```
    
2. **Ejecutar la aplicación:**

    ```bash
    node index
    ```

3. **Abrir la aplicación en el navegador:**

    Abre tu navegador y ve a `http://localhost:3000`

## Estructura del proyecto

- **config/**
  - `db.js`: Configuración de la conexión a MongoDB.
- **middleware/**
  - `flash.js`: Middleware para manejar mensajes flash.
- **models/**
  - `product.js`: Modelo de datos para los productos.
  - `user.js`: Modelo de datos para los usuarios.
- **routes/**
  - `authRoutes.js`: Rutas para autenticación de usuarios.
  - `cartRoutes.js`: Rutas para el carrito de compras.
  - `productRoutes.js`: Rutas para gestión de productos.
- **views/**
  - **partials/**: Archivos de vistas parciales.
  - `index.ejs`: Página principal.
- `index.js`: Archivo principal de la aplicación.

## Uso

- **Registro de usuarios:** Los usuarios pueden registrarse en la aplicación.
- **Inicio de sesión:** Los usuarios registrados pueden iniciar sesión.
- **Gestión de productos:** Los usuarios autenticados pueden ver y agregar productos al carrito.
- **Carrito de compras:** Los usuarios pueden ver los productos agregados al carrito y proceder a la compra.
