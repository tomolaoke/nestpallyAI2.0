import dbConnect from '../../utils/dbConnect'; // Reuse the MongoDB connection helper

export default async function handler(req, res) {
    await dbConnect(); // Ensure database connection

    if (req.method === 'GET') {
        // Logic for fetching match data
        res.status(200).json({ message: 'GET Matches works!' });
    } else if (req.method === 'POST') {
        // Logic for creating a match
        const { user1, user2, criteria } = req.body; // Replace with actual data structure
        if (!user1 || !user2 || !criteria) {
            return res.status(400).json({ error: 'Missing required fields' });
        }
        // Simulate saving match to the database
        res.status(201).json({ message: 'POST Matches works!', data: { user1, user2, criteria } });
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
