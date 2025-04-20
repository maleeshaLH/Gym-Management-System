// import express from 'express';
// import { MongoClient } from 'mongodb';
// import contactRouter from "./router/ContactRouter";
//
// const uri = 'mongodb://localhost:27017';
// export const client = new MongoClient(uri);
//
// const app = express();
// app.use(express.json());
//
// async function startServer() {
//     try {
//         await client.connect();
//         console.log('✅ Connected to MongoDB');
//
//         app.use('/user', contactRouter);
//
//         app.listen(3001, () => {
//             console.log('🚀 Server running on port 3001');
//         });
//     } catch (err) {
//         console.error('❌ MongoDB connection error:', err);
//     }
// }
//
// startServer();
