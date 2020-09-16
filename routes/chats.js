const express = require('express');
const router = express.Router();

const chatsController = require('../controllers/chats');
const messagesController = require('../controllers/messages');

router
  .get('/', chatsController.getChatRooms)
  .post('/', chatsController.createChatRoom)
  .delete('/:chatId', chatsController.deleteChatRoom);

router
  .post('/:chatId/messages', messagesController.createMessage)
  .get('/:chatId/messages', messagesController.getMessagesFromChat);

module.exports = router;
