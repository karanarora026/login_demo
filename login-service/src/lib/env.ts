import * as dotenv from 'dotenv';
dotenv.config({ path: process.env.ENV_FILE_PATH });

const CONFIG = {
    PORT: 9000,
    MONGODB_URI: process.env.MONGODB_URI
};

export { CONFIG };