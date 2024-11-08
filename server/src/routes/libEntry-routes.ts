import express from 'express';
import type { Request, Response } from 'express';
import { LibraryEntry } from '../models/index.js';

const router = express.Router();

// POST endpoint to create a new library entry
router.post('/library-entries', async (req: Request, res: Response) => {
    const { userId, gameId, rating } = req.body;
    try {
      const newEntry = await LibraryEntry.create({ userId, gameId, rating  });
      res.status(201).json(newEntry);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });
  
  // GET endpoint to retrieve all library entries
  router.get('/library-entries', async (_req: Request, res: Response) => {
    try {
      const libraryEntries = await LibraryEntry.findAll();
      res.json(libraryEntries);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });
  
  // GET endpoint to retrieve a single library entry by ID
  router.get('/library-entries/:id', async (req: Request, res: Response) => {
    try {
      const entry = await LibraryEntry.findByPk(req.params.id);
      if (entry) {
        res.json(entry);
      } else {
        res.status(404).json({ message: 'Library entry not found' });
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });
  
  // PUT endpoint to update an existing library entry by ID
  router.put('/library-entries/:id', async (req: Request, res: Response) => {
    try {
      const [updatedRows] = await LibraryEntry.update(req.body, {
        where: { id: req.params.id },
      });
      if (updatedRows > 0) {
        const updatedEntry = await LibraryEntry.findByPk(req.params.id);
        res.json(updatedEntry);
      } else {
        res.status(404).json({ message: 'Library entry not found' });
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });
  
  // DELETE endpoint to delete a library entry by ID
  router.delete('/library-entries/:id', async (req: Request, res: Response) => {
    try {
      const deletedRows = await LibraryEntry.destroy({
        where: { id: req.params.id },
      });
      if (deletedRows > 0) {
        res.status(204).end();
      } else {
        res.status(404).json({ message: 'Library entry not found' });
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });
  
  export default router;