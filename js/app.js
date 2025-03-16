document.addEventListener('DOMContentLoaded', function() {
    // Elementos DOM
    const container = document.querySelector('.container');
    const registerBtn = document.querySelector('.message-box .register-btn');
    const loginBtn = document.querySelector('.message-box .register-btn');
    
    // Inicializar en modo login
    container.classList.add('login-mode');
    
    // Función para cambiar entre modos
    function toggleMode() {
        // Añadir clase de animación
        container.classList.add('animating');
        
        // Esperar a que la animación esté a mitad de camino para cambiar el modo
        setTimeout(() => {
            if (container.classList.contains('login-mode')) {
                container.classList.remove('login-mode');
                container.classList.add('register-mode');
                
                // Actualizar textos del message-box
                document.querySelector('.message-box h2').textContent = '¡Bienvenido de nuevo!';
                document.querySelector('.message-box p').textContent = 'Para mantenerte conectado con nosotros, inicia sesión con tus datos personales.';
                document.querySelector('.message-box .register-btn').textContent = 'Iniciar Sesión';
            } else {
                container.classList.remove('register-mode');
                container.classList.add('login-mode');
                
                // Actualizar textos del message-box
                document.querySelector('.message-box h2').textContent = '¡Hola, amigo!';
                document.querySelector('.message-box p').textContent = 'Ingresa tus datos personales y comienza tu viaje con nosotros.';
                document.querySelector('.message-box .register-btn').textContent = 'Registrarse';
            }
        }, 500); // Mitad del tiempo de la transición
        
        // Quitar la clase de animación cuando termine
        setTimeout(() => {
            container.classList.remove('animating');
        }, 1000);
    }
    
    // Event listeners
    registerBtn.addEventListener('click', toggleMode);
    loginBtn.addEventListener('click', toggleMode);
});
