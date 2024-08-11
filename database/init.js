db.createCollection('user');
db.user.insertOne(
  {
    username: 'admin',
    password: 'admin',
    email:'test@testo.com',
    subscribedAt: new Date()
  }
);
