const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.createCommentBox = functions.https.onCall(
  async (data, context) => {
    let dataref = db.collection("comments");
    await dataref.add({
      comments: [],
      commentBoxID: [data.route]
    });
    return;
  }
);
