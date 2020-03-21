const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.updateUserProfile = functions.https.onCall(
  async (data, context) => {
    const dataRef = db.collection("users").doc(data.id);
    await dataRef.update({
      bio: data.bio,
      city: data.city,
      stt: data.stt,
      country: data.country,
      number: data.number,
      affiliation: data.affiliation,
      uname: data.uname,
      tags: data.tags
    });
    return;
  }
);
