const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.deleteProfilePic = functions.https.onCall(
  async (data, context) => {
    const dataRef = db.collection("users").doc(data.id);
    await dataRef.update({
      profilePic: admin.firestore.FieldValue.delete()
    });
    return;
  }
);
