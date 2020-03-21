const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.updateProject = functions.https.onCall(async (data, context) => {
  const dataRef = db.collection("projects").doc(data.id);
  await dataRef.update({
    name: data.name,
    intro: data.intro,
    members: data.members,
    challenge: data.challlenge,
    codesigner: data.codesigner,
    solution: data.solution,
    created: data.created,
    country: data.country,
    city: data.city,
    stt: data.stt,
    completion: data.completion,
    devstage: data.devstage,
    tags: data.tags
  });
  return;
});
