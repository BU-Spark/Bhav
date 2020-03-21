const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.deleteProjectChat = functions.https.onCall(
  async (data, context) => {
    let dataref = db.collection("projectchats").doc(data.chatID);
    await dataref.update({
      messages: admin.firestore.FieldValue.arrayRemove(data.message)
    });
    return;
  }
);