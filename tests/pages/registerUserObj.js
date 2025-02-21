import { expect } from '@playwright/test';
import { faker } from "@faker-js/faker";

export class RegisterUserPage {
    constructor(page)   {
        this.page = page;        
        this.btnSignUpMain = page.locator("//a[@id='signin2']");
        this.inputName = page.locator("//input[@id='sign-username']");
        this.inputPassword = page.locator("//input[@id='sign-password']");
        this.btnSignUpForm =  page.locator("//button[normalize-space()='Sign up']");
    }

    async navegarHaciaPagina(url)   {
        await this.page.goto(url);
        // await this.page.pause(); Aplicamos esta linea de código por si queremos evidenciar el comportamiento paso a paso cuando se abra la página
    }

    async clicBtnSignUpMain()   {
        await this.btnSignUpMain.click();
    }    

    async escribirUsuario(usuario) {                 
        console.log(`📝 Email escrito: ${usuario}`)
        await this.inputName.fill(usuario);                
    }

    async escribirClave(clave) {                 
        console.log(`📝 Clave escrita: ${clave}`)
        await this.inputPassword.fill(clave);                
    }

    async escribirUsuarioNuevoYClaveNuevo( clave ) {        
        const email = faker.internet.email(); // 🔹 Genera un email aleatorio en cada prueba
        await this.escribirUsuario(email);
        await this.escribirClave(clave);     
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