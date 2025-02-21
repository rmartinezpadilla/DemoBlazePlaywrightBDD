@loginDemoBlaze

Feature: Iniciar sesión en DemoBlaze.com

    Descripción:
    Validar que un usuario registrado pueda iniciar sesión exitosamente.

    Background:
        Given ingreso a la pagina "https://www.demoblaze.com"

    @loginExitoso
    Scenario: Iniciar sesión con credenciales válidas        
        And le doy clic al boton log in
        When se ingresa el usuario registrado y su clave
        And le doy clic al boton log in del formulario
        Then se visualiza el nombre de usuario en la barra de navegación

    @loginFallidoConUsuarioInválido
        Scenario: Iniciar sesión con usuario inválido
            And le doy clic al boton log in
            When se ingresa el usuario no registrado y su clave
            And le doy clic al boton log in del formulario
            Then visualizo el mensaje "User does not exist." en el mensaje de alerta

    @loginFallidoConClaveInválida
        Scenario: Iniciar sesión con clave inválida
            And le doy clic al boton log in
            When se ingresa el usuario registrado y su clave no valida
            And le doy clic al boton log in del formulario
            Then visualizo el mensaje "Wrong password." en el mensaje de alerta