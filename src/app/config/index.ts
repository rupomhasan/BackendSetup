import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join((process.cwd(), ".env")) })


export default {
    port: process.env.PORT,
    database_url: process.env.DATABASE_URL,
    bcrypt_salt_round: process.env.BCRYPT_SALT_ROUNDS,
    refresh_token: process.env.REFRESH_TOKEN,
    access_token: process.env.ACCESS_TOKEN,
    node_env : process.env.NODE_ENV
}