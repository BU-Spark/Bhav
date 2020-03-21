const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.createProject = functions.https.onCall(async (data, context) => {
  const dataRef = db.collection("projects");
  await dataRef.add({
    name: data.name,
    intro: data.intro,
    members: data.members,
    images: [],
    videos: [],
    media: [],
    challenge: null,
    codesigner: null,
    solution: null,
    technologies: [],
    disabilities: [],
    created: data.created,
    country: null,
    city: null,
    stt: null,
    completion: null,
    devstage: null,
    tags: []
  });
  return;
});
