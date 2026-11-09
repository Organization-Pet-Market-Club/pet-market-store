<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Pet Market Club — Guía de Contexto para Agentes (Frontend Store & Backoffice)

## 1. Stack y Convenciones Técnicas del Frontend

- **Next.js 16.4.5 (App Router):**
  - Las APIs dinámicas de servidor (`params`, `searchParams`, `cookies()`, `headers()`) son **asíncronas** y siempre deben resolverse con `await`.
  - Priorizar React Server Components (RSC) para la obtención de datos y limitar `"use client"` a hojas interactivas.
- **React 19.3.0 y TypeScript 5:** Tipado estricto de extremo a extremo para entidades de dominio y respuestas de la API.
- **Tailwind CSS v4:** Configuración CSS-first en `app/globals.css` mediante `@import "tailwindcss";` y `@theme inline` (sin archivo `tailwind.config.js` heredado).
- **Integración con Strapi v5.61.0:**
  - Utilizar la variable de entorno `NEXT_PUBLIC_STRAPI_URL` (valor por defecto en desarrollo: `http://127.0.0.1:1337`), consumida por el cliente HTTP en `lib/api.ts`.
  - Consumir el formato de respuesta JSON aplanado de Strapi v5 (los campos de la entidad vienen directamente en cada elemento de `data` junto con `documentId`, sin envoltorio `.attributes`).

## 2. Reglas de Dominio de Negocio

- **RN-01 (Modalidad 100% Virtual):** E-commerce sin retiro en tienda física; emisión de comprobantes internos en formato PDF.
- **RN-02 (Inmutabilidad Estricta de Stock):** La interfaz administrativa nunca debe permitir la edición libre del número de `stockActual` en el formulario de un producto. Todo ajuste de inventario debe realizarse mediante flujos transaccionales de `MovimientoStock` (`COMPRA`, `VENTA`, `DEVOLUCION`, `EXTRACCION`).
- **RF-04 (Combos Dinámicos):** La disponibilidad y el stock máximo comprable de un `Combo` se derivan dinámicamente del stock disponible de los productos que lo componen.
- **RF-10 / RF-12 (Checkout y Comprobantes PDF):** Integración de pago con Mercado Pago y emisión/envío automático de comprobante PDF tras la acreditación del pago.
- **RF-14 / RF-09 (Pedidos y Reseñas):**
  - Solo permitir la solicitud de cancelación de un pedido cuando su estado sea previo a `ENVIADO`.
  - Solo habilitar el formulario de reseña de un producto cuando el usuario posea un pedido en estado `ENTREGADO` que contenga dicho artículo.

