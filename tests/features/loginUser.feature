@loginDemoBlaze

Feature: Iniciar sesión en DemoBlaze.com

    Descripción:
    Validar que un usuario registrado pueda iniciar sesión exitosamente.

    @loginExitoso
    Scenario: Iniciar sesión con credenciales válidas
        Given ingreso a la pagina "https://www.demoblaze.com"
        And le doy clic al boton log in
        When se ingresa el usuario registrado y su clave
        And le doy clic al boton log in del formulario
        Then se visualiza el nombre de usuario en la barra de navegación
