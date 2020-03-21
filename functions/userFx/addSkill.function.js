const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.addSkill = functions.https.onCall(async (data, context) => {
  const dataRef = db.collection("users").doc(data.id);
  await dataRef.update({
    skills: admin.firestore.FieldValue.arrayUnion(data.skill)
  });
  return;
});
