import { expect } from '@playwright/test';

const email = "Erick.Kling0@yahoo.com"; // Ajustar con un usuario válido

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

    async ingresarUsuario() {        
        await this.inputUsername.fill(email);
        const clave = "password123"; // Ajustar con un usuario válido
        await this.inputPassword.fill(clave);
        
    }

    async clicBtnLoginForm() {
        await this.btnLoginForm.click();
    }

    async validarUsuarioLogueado() {        
        // Esperar a que el elemento de usuario esté visible
        await expect(this.navBarUserName).toBeVisible();

        // Verificar que el texto contenga "Welcome"
        await expect(this.navBarUserName).toHaveText(`Welcome ${email}`);
    }
}
