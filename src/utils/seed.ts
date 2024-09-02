import * as crypto from 'crypto'

const generateId = () => crypto.randomBytes(16).toString('hex')

export { generateId }
