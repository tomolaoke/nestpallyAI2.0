import dbConnect from '../../utils/dbConnect';
import Match from '../../models/Match';

export default async function handler(req, res) {
  await dbConnect();

  switch (req.method) {
    case 'GET':
      try {
        const matches = await Match.find(); // Fetch matches from MongoDB
        res.status(200).json(matches);
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch matches.' });
      }
      break;

    case 'POST':
      try {
        const newMatch = new Match(req.body); // Create a new match
        await newMatch.save();
        res.status(201).json(newMatch);
      } catch (error) {
        res.status(400).json({ error: 'Failed to create match.' });
      }
      break;

    default:
      res.status(405).json({ error: 'Method not allowed.' });
  }
}
