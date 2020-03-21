const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.deleteVideo = functions.https.onCall(async (data, context) => {
  const dataRef = db.collection("projects").doc(data.id);
  await dataRef.update({
    videos: admin.firestore.FieldValue.arrayRemove(data.video)
  });
  return;
});
