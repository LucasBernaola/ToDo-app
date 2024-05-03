// firebase.test.js

const { db } = require("../../src/config/firebase");

describe('Firebase connection', () => {
  it('should connect to Firebase', () => {
    expect(db).toBeDefined();
  });
});