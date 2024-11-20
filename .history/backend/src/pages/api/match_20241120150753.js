import dbConnect from '../../utils/dbConnect';

export default async function handler(req, res) {
    await dbConnect(); // Connect to the database

    if (req.method === 'GET') {
        // Example: Fetch all matches
        res.status(200).json({ message: 'GET Matches works!' });
    } else if (req.method === 'POST') {
        // Example: Create a new match
        const { user1, user2, criteria } = req.body;
        if (!user1 || !user2 || !criteria) {
            return res.status(400).json({ error: 'Missing required fields' });
        }
        // Simulate saving match to the database
        res.status(201).json({ message: 'POST Matches works!', data: { user1, user2, criteria } });
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
