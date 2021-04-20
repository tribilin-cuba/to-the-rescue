import dotenv from 'dotenv'

dotenv.config()
console.log(process.env.NODE_ENV);


export const STAGE = process.env.NODE_ENV

export const PORT = STAGE === 'development' ? 8080 : 80

export const URL = STAGE === 'development' ? 'http://localhost:' + PORT : 'TBD' // TODO

console.log(`RUNNING ON PORT: ${PORT} at ${URL}`)

export const MONGODB_URL = STAGE === 'development' ? 'mongodb://127.0.0.1:27017/to-the-rescue-dev' : 'TBD' // TODO

console.log(`DATABASE URL: ${MONGODB_URL}`);