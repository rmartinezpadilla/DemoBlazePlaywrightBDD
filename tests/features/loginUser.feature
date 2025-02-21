@loginDemoBlaze

Feature: Iniciar sesión en DemoBlaze.com

    Descripción:
    Validar que un usuario registrado pueda iniciar sesión exitosamente.

    Background:
        Given ingreso a la pagina "https://www.demoblaze.com"

    @loginExitoso
    Scenario: Iniciar sesión con credenciales válidas        
        And le doy clic al boton log in
        When ingreso el email "Erick.Kling0@yahoo.com" y su clave "password123" registrados
        And le doy clic al boton log in del formulario
        Then se visualiza el nombre de usuario "Erick.Kling0@yahoo.com" en la barra de navegación

    @loginFallidoConUsuarioInválido
        Scenario: Iniciar sesión con usuario inválido
            And le doy clic al boton log in
            When se ingresa el usuario no registrado "no_existe_2025_tes@test.qa.com" y su clave "no_existe_la_clave_2025"
            And le doy clic al boton log in del formulario
            Then visualizo el mensaje "User does not exist." en el mensaje de alerta

    @loginFallidoConClaveInválida
        Scenario: Iniciar sesión con clave inválida
            And le doy clic al boton log in
            When se ingresa el usuario registrado "Erick.Kling0@yahoo.com" y su clave "esta clave no es valida 2025" no valida
            And le doy clic al boton log in del formulario
            Then visualizo el mensaje "Wrong password." en el mensaje de alerta