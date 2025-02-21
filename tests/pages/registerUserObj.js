import { expect } from '@playwright/test';
import { faker } from "@faker-js/faker";

const email_existente = "Erick.Kling0@yahoo.com"; // Ajustar con un usuario válido

export class RegisterUserPage {
    constructor(page)   {
        this.page = page;        
        this.btnSignUpMain = page.locator("//a[@id='signin2']");
        this.inputName = page.locator("//input[@id='sign-username']");
        this.inputPassword = page.locator("//input[@id='sign-password']");
        this.btnSignUpForm =  page.locator("//button[normalize-space()='Sign up']");
    }

    async navegarHaciaPagina(url)   {
        await this.page.goto(url)
    }

    async clicBtnSignUpMain()   {
        await this.btnSignUpMain.click();
    }    

    async escribirUsuario() {
        const email = faker.internet.email(); // 🔹 Genera un email aleatorio en cada prueba
        await this.inputName.fill(email);
        console.log(`📝 Email generado: ${email}`); // Opcional: imprime el email en la consola
    }

    async escribirUsuarioExistente() {        
        await this.inputName.fill(email_existente);        
    }

    async escribirClave(clave) {
        await this.inputPassword.fill(clave);
    }

    async clicBtnSignUpForm()   {
        await this.btnSignUpForm.click();
    }

    async validarMensajeDeRegistro(mensaje) {
        // Capturamos el mensaje de la alerta usando una promesa
        const mensajeAlerta = await new Promise((resolve) => {
            this.page.once("dialog", async (dialog) => {
                resolve(dialog.message()); // Capturamos el mensaje de la alerta
                await dialog.accept(); // Aceptamos la alerta
            });
        });
    
        console.log(`Mensaje de la alerta: ${mensajeAlerta}`);
    
        // Ahora validamos que el mensaje de la alerta sea el esperado
        expect(mensajeAlerta).toEqual(mensaje); // Comparamos con el mensaje que pasamos como parámetro
    }
    

}