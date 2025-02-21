import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixture';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd(test);

    Given('le doy clic al boton log in', async ({ loginUserPage }) => {            
            await loginUserPage.clicBtnLoginMain();
        });
        
    When('se ingresa el usuario no registrado {string} y su clave {string}', async ({ loginUserPage }, usuario, clave) => {            
            await loginUserPage.escribirUsuario(usuario);
            await loginUserPage.escribirClave(clave);
        });

    When('se ingresa el usuario registrado {string} y su clave {string} no valida', async ({ loginUserPage }, usuario, clave) => {
            // Step: When se ingresa el usuario registrado "Erick.Kling0@yahoo.com" y su clave "esta clave no es valida 2025" no valida
            // From: tests/features/loginUser.feature:28:13
            await loginUserPage.escribirUsuario(usuario);
            await loginUserPage.escribirClave(clave);
    });

    When('se ingresa el usuario no registrado y su clave', async ({ loginUserPage }) => {
            // Step: When se ingresa el usuario registrado y su clave
            // From: tests/features/loginUser.feature:11:9
            await loginUserPage.ingresarUsuarioNoRegistrado();
        });
        
    When('ingreso el email {string} y su clave {string} registrados', async ({ loginUserPage }, usuario, clave) => {            
            await loginUserPage.escribirUsuario(usuario);
            await loginUserPage.escribirClave(clave);
        });
        
    When('le doy clic al boton log in del formulario', async ({ loginUserPage }) => {            
            await loginUserPage.clicBtnLoginForm();
        });
    
    Then('se visualiza el nombre de usuario {string} en la barra de navegación', async ({ loginUserPage }, usuario) => {
            await loginUserPage.validarUsuarioLogueado(usuario);
        });