import mongoose from 'mongoose';
import config from 'config';
//import dotenv from 'dotenv';

const db = config.get('CLOUD_MONGO_URI');

//dotenv.config();

const localDB = 'mongodb://localhost:27017/StaffClockInAndOut';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(localDB, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log(
      `MongoDB Connected: ${conn.connection.host}:${conn.connection.port}/${conn.connection.db.databaseName}
  `.cyan.underline
    );
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
