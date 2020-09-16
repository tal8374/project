const chatsServices = require('../services/chats');

async function getChatRooms(req, res, next) {
  try {
      let chatRooms = await chatsServices.getChatRooms();
      res.status(200).send({ chatRooms: chatRooms });
  } catch (error) {
      res.status(500).send({ error: error.toString() });
  }
}

async function deleteChatRoom(req, res, next) {
    try {
        await chatsServices.deleteChatRoom(req.params.chatId);
        res.status(200).send({ chatId: req.params.chatId });
      } catch (error) {
        res.status(500).send({ error: error.toString() });
      }
}

async function createChatRoom(req, res, next) {
    try {
        let chatId = await chatsServices.createChatRoom(req.body);
        res.status(200).send({ chatId: chatId });
      } catch (error) {
        res.status(500).send({ error: error.toString() });
      }
}

module.exports = {
    createChatRoom,

    deleteChatRoom,

    getChatRooms,
}