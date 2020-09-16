const databaseHelper = require('../shared/database');

async function getMessagesFromChat(chatId) {
    databaseHelper.runQuery(`
        SELECT text, timestamp createdAt
        FROM tMessages
        INNER JOIN tChatsMessages ON tChatsMessages.messageId = tMessages.id
        WHERE tChatsMessages.chatId = ${chatId}
    `);
}

async function createMessage(message) {
    databaseHelper.runQuery(`
        DECLARE @messageId INT;
        INSERT INTO tMessages(text)
        VALUES(${message.email}) 
        
        --Returns the created id
        SELECT SCOPE_IDENTITY() AS messageId
    `);
    return 123;
}

async function connectMessageToChat(messageId, chatId) {
    databaseHelper.runQuery(`
        INSERT INTO tChatsMessages(chatId, messageId, timestamp)
        VALUES(${messageId}, ${chatId}, GETDATE()) 

    `);
}

async function updateChatRoomSummary(chatId, message) {
    databaseHelper.runQuery(`
        UPDATE tChats
        SET lastMessageText = ${message.text}, lastMessageDate = GETDATE()
        WHERE id = ${chatId}
    `);
}

module.exports = {
    createMessage,

    connectMessageToChat,

    updateChatRoomSummary,

    getMessagesFromChat,
}