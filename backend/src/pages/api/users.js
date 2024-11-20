import dbConnect from '../../utils/dbConnect';
import User from '../../models/User';

export default async function handler(req, res) {
  await dbConnect();

  switch (req.method) {
    case 'GET':
      try {
        const users = await User.find(); // Fetch users from MongoDB
        res.status(200).json(users);
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch users.' });
      }
      break;

    case 'POST':
      try {
        const newUser = new User(req.body); // Create a new user
        await newUser.save();
        res.status(201).json(newUser);
      } catch (error) {
        res.status(400).json({ error: 'Failed to create user.' });
      }
      break;

    default:
      res.status(405).json({ error: 'Method not allowed.' });
  }
}
