import { Router, type Request, type Response } from 'express';
import { User } from '../models/user.js';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const user = await User.findOne({
    where: { username },
  });
  if (!user) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  const passwordIsValid = await bcrypt.compare(password, user.password);
  if (!passwordIsValid) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  const secretKey = process.env.JWT_SECRET_KEY || '';
  const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
  return res.json({ token });
};

export const signup = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ message: 'Invalid request' });
    }

    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
    const registeredUser = await User.create({ username, email, password: hashedPassword });

    const secretKey = process.env.JWT_SECRET_KEY || '';
    const token = jwt.sign({ id: registeredUser.id, username }, secretKey, { expiresIn: '1h' });

    return res.json({ token });
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
};

const router = Router();

// POST /login - Login a user
router.post('/login', login);
router.post('/new', signup);

export default router;