import mongoose from 'mongoose';

const mongo = process.env.MONGO_CONN_STR!;
let connected = false;

export const conectDB = async() => {
    try {
        if (!connected) {
            await mongoose.connect(mongo, {
                serverSelectionTimeoutMS: 60 * 1000,
            });
            connected = true
            console.log('Connected database.');
        }
    } catch (error) {
        console.log('Error connecting to the database' + error);
    }
}