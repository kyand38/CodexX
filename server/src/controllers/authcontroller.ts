import { Request, Response } from 'express';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;// Get username and password from request body

  try {
    const user = await User.findOne({ where: { username } });// Find user by username
    if (!user) {
      console.log('User not found:', username);
      return res.status(401).json({ message: 'Authentication failed' });
    }

    console.log("Plain Text Password Entered:", password); // Log entered password
    console.log("Stored Hashed Password:", user.password); // Log stored hash for comparison

    const passwordIsValid = await bcrypt.compare(password, user.password);// Compare entered password with stored hash
    console.log("Password Validation Result:", passwordIsValid); // Check result of compare

    if (!passwordIsValid) {
      console.log('Password mismatch for user:', username);
      return res.status(401).json({ message: 'Authentication failed' });
    }

    const secretKey = process.env.JWT_SECRET_KEY || '';
    const token = jwt.sign({ id: user.id, username }, secretKey, { expiresIn: '1h' });
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
    // Hash the password only once and store it immediately
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('Plain text password:', password);
    console.log('Generated hash for new user:', hashedPassword);


    // Insert the user into the database using the single generated hash
    console.log("Hash before storing:", hashedPassword);
    const registeredUser = await User.create({ username, email, password: hashedPassword });
    console.log("Generated hash:", hashedPassword);
    console.log("Retrieved from database:", registeredUser.password);
    console.log("Hashes match immediately after insert:", hashedPassword === registeredUser.password);


    // Log the stored password to verify it's the same as the generated hash
    console.log("Hash stored in database for new user:", registeredUser.password);

    // Directly validate stored hash against the same password to verify bcrypt functionality
    const passwordIsValid = await bcrypt.compare(password, registeredUser.password);
    console.log("Immediate validation after hashing (should be true):", passwordIsValid);

    // Generate and return the JWT token
    const secretKey = process.env.JWT_SECRET_KEY || '';
    const token = jwt.sign({ id: registeredUser.id, username }, secretKey, { expiresIn: '1h' });

    return res.json({ token, userId: registeredUser.id });

  } catch (error: any) {
    console.error("Signup error:", error);
    if (error.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).json({ message: 'Username or email already exists' });
    }
    return res.status(500).json({ message: 'Signup failed' });
  }
};

// Compare this snippet from server/src/routes/api/index.ts: