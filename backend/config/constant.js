import dotenv from 'dotenv'

dotenv.config()
console.log(process.env.NODE_ENV);

export const URL = process.env.URL && process.env.PORT ? 
                        process.env.URL + ':' + process.env.PORT :
                            'http://localhost:8080'