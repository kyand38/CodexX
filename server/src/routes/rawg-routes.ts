import express from 'express';
import type { Request, Response } from 'express';

const router = express.Router();
import dotenv from 'dotenv';
dotenv.config();

// GET /users - Get all users
router.get('/game/:id', async (_req: Request, res: Response) => {
  try {
    const response = await fetch(`${process.env.REQUEST_URL}/games/${_req.params.id}?key=${process.env.API_KEY}`);
    const data = await response.json();
    res.json(data);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/games', async (_req: Request, res: Response) => {
  try {
    const response = await fetch(`${process.env.REQUEST_URL}/games?page=1&page_size=15&key=${process.env.API_KEY}`);
    console.log(response)
    const data = await response.json();
    console.log(data);
    res.json(data);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});


export default router;