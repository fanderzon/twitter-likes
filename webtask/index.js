"use latest";

const parallel = require('async').parallel;
const MongoClient = require('mongodb').MongoClient;
const uuid = require('node-uuid@1.4.3').v4;
const SUCCESS = {"result": "success"};

function writeNote(db, {id, title, text, read}) {
  return new Promise((resolve, reject) => {
    try {
      db
        .collection('notes')
        .insertOne({
          id,
          title,
          text,
          read
        });
      resolve(SUCCESS);
    } catch(err) {
      reject(err);
    }
  });
}

function addTweet(db, {by, text, link} = {}) {
  const title = `[Tweet by @${by}](${link})`;
  const read = false;

  return writeNote(db, {
    id: uuid(),
    title,
    text,
    read,
  });
}

function addNote(db, {title, text} = {}) {
  const read = false;

  return writeNote(db, {
    id: uuid(),
    title,
    text,
    read,
  });
}

function updateNote(db, {id, title, text, read} = {}) {
  read = read === 'false' ? false : true;
  return new Promise((resolve, reject) => {
    try {
      db
        .collection('notes')
        .updateOne({id}, {
          id,
          title,
          text,
          read
        });
        resolve(SUCCESS)
    } catch(err) {
      reject(err);
    }
  });
}

function getNotes(db, filter = {}) {
  return new Promise((resolve, reject) => {
    db.collection('notes').find(filter).toArray((err, data) => {
      resolve(data);
    });
  });
}

module.exports = function (ctx, done) {
  MongoClient.connect(ctx.data.PEEK_MONGO_URL, function (err, db) {
    if(err) {
      return done(err);
    }

    switch (ctx.data.action) {
      case 'addTweet':
        addTweet(db, ctx.data)
          .then(res => done(null, res));
        break;
        case 'addNote':
          addNote(db, ctx.data)
            .then(res => done(null, res));
          break;
      case 'updateNote':
        updateNote(db, ctx.data)
          .then(res => done(null, res));
        break;
      default:
        return getNotes(db)
          .then(res => done(null, res));
    }
  });
}
