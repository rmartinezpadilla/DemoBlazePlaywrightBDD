import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixture';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd(test);

Given('ingreso a la pagina {string}', async ({ registerUserPage}, url) => {
    // Step: Given ingreso a la pagina "https://www.demoblaze.com/index.html"
    // From: tests/features/login.feature:10:9
    await registerUserPage.navegarHaciaPagina(url);

    });
    
Given('le doy clic al boton sign up', async ({ registerUserPage }) => {
        // Step: And le doy clic al boton sign up
        // From: tests/features/login.feature:11:9
        await registerUserPage.clicBtnSignUpMain();
    });
    
When('completo el formulario de registro con usuario y clave {string}', async ({ registerUserPage }, clave) => {
        // Step: When completo el formulario de registro
        // From: tests/features/login.feature:12:9
        await registerUserPage.escribirUsuario();
        await registerUserPage.escribirClave(clave);
    });

    When('completo el formulario de registro con y clave', async ({ registerUserPage }) => {
        // Step: When completo el formulario de registro con y clave
        // From: tests/features/registerUser.feature:20:9
        await registerUserPage.escribirUsuarioExistente();
        await registerUserPage.escribirClave("password123");
    });
    
When('le doy clic al boton sign up del formulario', async ({ registerUserPage }) => {
        // Step: And le doy clic al boton sign up del formulario
        // From: tests/features/login.feature:13:9
        await registerUserPage.clicBtnSignUpForm();
    });
    
Then('visualizo el mensaje {string} en el mensaje de alerta', async ({ registerUserPage }, mensaje) => {
        // Step: Then visualizo el mensaje "Sign up successful." en el mensaje de alerta
        // From: tests/features/login.feature:14:9
        await registerUserPage.validarMensajeDeRegistro(mensaje);
});