@registroEnDemoBlaze
Feature: Registrarse en DemoBlaze.com
    
    Descripción:
    Validar que permita realizar el registro de un usuario y todos los flujos pertinentes en DemoBlaze.com.

    Background:
        Given ingreso a la pagina "https://www.demoblaze.com"

    @RegistroExitoso
    Scenario: Registrar usuario en la página DemoBlaze.com                
        And le doy clic al boton sign up
        When completo el formulario de registro con usuario y clave "password 123"
        And le doy clic al boton sign up del formulario
        Then visualizo el mensaje "Sign up successful." en el mensaje de alerta

    @ValidarUsuarioExistente
    Scenario: Confirmar la existencia de un usuario en DemoBlaze.com                
        And le doy clic al boton sign up
        When completo el formulario de registro con y clave
        And le doy clic al boton sign up del formulario
        Then visualizo el mensaje "This user already exist." en el mensaje de alerta
