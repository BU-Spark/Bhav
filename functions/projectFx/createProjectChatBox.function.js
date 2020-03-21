const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.createProjectChatBox = functions.https.onCall(
  async (data, context) => {
    let dataref = db.collection("projectchats");
    await dataref.add({
      messages: [],
      chatBoxID: [data.chatBoxID]
    });
    return;
  }
);
