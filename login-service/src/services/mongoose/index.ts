import { CONFIG } from '@lib/env';
import { Application } from 'express';
import mongoose from 'mongoose';

const mongooseLoader = (app: Application) => {
    try {
        mongoose.connect(process.env.MONGOURI, {
            // useNewUrlParser: true,
            // useFindAndModify: false,
            // useUnifiedTopology: true
        }
            , (err) => {
                console.log("Database Connected\n------------------");
                console.log(err);
                app.listen(CONFIG.PORT, () => {
                    console.log("Server Connected\n----------------");
                })
            })
    }
    catch (error) {
        console.log("Error while initializing mongo", error);
        throw error;
    }
}

export default mongooseLoader;