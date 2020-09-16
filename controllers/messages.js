const messagessServices = require('../services/messages');

async function getMessagesFromChat(req, res, next) {
    try {
        let messages = await messagessServices.getMessagesFromChat(req.params.chatId);
        res.status(200).send({ messages: messages });
    } catch (error) {
        res.status(500).send({ error: error.toString() });
    }
}

async function createMessage(req, res, next) {
    try {
        let messageId = await messagessServices.createMessage(req.body);
        await messagessServices.connectMessageToChat(messageId, req.params.chatId);
        await messagessServices.updateChatRoomSummary(req.body, req.params.chatId);
        res.status(200).send({ messageId: messageId });
    } catch (error) {
        res.status(500).send({ error: error.toString() });
    }
}

module.exports = {
    createMessage, 

    getMessagesFromChat,
}