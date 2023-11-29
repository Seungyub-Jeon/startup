const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
let database;
async function connect() {
  const client = await MongoClient.connect("mongodb://ideachef:%40Sy20160430aA@127.0.0.1:27017");
  database = client.db("ideachef");
  console.log("데이터베이스에 성공적으로 연결되었습니다.");
}

function getDb() {
  if (!database) {
    throw new Error("데이터 베이스 연결이 되지 않았습니다.");
  }
  return database;
}
module.exports = {
  connectToDatabase: connect,
  getDb: getDb,
};
