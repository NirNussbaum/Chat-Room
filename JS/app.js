const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newUserNameForm = document.querySelector('.new-name');
const updateMsg = document.querySelector('.update-msg');
const rooms = document.querySelector('.chat-rooms');

const chatUI = new ChatUI(chatList);
const chatroom = new ChatRoom('anonymous', 'general');

chatroom.getChats(data => {chatUI.render(data)});


newChatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const msg = newChatForm.message.value.trim();
    chatroom.addChat(msg)
    .then(() => {newChatForm.reset()})
    .catch(err => console.log(err));
});

newUserNameForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newName = newUserNameForm.name.value.trim();
    chatroom.updateName(newName);
    newUserNameForm.reset();
    updateMsg.textContent = `Your name was updated to ${newName}`;
    setTimeout(() => updateMsg.textContent = '', 3000);
});

rooms.addEventListener('click', e => {
    if(e.target.tagName === 'BUTTON') {
        chatUI.clear();
        chatroom.updateRoom(e.target.getAttribute('id'));
        chatroom.getChats(chat => chatUI.render(chat));
    }
});
