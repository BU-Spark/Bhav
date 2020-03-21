const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.deleteImage = functions.https.onCall(async (data, context) => {
  const dataRef = db.collection("projects").doc(data.id);
  await dataRef.update({
    images: admin.firestore.FieldValue.arrayRemove(data.image)
  });
  return;
});
