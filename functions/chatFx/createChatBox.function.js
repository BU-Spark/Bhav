const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.createChatBox = functions.https.onCall(async (data, context) => {
  let dataref = db.collection("chats");
  await dataref.add({
    messages: [],
    chatRoomID: [data.chatRoomID]
  });
  return;
});
