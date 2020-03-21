const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.deleteComment = functions.https.onCall(async (data, context) => {
  let dataref = db.collection("comments").doc(data.comBoxID);
  await dataref.update({
    comments: admin.firestore.FieldValue.arrayRemove(data.comment)
  });
  return;
});
