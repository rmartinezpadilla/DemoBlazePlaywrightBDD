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
        

    When('escribo el email registrado {string} y su clave {string}', async ({ registerUserPage }, usuario, clave) => {
            // Step: When escribo el email registrado "Erick.Kling0@yahoo.com" y su clave "password123"
            // From: tests/features/registerUser.feature:20:9
            await registerUserPage.escribirUsuarioExistente(usuario);
            await registerUserPage.escribirClave(clave);

        });

        When('ingreso el email registrado {string} y su clave {string} registrados', async ({ registerUserPage }, usuario, clave) => {
            await registerUserPage.escribirUsuario(usuario);
            await registerUserPage.escribirClave(clave);
        });


    When('completo el formulario de registro con y clave', async ({ registerUserPage }) => {
            // Step: When completo el formulario de registro con y clave
            // From: tests/features/registerUser.feature:20:9
            await registerUserPage.escribirUsuarioExistente();
            await registerUserPage.escribirClave("password123");
        });
        
    When('completo el formulario de registro con usuario y clave {string}', async ({ registerUserPage }, clave) => {
            // Step: When completo el formulario de registro con usuario y clave "password 123"
            // From: tests/features/registerUser.feature:13:9
            await registerUserPage.escribirUsuarioNuevoYClaveNuevo(clave)
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