function expandChatContainer() {
    var container = document.getElementById('container');
    var chatContainer = document.querySelector('.chat-container');

    // Oculta todos los contenedores y muestra solo el toggle-container
    container.childNodes.forEach(function (child) {
        if (child.nodeType === 1 && !child.classList.contains('chat-container')) {
            child.style.display = 'none';
        }
    });
    chatContainer.classList.remove('hide');
    chatContainer.style.display = 'block';
}

function expandHoroscopeContainer() {
    var container = document.getElementById('container');
    var horoscopeContainer = document.querySelector('.horoscope-container');

    // Oculta todos los contenedores y muestra solo el toggle-container
    container.childNodes.forEach(function (child) {
        if (child.nodeType === 1 && !child.classList.contains('horoscope-container')) {
            child.style.display = 'none';
        }
    });
    horoscopeContainer.classList.remove('hide');
    horoscopeContainer.style.display = 'block';
}

function hideContainer() {
    var container = document.getElementById('container');
    var chatContainer = document.querySelector('.chat-container');
    var horoscopeContainer = document.querySelector('.horoscope-container');
    var infoContainers = document.querySelectorAll('.info-container');

    // Oculta los contenedores de información
    infoContainers.forEach(function (infoContainer) {
        infoContainer.style.display = 'none';
    });

    // Muestra y anima solo el chatContainer
    chatContainer.style.animation = 'collapseAnimation 0.5s ease-in';
    setTimeout(function () {
        chatContainer.style.display = 'none';
        chatContainer.style.animation = ''; // Restaura la animación

        // Restaura la visibilidad de los info-container
        infoContainers.forEach(function (infoContainer) {
            infoContainer.style.display = 'flex';
        });
    }, 500); // Ajusta el tiempo según la duración de la animación

    // Muestra y anima el horoscopeContainer
    horoscopeContainer.style.animation = 'collapseAnimation 0.5s ease-in';
    setTimeout(function () {
        horoscopeContainer.style.display = 'none';
        horoscopeContainer.style.animation = ''; // Restaura la animación
        
        // Restaura la visibilidad de los info-container
        infoContainers.forEach(function (infoContainer) {
            infoContainer.style.display = 'flex';
        });
    }, 500); // Ajusta el tiempo según la duración de la animación
}
