# Pet Market Club - E-commerce Platform

Repositorio principal de la plataforma de e-commerce de **Pet Market Club**. 

Este proyecto es una solución integral (Frontend + Backoffice) diseñada específicamente para la venta de artículos veterinarios. El sistema prioriza una experiencia de usuario amigable mediante un catálogo estructurado y un asistente de recomendación, a la vez que proporciona herramientas administrativas robustas para el control de negocio.

## Características Principales (Features)
- **Catálogo Inteligente:** Gestión de productos individuales y creación dinámica de combos/kits.
- **Trazabilidad de Stock:** Sistema estricto de inventario que solo permite ingresos vía factura de proveedor y extracciones justificadas.
- **Checkout Integrado:** Procesamiento de pagos seguro a través de Mercado Pago y cálculo de costos de envío.
- **Dashboard Administrativo:** Panel de control personalizado para gestionar pedidos, actualizar estados y moderar reseñas.
- **Facturación Automática:** Generación de comprobantes en PDF y envío por correo electrónico al confirmar la compra.

## Stack Tecnológico
- **Frontend / UI:** Next.js 16.4.5 (App Router), React 19.3.0, Tailwind CSS v4, TypeScript 5.
- **Backend / CMS:** Strapi v5.61.0 (Node.js >= 22).
- **Base de Datos:** PostgreSQL 16.
- **Pasarela de Pago:** Mercado Pago SDK.

## Instalación y Configuración Local
```bash
# Instalar dependencias
npm install

# Configurar variables de entorno locales
cp .env.example .env.local
# Verificar que .env.local defina:
# NEXT_PUBLIC_STRAPI_URL=http://127.0.0.1:1337

# Iniciar servidor de desarrollo
npm run dev
```
