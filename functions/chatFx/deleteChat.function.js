const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.deleteChat = functions.https.onCall(async (data, context) => {
  let dataref = db.collection("chats").doc(data.chatID);
  await dataref.update({
    messages: admin.firestore.FieldValue.arrayRemove(data.message)
  });
  return;
});
