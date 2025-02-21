import { expect } from '@playwright/test';
import { faker } from "@faker-js/faker";

export class LoginUserPage {
    constructor(page) {
        this.page = page;
        this.btnLoginMain = page.locator("//a[@id='login2']");
        this.inputUsername = page.locator("//input[@id='loginusername']");
        this.inputPassword = page.locator("//input[@id='loginpassword']");
        this.btnLoginForm = page.locator("//button[normalize-space()='Log in']");
        this.navBarUserName = page.locator("//a[@id='nameofuser']");
    }

    async navegarHaciaPagina(url) {
        await this.page.goto(url);
    }

    async clicBtnLoginMain() {
        await this.btnLoginMain.click();
    }

    async escribirUsuario(usuario) {                 
        console.log(`Usuario escrito: ${usuario}`)
        await this.inputUsername.fill(usuario);                
    }

    async escribirClave(clave) {                 
        console.log(`Clave escrita: ${clave}`)
        await this.inputPassword.fill(clave);                
    }

    async ingresarClaveNoRegistrada() {
        const email_registrado = "Erick.Kling0@yahoo.com"
        console.log(`Usuario registrado: ${email_registrado}`)
        await this.inputUsername.fill(email_registrado);
        const clave = "no_existe_la_clave"; // Ajustar con un usuario válido
        console.log(`Clave no registrada: ${clave}`)
        await this.inputPassword.fill(clave);        
    }

    async clicBtnLoginForm() {
        await this.btnLoginForm.click();
    }

    async validarUsuarioLogueado( usuario ) {        

        // Esperar a que el elemento de usuario esté visible
        await expect(this.navBarUserName).toBeVisible();

        const mensajeBienvenida = await this.navBarUserName.textContent() || "No se encontró el usuario";
        console.log("Mensaje capturado:", mensajeBienvenida);

        // Verificar que el texto contenga "Welcome"
        await expect(this.navBarUserName).toHaveText(`Welcome ${usuario}`);
    }
}
