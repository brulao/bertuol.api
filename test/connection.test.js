const mongoose = require('mongoose');
require('dotenv').config();

describe('Database Connection', () => {
  it('should connect to the database successfully', async () => {
    const url = process.env.MONGO_URI;
    await mongoose.connect(url, {
      useNewUrlParser: true,
    });
    expect(mongoose.connection.readyState).toEqual(1);
    await mongoose.disconnect();
  });
});
