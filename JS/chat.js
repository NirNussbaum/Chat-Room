class ChatRoom {
    constructor(username, room) {
        this.room = room;
        if(localStorage.getItem('currentName')) this.username = localStorage.getItem('currentName');
        else this.username = username;
        this.chats = db.collection('Chats');
        this.unsub;
    }
    async addChat(msg) {
        const currentime = new Date();
        const chat = {
            msg,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(currentime)
        };
        const res = await this.chats.add(chat);
        return res;
    }
    getChats(fun) {
        this.unsub = this.chats
        .where('room', '==', this.room)
        .orderBy('created_at')
        .onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                if(change.type === 'added') {
                    console.log(change);
                    fun(change.doc.data());
                    console.log('///');

                }
            });
        });
    }
    updateName(newName) {
        this.username = newName;
        localStorage.setItem('currentName', newName);
    }
    updateRoom(newRoom) {
        this.room = newRoom;
        if(this.unsub) this.unsub();
    }
}

/*
setTimeout(() => {
    chatroom.updateName('Mika');
    chatroom.updateRoom('coding');
    chatroom.getChats((data) => {
        console.log(data);
    });
}, 2000);
*/
