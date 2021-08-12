import dotenv from 'dotenv'

dotenv.config()
console.log(process.env.NODE_ENV);

export const PICTURES_DIR = "/static/pictures"

export const URL = process.env.URL && process.env.PORT ? 
                        process.env.URL + ':' + process.env.PORT :
                            'http://localhost:8080'

export const TOY_DETA_KEY = 'b05adlw0_WSQqvBzkzp6x7XbJ6nQKA3Tx3C7nQQ6k'