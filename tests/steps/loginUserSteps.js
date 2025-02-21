import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixture';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd(test);

    Given('le doy clic al boton log in', async ({ loginUserPage }) => {
            // Step: And le doy clic al boton log in
            // From: tests/features/loginUser.feature:10:9
            await loginUserPage.clicBtnLoginMain();
        });
        
    When('se ingresa el usuario registrado y su clave', async ({ loginUserPage }) => {
            // Step: When se ingresa el usuario registrado y su clave
            // From: tests/features/loginUser.feature:11:9
            await loginUserPage.ingresarUsuario();
        });
    
    When('se ingresa el usuario no registrado y su clave', async ({ loginUserPage }) => {
            // Step: When se ingresa el usuario registrado y su clave
            // From: tests/features/loginUser.feature:11:9
            await loginUserPage.ingresarUsuarioNoRegistrado();
        });    
        
    When('le doy clic al boton log in del formulario', async ({ loginUserPage }) => {
            // Step: And le doy clic al boton log in del formulario
            // From: tests/features/loginUser.feature:12:9
            await loginUserPage.clicBtnLoginForm();
        });
        
    Then('se visualiza el nombre de usuario en la barra de navegación', async ({ loginUserPage }) => {
            // Step: Then se visualiza el nombre de usuario en la barra de navegación
            // From: tests/features/loginUser.feature:13:9
            await loginUserPage.validarUsuarioLogueado();

        });