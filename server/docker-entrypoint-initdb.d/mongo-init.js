let users = [
    {
        "nick": "Matke",
        "score": 1234
    },
    {   
        "nick": "Mare",
        "score": 123
    }
];

db.createCollection('users');
const usersCollection = db.getCollection('users');

for (let user of users)
  usersCollection.insert(user);
