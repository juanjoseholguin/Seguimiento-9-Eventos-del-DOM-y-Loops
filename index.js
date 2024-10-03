const form1 = document.getElementById('form1');
const form2 = document.getElementById('form2');
const messageBox = document.getElementById('message-box');
const input1 = document.getElementById('message1');
const input2 = document.getElementById('message2');

function addMessage(message, user) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');

    if (user === 'spiderman') {
        messageElement.classList.add('message-left');
    } else if (user === 'hellokitty') {
        messageElement.classList.add('message-right');
    }

    messageElement.textContent = message;
    messageBox.appendChild(messageElement);
    messageBox.scrollTop = messageBox.scrollHeight; 
}

form1.addEventListener('submit', function (event) {
    event.preventDefault();
    const message = input1.value.trim();
    if (message) {
        addMessage(message, 'spiderman');
        input1.value = ''; 
    } else {
        alert('Creeme que yo tampoco le escribiría a hello kitty, pero si tu quieres, entonces escribe un mensaje antes de enviar ;)');
    }
});

form2.addEventListener('submit', function (event) {
    event.preventDefault();
    const message = input2.value.trim();
    if (message) {
        addMessage(message, 'hellokitty');
        input2.value = ''; 
    } else {
        alert('Creeme que yo tampoco le escribiría a spiderman, pero si tu quieres, entonces escribe un mensaje antes de enviar :D');
    }
});
