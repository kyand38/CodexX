import { Router, type Request, type Response } from 'express';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });
    
    if (!user) {
      return res.status(401).json({ message: 'Authentication failed' });
    }

    const passwordIsValid = await bcrypt.compare(password, user.password);
    if (!passwordIsValid) {
      return res.status(401).json({ message: 'Authentication failed' });
    }

    const secretKey = process.env.JWT_SECRET_KEY || '';
    const token = jwt.sign({ id: user.id, username }, secretKey, { expiresIn: '1h' });
    
    // Return token and userId for frontend redirection to profile
    return res.json({ token, userId: user.id });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ message: 'Login failed' });
  }
};

export const signup = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Invalid request' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const registeredUser = await User.create({ username, email, password: hashedPassword });

    const secretKey = process.env.JWT_SECRET_KEY || '';
    const token = jwt.sign({ id: registeredUser.id, username }, secretKey, { expiresIn: '1h' });

    // Return token and userId for frontend redirection to profile
    return res.json({ token, userId: registeredUser.id });
  } catch (error: any) {
    console.error('Signup error:', error);
    if (error.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).json({ message: 'Username or email already exists' });
    }
    return res.status(500).json({ message: 'Signup failed' });
  }
};

const router = Router();

// POST /login - Login a user
router.post('/login', login);
router.post('/new', signup);

export default router;