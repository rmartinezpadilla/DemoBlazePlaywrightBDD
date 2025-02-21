# Documentación del Proyecto Playwright BDD

## Introducción
Este proyecto utiliza **Playwright** junto con **Playwright-BDD** para la automatización de pruebas de UI basada en Behavior-Driven Development (**BDD**).

### ¿Qué es Playwright?
[Playwright](https://playwright.dev/) es un framework de automatización de pruebas desarrollado por Microsoft que permite la prueba de aplicaciones web en múltiples navegadores como Chrome, Firefox y Safari. Soporta pruebas en paralelo, ejecución en modo headless y generación de trazas para depuración.

### ¿Qué es Playwright-BDD?
[Playwright-BDD](https://www.npmjs.com/package/playwright-bdd) es una librería que permite ejecutar pruebas en Playwright usando archivos **.feature** con la sintaxis de **Gherkin**, integrando **Cucumber** con Playwright.

### Uso de `async`
Los métodos `async` se utilizan porque las acciones en Playwright son asíncronas y devuelven **promesas**. Esto permite esperar a que se completen sin bloquear la ejecución del código.

## Configuración del Proyecto

### Dependencias Principales (`package.json`)
El archivo `package.json` incluye:
- `@playwright/test`: Para la ejecución de pruebas con Playwright.
- `playwright-bdd`: Para la integración con archivos `.feature`.
- `@cucumber/cucumber`: Para usar Gherkin en los tests.
- `@faker-js/faker`: Para generar datos aleatorios en las pruebas.

```json
"dependencies": {
  "@faker-js/faker": "^9.5.0",
  "playwright": "^1.50.1"
},
"devDependencies": {
  "@cucumber/cucumber": "^11.2.0",
  "@playwright/test": "^1.50.1",
  "@types/node": "^22.13.4",
  "playwright-bdd": "^8.2.0"
}
```

### Configuración de Playwright (`playwright.config.js`)
Este archivo configura el entorno de pruebas, define navegadores y opciones de ejecución.

```js
import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  paths: ['tests/features/*.feature'],
  require: ['tests/steps/*.js'],
  features: 'tests/features/***.feature',
  steps: ['tests/steps/***steps.js', 'tests/fixtures/fixture.js', "tests/hooks/hooks.js" ],
});

export default defineConfig({
  testDir,
  fullyParallel: true,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    headless: false,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
```

### Configuración de `bdd.config.js`
Este archivo configura cómo Playwright-BDD ejecutará los tests.

```js
export default {
    paths: ['tests/features/*.feature'],
    require: ['tests/steps/*.js'],
    generateTitle: false,
    use: {
        trace: 'on-first-retry',
        headless: false,
    },
    autoDescribe: false,
    generateDescribeBlock: false,
    generateTitle: false,
};
```

## Estructura del Proyecto

```
.
├── playwright.config.js
├── bdd.config.js
├── package.json
├── tests/
│   ├── features/
│   │   ├── loginUser.feature
│   │   ├── registerUser.feature
│   ├── steps/
│   │   ├── loginUserSteps.js
│   │   ├── registerUserSteps.js
│   ├── fixtures/
│   │   ├── fixture.js
│   │   ├── pages.js
│   ├── hooks/
│   │   ├── hooks.js
│   ├── pages/
│   │   ├── loginUserObj.js
│   │   ├── registerUserObj.js
```

## Ejecución de Pruebas

### Generar y ejecutar pruebas con Playwright-BDD
Para generar los archivos necesarios y ejecutar los tests:
```sh
npm run test
```
Esto ejecuta:
- `npm run bddgen` → Genera archivos necesarios para Playwright-BDD.
- `npm run playwright-test` → Ejecuta las pruebas.

### Reportes HTML
Se genera un reporte en `playwright-report/` accesible en el navegador.

## Ejemplo de Prueba (Feature y Steps)

### Archivo `.feature` (Login)
```gherkin
Feature: Iniciar sesión en DemoBlaze.com

    Scenario: Iniciar sesión con credenciales válidas
        Given ingreso a la pagina "https://www.demoblaze.com"
        And le doy clic al boton log in
        When se ingresa el usuario registrado y su clave
        And le doy clic al boton log in del formulario
        Then se visualiza el nombre de usuario en la barra de navegación
```

### Archivo de Steps (Login)
```js
import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixture';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd(test);

Given('le doy clic al boton log in', async ({ loginUserPage }) => {
    await loginUserPage.clicBtnLoginMain();
});

When('se ingresa el usuario registrado y su clave', async ({ loginUserPage }) => {
    await loginUserPage.ingresarUsuario();
});

Then('se visualiza el nombre de usuario en la barra de navegación', async ({ loginUserPage }) => {
    await loginUserPage.validarUsuarioLogueado();
});
```

## Solución de Errores Comunes

### `BDD config not found for testDir`
Si aparece este error, verifica que `bdd.config.js` esté bien definido y que `testDir` en `playwright.config.js` use `defineBddConfig`.

---

Esta documentación cubre la configuración, estructura y ejecución de pruebas en tu proyecto **Playwright BDD**. 🚀 ¡Listo para automatizar!

