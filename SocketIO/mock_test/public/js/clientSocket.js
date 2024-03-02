const socket = io();
const send = document.getElementById('send');
const form = document.getElementById('form');
const messages = document.getElementById('messages');
const handleSubmit = (e) => {
  e.preventDefault();

  if(send.value) {
    const li = document.createElement('li');
    li.textContent = send.value;
    messages.appendChild(li);
    socket.emit('sendMessage', send.value);
    send.value = ""
  }
}
form.addEventListener('submit', handleSubmit);
socket.on('sendMessage', (message) => {
  const li = document.createElement('li');
    li.textContent = message;
    messages.appendChild(li);
});
