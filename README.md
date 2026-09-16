# 🏢 ONCEPOLY 8.0 - PWA & Tablero Digital Sincronizado

[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactjs.org/)
[![PWA](https://img.shields.io/badge/PWA-Progressive_Web_App-5A0FC8?style=flat-square&logo=pwa&logoColor=white)](https://web.dev/progressive-web-apps/)
[![Accessibility](https://img.shields.io/badge/Accessibility-Web_Speech_API-10B981?style=flat-square)](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)

**ONCEPOLY 8.0** es una Aplicación Web Progresiva (PWA) *Mobile-First* que actúa como banquero digital, asistente virtual, sistema de accesibilidad por voz y tablero interactivo en tiempo real para partidas físicas del Monopoly adaptado al **Grupo Social ONCE**.

---

## 🌟 Características Principales

### 1. 🌐 Sincronización Multidispositivo en Tiempo Real
- **Crear y Unirse a Salas**: Códigos de sala de 6 dígitos (ej. `MNP-8429`) para conectar múltiples teléfonos móviles.
- **Motor Híbrido de Sincronización**:
  - **Local (BroadcastChannel + LocalStorage)**: Sincronización instantánea entre pestañas/navegadores locales sin necesidad de configuración.
  - **Nube (Firebase Firestore)**: Conexión nativa lista para jugar a distancia con usuarios en distintas redes.

### 2. 🗺️ Tablero Visual 2D & Animación Paso a Paso de Peones
- **Fondo Gráfico Oficial**: Incorpora la imagen oficial del tablero `monopoly GSO.png` en alta definición.
- **Desplazamiento Animado**: Las fichas/peones de los jugadores avanzan de forma animada **casilla por casilla** a lo largo del perímetro.

### 3. 🔊 Accesibilidad por Voz (Lectura en Castellano)
- **Web Speech API (`es-ES`)**: Locución automática en castellano de cada tirada de dados, casilla aterrizada, alquiler cobrado, cartas robadas y avisos de Formación Interna.
- **Botón Accesible de Audio**: Control de voz 🔊 ON/OFF en la barra superior.

### 4. 🎲 Modo Doble de Tirada de Dados (Virtual o Manual)
- **Tirada Virtual 3D**: Física de rodadura sobre el tablero con pausa y anuncio del número obtenido antes de mover el peón.
- **Tirada Manual (Dados Físicos)**: Selector rápido para introducir los dados reales tirados sobre el tablero físico (Dado 1 y Dado 2).

### 5. 🚫 Cero Ventanas Emergentes (Paneles Inline)
- **Interfaz Contextual Integrada**: Sin pop-ups ni capas flotantes. Toda la gestión (compra, cuotas de gestión, edificación de Quioscos/Agencias, cartas de GSO/Fundación ONCE, Formación Interna e Hipotecas) se interactúa en un panel inline dinámico en pantalla.

### 6. 🎴 Tarjetas Temáticas Oficiales ONCEPOLY
- **Tarjetas Fundación ONCE**: Diseño en **Rojo Intenso (`#dc2626`)** con letras blancas.
- **Tarjetas GSO (Grupo Social ONCE)**: Diseño en **Negro Elegante (`#000000`)** con la franja corporativa de los 4 colores (Rojo, Amarillo, Verde y Azul).

### 7. 🏁 Botón Siempre Visible de Finalizar Partida
- Ubicado abajo del todo en el panel HUD. Calcula automáticamente el patrimonio total (efectivo + valor de propiedades y Quioscos/Agencias) y anuncia al ganador por voz.

---

## 🛠️ Requisitos Previos e Instalación

### Requisitos
- **Node.js**: v18.0.0 o superior.
- **npm**: v9.0.0 o superior.

### Clonar e Instalar Dependencias

```bash
# Entrar al directorio del proyecto
cd monopoly-pwa

# Instalar dependencias
npm install
```

### Ejecutar Servidor de Desarrollo

```bash
# Opción 1: Mediante script npm
npm run dev

# Opción 2: En Windows (Doble clic o consola)
dev.bat
```

El servidor estará disponible en `http://localhost:3000`.

### Compilar para Producción

```bash
npm run build
```

Los archivos optimizados para producción se generarán en la carpeta `dist/`.

---

## 📁 Estructura del Proyecto

```
monopoly-pwa/
├── public/
│   ├── manifest.json            # Manifiesto PWA para instalación móvil
│   ├── sw.js                    # Service Worker para soporte offline
│   └── monopoly-board.png       # Imagen oficial del tablero ONCEPOLY
├── src/
│   ├── data/
│   │   ├── boardSpaces.js       # Las 40 casillas oficial ONCEPOLY
│   │   └── cardsData.js         # Cartas oficial GSO y Fundación ONCE
│   ├── services/
│   │   ├── ttsService.js        # Motor de voz en español (Web Speech API)
│   │   ├── firebase.js          # Conexión Firestore Cloud
│   │   └── syncService.js       # Sincronizador BroadcastChannel + LocalStorage
│   ├── context/
│   │   └── GameContext.jsx      # Estado global, turnos y reglas de juego
│   ├── components/
│   │   ├── Header.jsx           # Barra superior con voz y código de sala
│   │   ├── Lobby.jsx            # Creación/Unión a sala y setup de jugadores
│   │   ├── BoardView.jsx        # Tablero 2D perimetral con peones animados
│   │   ├── DiceRoller.jsx       # Lanzador 3D / Entrada manual de dados
│   │   ├── InlineActionPanel.jsx# Panel de acción sin ventanas emergentes
│   │   └── PlayerHUD.jsx        # Dashboard inferior y botón de finalizar partida
│   ├── App.jsx
│   ├── index.css                # Estilos glassmorphic, neón y accesibilidad
│   └── main.jsx
├── dev.bat                      # Ejecutable directo para Windows
├── package.json
└── vite.config.js
```

---

## 📄 Licencia y Créditos

Este proyecto es una herramienta digital sin fines de lucro adaptada conforme al manual oficial e instrucciones de **ONCEPOLY (Grupo Social ONCE)**. Todos los derechos de nombres de propiedades, imágenes y marcas pertenecen a sus respectivos titulares.
