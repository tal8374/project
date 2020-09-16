const databaseHelper = require('../shared/database');

async function getChatRooms() {
    databaseHelper.runQuery(`
        SELECT id chatId, title, lastMessageText, lastMessageDate, timestamp createdAt
        FROM tChats
    `);
}

async function deleteChatRoom(chatRoomId) {
    databaseHelper.runQuery(`
        DELETE tChats
        WHERE id = ${chatRoomId}
    `);
}

async function createChatRoom(chatRoom) {
    databaseHelper.runQuery(`
        INSERT INTO tChats(title, lastMessageText, lastMessageDate, timestamp)
        VALUES(${chatRoom.title}, NULL, NULL, GETDATE())
        
        --Returns the created id
        SELECT SCOPE_IDENTITY() AS chatId
    `);
    return 123;
}

module.exports = {
    createChatRoom,

    deleteChatRoom,

    getChatRooms,
}