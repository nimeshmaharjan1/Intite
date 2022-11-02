import mongoose from 'mongoose';

export const connectDatabase = async () => {
    await mongoose
        .connect(process.env.MONGO_URI as string, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })
        .then((data) => {
            console.log(`Mongodb connected with server: ${data.connection.host}`);
        })
        .catch((err) => console.error(err));
};
