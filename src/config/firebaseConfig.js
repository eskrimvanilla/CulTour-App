const admin = require('firebase-admin');
require('dotenv').config();

const serviceAccount = {
  type: process.env.FIREBASE_TYPE,
  project_id: process.env.FIREBASE_PROJECT_ID,
  private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  client_email: process.env.FIREBASE_CLIENT_EMAIL,
  // Other credentials from service account key
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;