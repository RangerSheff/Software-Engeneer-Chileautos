# Prueba Técnica - Carsales

Este repositorio contiene la solución para la prueba técnica solicitada por **Chileautos**, desarrollada con **Angular** y basada en una arquitectura **Backend for Frontend (BFF)** para el consumo de datos de la API de [Rick and Morty](https://rickandmortyapi.com/documentation/#rest).

---

## Requerimientos

1. Crear un repositorio llamado `PruebaTecnicaCarsales`.
2. Usar la API pública de Rick and Morty para extraer y mostrar datos.
3. Implementar una aplicación Angular siguiendo buenas prácticas:
   - Mostrar una lista de episodios.
   - Implementar una vista de detalle para cada episodio.
4. Implementar una arquitectura **BFF (Backend for Frontend)** para consumir los servicios de la API.
5. Permitir la implementación de filtros o interacciones adicionales.
6. No usar frameworks CSS.
7. Proveer detalles para revisar el desarrollo.

---

## Descripción del Proyecto

El proyecto está dividido en dos partes principales:

### 1. **Backend for Frontend (BFF)**

- **Framework**: NestJS
- Funcionalidad:
  - Consume la API de Rick and Morty.
  - Implementa un paginado para la obtención de episodios.
  - Centraliza la lógica de negocio para mejorar la integración con el frontend.
  
### 2. **Frontend**

- **Framework**: Angular
- Funcionalidad:
  - Lista de episodios con información básica.
  - Vista de detalle de cada episodio con información expandida.
  - Scroll infinito para cargar más episodios de forma dinámica.
  - Implementación responsiva con CSS personalizado (sin frameworks CSS).

---

## Tecnologías Usadas

- **Frontend**:
  - Angular 16
  - TypeScript
- **Backend**:
  - NestJS
  - TypeScript
- **Dependencias adicionales**:
  - RxJS para manejo de observables.
  - HttpClient para la comunicación entre frontend y BFF.
  - Nodemon para desarrollo backend.

---

## Instalación y Configuración

### Clonar el repositorio
```bash
git clone https://github.com/RangerSheff/PruebaTecnicaCarsales.git
cd PruebaTecnicaCarsales
