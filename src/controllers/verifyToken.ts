import jwt from 'jsonwebtoken'
import config from '../config'

async function verifyToken(req: any, res: any, next: any) {
    const token = req.headers['x-access-token'];
    if (!token) {
        return res.status(401).send({ auth: false, message: 'No token provided' });
    }
    // Decode the Tokenreq.userId = decoded.id;
    const decoded = await jwt.verify(token, config.secret);
    req.userId = decoded;
    next();
}

export default verifyToken