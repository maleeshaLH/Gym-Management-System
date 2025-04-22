import express from 'express';
import { MongoClient } from 'mongodb';
import contactRouter from "./routers/ContactRouter";
import cors from "cors";
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

// ✅ CORS middleware first and only once
app.use(cors({
    origin: 'http://localhost:5174',
    methods: ['GET', 'POST','PUT','DELETE'],
    credentials: true,
}));

const uri = process.env.MONGO_URL || 'mongodb://localhost:27017';
export const client = new MongoClient(uri);

async function startServer() {
    try {
        await client.connect();
        console.log('✅ Connected to MongoDB');

        app.use('/user', contactRouter);

        app.listen(4002, () => {
            console.log('🚀 Server running on port 4002');
        });
    } catch (err) {
        console.error('❌ MongoDB connection error:', err);
    }
}

startServer();
